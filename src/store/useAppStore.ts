import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserProfile {
  goal: string | null;
  level: string | null;
  onboardingComplete: boolean;
  completedLessons: string[];
  favoritePrompts: string[];
}

interface AppState {
  user: UserProfile;
  setGoal: (goal: string) => void;
  setLevel: (level: string) => void;
  completeOnboarding: () => void;
  completeLesson: (lessonId: string) => void;
  uncompleteLesson: (lessonId: string) => void;
  toggleFavoritePrompt: (promptId: string) => void;
  resetProgress: () => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      user: {
        goal: null,
        level: null,
        onboardingComplete: false,
        completedLessons: [],
        favoritePrompts: [],
      },
      setGoal: (goal) =>
        set((state) => ({ user: { ...state.user, goal } })),
      setLevel: (level) =>
        set((state) => ({ user: { ...state.user, level } })),
      completeOnboarding: () =>
        set((state) => ({ user: { ...state.user, onboardingComplete: true } })),
      completeLesson: (lessonId) =>
        set((state) => ({
          user: {
            ...state.user,
            completedLessons: [...new Set([...state.user.completedLessons, lessonId])],
          },
        })),
      uncompleteLesson: (lessonId) =>
        set((state) => ({
          user: {
            ...state.user,
            completedLessons: state.user.completedLessons.filter((id) => id !== lessonId),
          },
        })),
      toggleFavoritePrompt: (promptId) =>
        set((state) => ({
          user: {
            ...state.user,
            favoritePrompts: state.user.favoritePrompts.includes(promptId)
              ? state.user.favoritePrompts.filter((id) => id !== promptId)
              : [...state.user.favoritePrompts, promptId],
          },
        })),
      resetProgress: () =>
        set({
          user: {
            goal: null,
            level: null,
            onboardingComplete: false,
            completedLessons: [],
            favoritePrompts: [],
          },
        }),
    }),
    { name: "chatgpt-learning-store" }
  )
);
