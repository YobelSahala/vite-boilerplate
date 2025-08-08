import { useEffect } from 'react';
import { useAppStore } from '@/stores/useAppStore';

export function useTheme() {
  const { theme, setTheme } = useAppStore();

  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove existing theme classes
    root.classList.remove('light', 'dark', 'colorful');
    
    // Add current theme class
    root.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    const themes: Array<typeof theme> = ['light', 'dark', 'colorful'];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  return { theme, setTheme, toggleTheme };
}

