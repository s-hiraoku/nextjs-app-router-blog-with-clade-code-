'use client';

import { useState, useEffect, useCallback } from 'react';

type Theme = 'light' | 'dark' | 'system';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>('system');
  const [mounted, setMounted] = useState(false);

  const applyTheme = useCallback((currentTheme: Theme) => {
    const root = document.documentElement;
    
    // レイアウトシフトを防ぐため、トランジションを一時的に無効化
    const originalTransition = root.style.transition;
    root.style.transition = 'none';
    
    if (currentTheme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      if (systemTheme === 'dark') {
        root.classList.add('dark');
        root.style.colorScheme = 'dark';
      } else {
        root.classList.remove('dark');
        root.style.colorScheme = 'light';
      }
    } else {
      if (currentTheme === 'dark') {
        root.classList.add('dark');
        root.style.colorScheme = 'dark';
      } else {
        root.classList.remove('dark');
        root.style.colorScheme = 'light';
      }
    }
    
    // フレームを待ってからトランジションを復元
    requestAnimationFrame(() => {
      root.style.transition = originalTransition;
    });
  }, []);

  // 初期化
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    const initialTheme = savedTheme || 'system';
    
    setTheme(initialTheme);
    applyTheme(initialTheme);
    setMounted(true);
  }, [applyTheme]);

  // テーマ変更時の処理
  useEffect(() => {
    if (!mounted) return;

    applyTheme(theme);
    localStorage.setItem('theme', theme);

    // システムテーマの場合は、システム設定変更を監視
    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = () => applyTheme(theme);
      
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [theme, mounted, applyTheme]);

  const updateTheme = useCallback((newTheme: Theme) => {
    setTheme(newTheme);
  }, []);

  return { 
    theme, 
    setTheme: updateTheme,
    mounted
  };
}