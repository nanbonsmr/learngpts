import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserProfile {
  goal: string | null;
  level: string | null;
  onboardingComplete: boolean;
  completedLessons: string[];
  completedQuizzes: string[];
  favoritePrompts: string[];
  savedResources: string[];
}

interface AppState {
  user: UserProfile;
  setGoal: (goal: string) => void;
  setLevel: (level: string) => void;
  completeOnboarding: () => void;
  completeLesson: (lessonId: string) => void;
  uncompleteLesson: (lessonId: string) => void;
  completeQuiz: (categoryId: string) => void;
  toggleFavoritePrompt: (promptId: string) => void;
  toggleSavedResource: (resourceTitle: string) => void;
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
        completedQuizzes: [],
        favoritePrompts: [],
        savedResources: [],
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
      completeQuiz: (categoryId) =>
        set((state) => ({
          user: {
            ...state.user,
            completedQuizzes: [...new Set([...state.user.completedQuizzes, categoryId])],
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
      toggleSavedResource: (resourceTitle) =>
        set((state) => ({
          user: {
            ...state.user,
            savedResources: state.user.savedResources.includes(resourceTitle)
              ? state.user.savedResources.filter((t) => t !== resourceTitle)
              : [...state.user.savedResources, resourceTitle],
          },
        })),
      resetProgress: () =>
        set({
          user: {
            goal: null,
            level: null,
            onboardingComplete: false,
            completedLessons: [],
            completedQuizzes: [],
            favoritePrompts: [],
            savedResources: [],
          },
        }),
    }),
    {
      name: "chatgpt-learning-store",
      merge: (persistedState: any, currentState: AppState) => {
        const persisted = (persistedState as Partial<AppState>) ?? {};
        return {
          ...currentState,
          ...persisted,
          user: {
            ...currentState.user,
            ...(persisted.user ?? {}),
            savedResources: persisted.user?.savedResources ?? [],
          },
        };
      },
    }
  )
);
