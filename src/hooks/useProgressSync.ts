import { useEffect, useRef } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useAppStore } from "@/store/useAppStore";
import { supabase } from "@/integrations/supabase/client";

/**
 * Syncs Zustand progress store ↔ Supabase user_progress table.
 * - On login: loads DB progress and merges with any local progress.
 * - On store change: debounced upsert to DB.
 */
export const useProgressSync = () => {
  const { user } = useAuth();
  const store = useAppStore();
  const isSyncing = useRef(false);
  const debounceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastSyncedJson = useRef<string>("");

  // Load progress from DB when user logs in
  useEffect(() => {
    if (!user) return;

    const loadFromDb = async () => {
      isSyncing.current = true;
      try {
        const { data, error } = await supabase
          .from("user_progress")
          .select("*")
          .eq("user_id", user.id)
          .maybeSingle();

        if (error) {
          console.error("Failed to load progress:", error.message);
          isSyncing.current = false;
          return;
        }

        if (data) {
          // Merge: union of DB + local for arrays, DB wins for scalars
          const local = useAppStore.getState().user;
          const merged = {
            goal: data.goal ?? local.goal,
            level: data.level ?? local.level,
            onboardingComplete: data.onboarding_complete || local.onboardingComplete,
            completedLessons: [
              ...new Set([
                ...(data.completed_lessons ?? []),
                ...local.completedLessons,
              ]),
            ],
            completedQuizzes: [
              ...new Set([
                ...(data.completed_quizzes ?? []),
                ...local.completedQuizzes,
              ]),
            ],
            favoritePrompts: [
              ...new Set([
                ...(data.favorite_prompts ?? []),
                ...local.favoritePrompts,
              ]),
            ],
            savedResources: [
              ...new Set([
                ...((data as any).saved_resources ?? []),
                ...local.savedResources,
              ]),
            ],
          };

          useAppStore.setState({ user: merged });
          lastSyncedJson.current = JSON.stringify(merged);

          // If merge produced new data vs DB, push it back
          const dbJson = JSON.stringify({
            goal: data.goal,
            level: data.level,
            onboardingComplete: data.onboarding_complete,
            completedLessons: data.completed_lessons ?? [],
            completedQuizzes: data.completed_quizzes ?? [],
            favoritePrompts: data.favorite_prompts ?? [],
            savedResources: (data as any).saved_resources ?? [],
          });
          if (JSON.stringify(merged) !== dbJson) {
            await upsertProgress(user.id, merged);
          }
        } else {
          // No DB record yet — push current local state
          const local = useAppStore.getState().user;
          await upsertProgress(user.id, local);
          lastSyncedJson.current = JSON.stringify(local);
        }
      } catch (err) {
        console.error("Progress sync error:", err);
      }
      isSyncing.current = false;
    };

    loadFromDb();
  }, [user?.id]);

  // Subscribe to store changes and debounce-sync to DB
  useEffect(() => {
    if (!user) return;

    const unsub = useAppStore.subscribe((state) => {
      if (isSyncing.current) return;

      const currentJson = JSON.stringify(state.user);
      if (currentJson === lastSyncedJson.current) return;

      if (debounceTimer.current) clearTimeout(debounceTimer.current);
      debounceTimer.current = setTimeout(async () => {
        const latest = useAppStore.getState().user;
        lastSyncedJson.current = JSON.stringify(latest);
        await upsertProgress(user.id, latest);
      }, 1000);
    });

    return () => {
      unsub();
      if (debounceTimer.current) clearTimeout(debounceTimer.current);
    };
  }, [user?.id]);
};

async function upsertProgress(
  userId: string,
  profile: {
    goal: string | null;
    level: string | null;
    onboardingComplete: boolean;
    completedLessons: string[];
    completedQuizzes: string[];
    favoritePrompts: string[];
    savedResources: string[];
  }
) {
  const { error } = await supabase.from("user_progress").upsert(
    {
      user_id: userId,
      goal: profile.goal,
      level: profile.level,
      onboarding_complete: profile.onboardingComplete,
      completed_lessons: profile.completedLessons,
      completed_quizzes: profile.completedQuizzes,
      favorite_prompts: profile.favoritePrompts,
      saved_resources: profile.savedResources,
    } as any,
    { onConflict: "user_id" }
  );

  if (error) {
    console.error("Failed to save progress:", error.message);
  }
}
