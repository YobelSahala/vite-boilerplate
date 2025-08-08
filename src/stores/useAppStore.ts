import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { AppState, Theme, User } from '@/types';

interface AppStore extends AppState {
  setUser: (user: User | null) => void;
  setTheme: (theme: Theme) => void;
  setSidebarCollapsed: (collapsed: boolean) => void;
  setLanguage: (language: string) => void;
  toggleSidebar: () => void;
}

export const useAppStore = create<AppStore>()(
  persist(
    (set) => ({
      // Initial state
      user: null,
      theme: 'light',
      sidebarCollapsed: false,
      language: 'en',
      
      // Actions
      setUser: (user) => set({ user }),
      setTheme: (theme) => set({ theme }),
      setSidebarCollapsed: (collapsed) => set({ sidebarCollapsed: collapsed }),
      setLanguage: (language) => set({ language }),
      toggleSidebar: () => set((state) => ({ sidebarCollapsed: !state.sidebarCollapsed })),
    }),
    {
      name: 'app-store',
      partialize: (state) => ({
        theme: state.theme,
        sidebarCollapsed: state.sidebarCollapsed,
        language: state.language,
      }),
    }
  )
);