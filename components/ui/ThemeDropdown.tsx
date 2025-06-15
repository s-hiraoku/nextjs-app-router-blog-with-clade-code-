'use client';

import { useTheme } from '@/hooks/useTheme';
import { useEffect, useState, useRef } from 'react';

type Theme = 'light' | 'dark' | 'system';

interface ThemeOption {
  value: Theme;
  label: string;
  icon: React.ReactNode;
}

const themeOptions: ThemeOption[] = [
  {
    value: 'light',
    label: 'ライトモード',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    value: 'dark',
    label: 'ダークモード',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    ),
  },
  {
    value: 'system',
    label: 'システム設定',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export function ThemeDropdown() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        document.removeEventListener('keydown', handleEscape);
      };
    }
  }, [isOpen]);

  if (!mounted) {
    return (
      <button
        className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        disabled
        aria-label="テーマ設定読み込み中"
      >
        <div className="w-4 h-4 bg-gray-300 rounded animate-pulse"></div>
      </button>
    );
  }

  const currentOption = themeOptions.find(option => option.value === theme) || themeOptions[2];

  const handleThemeChange = (newTheme: Theme) => {
    // レイアウトシフトを防ぐため、ドロップダウンを先に闉じる
    setIsOpen(false);
    
    // 少し遅延してテーマを変更し、アニメーションをスムーズに
    setTimeout(() => {
      setTheme(newTheme);
    }, 150);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        aria-label={`テーマを選択 (現在: ${currentOption.label})`}
        aria-expanded={isOpen}
        aria-haspopup="true"
        title={currentOption.label}
      >
        <span className="text-gray-700 dark:text-gray-300">
          {currentOption.icon}
        </span>
      </button>

      {isOpen && (
        <>
          {/* オーバーレイ */}
          <div 
            className="fixed inset-0 z-40 sm:hidden" 
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          
          {/* ドロップダウンメニュー */}
          <div className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-50 transform origin-top-right transition-all duration-150 scale-100 opacity-100 animate-in slide-in-from-top-2 fade-in-0">
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="theme-menu">
              {themeOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleThemeChange(option.value)}
                  className={`w-full flex items-center gap-3 px-3 py-2 text-sm text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-700 ${
                    theme === option.value
                      ? 'bg-blue-50 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300'
                      : 'text-gray-700 dark:text-gray-300'
                  }`}
                  role="menuitem"
                  aria-label={`テーマを${option.label}に変更`}
                >
                  <span aria-hidden="true">{option.icon}</span>
                  <span>{option.label}</span>
                  {theme === option.value && (
                    <svg 
                      className="w-4 h-4 ml-auto text-blue-600 dark:text-blue-400" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}