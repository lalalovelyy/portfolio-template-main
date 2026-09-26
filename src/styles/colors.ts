/**
 * Centralized Color Palette for Portfolio
 * 
 * This file contains all colors used throughout the application
 * organized by semantic meaning and theme variants.
 */

export const colors = {
  // Base colors
  white: '#FFFFFF',
  black: '#000000',
  transparent: 'transparent',

  // Primary Pink Palette
  pink: {
    25: '#FBF8FE',        // Very light pink transition color (rgb(251 248 254))
    50: '#F8F4FE',        // Light pink background
    100: '#EFE3FB',       // Lavender blush
    200: '#E3CFF6',       // Mimi pink
    300: '#CBB0EB',       // Main dusty pink
    400: '#B594DE',       // Darker dusty pink
    500: '#9F7BCC',       // Even darker dusty pink
    600: '#8A63B7',       // Strong dusty pink
    700: '#7B5CA3',       // Navigation text
    800: '#644885',       // Main text pink (WCAG AA)
    900: '#4A3865',       // Darkest pink
  },

  // Dark theme colors
  dark: {
    50: '#F8FAFC',        // Almost white
    100: '#F1F5F9',       // Very light gray
    200: '#E2E8F0',       // Light gray
    300: '#CBD5E1',       // Medium light gray
    400: '#94A3B8',       // Medium gray
    500: '#64748B',       // Neutral gray
    600: '#475569',       // Medium dark gray
    700: '#334155',       // Dark gray
    800: '#1E293B',       // Very dark gray
    900: '#0F172A',       // Almost black
    950: '#020617',       // Darkest
  },

  // Semantic colors
  background: {
    light: {
      primary: '#FFFFFF',
      secondary: '#F8F4FE',
      gradient: 'linear-gradient(180deg, rgb(250 246 254) 0%, rgb(247 240 253) 50%, rgb(243 235 252) 100%)',
      gradientEnd: 'rgb(243 235 252)', // End color of the main gradient for seamless transitions
      overlay: 'rgba(255, 255, 255, 0.5)',
      // Section-specific gradients - mostly white with very light pink brush at edges
      sections: {
        about: 'linear-gradient(180deg, rgb(255 255 255) 0%, rgb(253 250 254) 30%, #FBF8FE 100%)',
        skills: 'linear-gradient(180deg, rgb(251 248 254) 0%, rgb(252 251 254) 30%, rgb(252 251 254) 70%, rgb(255 255 255) 100%)',
        projects: 'linear-gradient(180deg, rgb(251 248 254) 0%, rgb(255 255 255) 15%, rgb(255 255 255) 85%, rgb(251 248 254) 100%)',
        experience: 'linear-gradient(180deg, rgb(251 248 254) 0%, rgb(252 251 254) 25%, rgb(252 251 254) 75%, rgb(251 248 254) 100%)',
        certifications: 'linear-gradient(180deg, rgb(255 255 255) 0%, rgb(255 255 255) 60%, rgb(252 251 254) 100%)',
      },
    },
    dark: {
      primary: '#0F172A',
      secondary: '#1E293B',
      gradient: '#0A0F1B',
      gradientEnd: '#0A0F1B', // Consistent dark background for seamless transitions
      overlay: 'rgba(0, 0, 0, 0.7)',
      // Dark mode sections maintain consistent dark background
      sections: {
        about: '#0A0F1B',
        skills: '#0A0F1B',
        projects: '#0A0F1B',
        experience: '#0A0F1B',
        certifications: '#0A0F1B',
      },
    },
  },

  // Text colors
  text: {
    light: {
      primary: '#1F2937',     // rgb(31, 41, 55)
      secondary: '#4B5563',   // rgb(75, 85, 99)
      tertiary: '#6B7280',    // rgb(107, 114, 128)
      accent: '#644885',      // Pink text
      pink: '#7C3AED',        // rgb(190, 24, 93)
    },
    dark: {
      primary: '#FFFFFF',
      secondary: '#E3CFF6',
      tertiary: '#CBB0EB',
      accent: '#B594DE',
      pink: '#CBB0EB',
    },
  },

  // Interactive elements
  interactive: {
    light: {
      primary: 'rgba(203, 176, 235, 0.1)',
      hover: 'rgba(203, 176, 235, 0.2)',
      active: '#CBB0EB',
      focus: 'rgba(203, 176, 235, 0.3)',
    },
    dark: {
      primary: 'rgba(203, 176, 235, 0.1)',
      hover: 'rgba(203, 176, 235, 0.2)',
      active: '#CBB0EB',
      focus: 'rgba(203, 176, 235, 0.3)',
    },
  },

  // Navigation specific
  navigation: {
    light: {
      background: 'rgba(240, 230, 251, 0.4)',
      backgroundScrolled: 'rgba(240, 230, 251, 0.6)',
      border: 'rgba(227, 207, 246, 0.15)',
      borderScrolled: 'rgba(227, 207, 246, 0.2)',
      shadow: 'rgba(227, 207, 246, 0.08)',
      shadowScrolled: 'rgba(227, 207, 246, 0.12)',
      mobile: 'rgba(251, 248, 254, 0.95)',
    },
    dark: {
      background: 'rgba(10, 15, 27, 0.4)',
      backgroundScrolled: 'rgba(10, 15, 27, 0.6)',
      border: 'rgba(203, 176, 235, 0.1)',
      borderScrolled: 'rgba(203, 176, 235, 0.15)',
      shadow: 'rgba(0, 0, 0, 0.2)',
      shadowScrolled: 'rgba(0, 0, 0, 0.3)',
      mobile: 'rgba(10, 15, 27, 0.95)',
    },
  },

  // Button variants
  button: {
    primary: {
      light: {
        background: '#CBB0EB',
        text: '#FFFFFF',
        hover: '#B594DE',
        shadow: 'rgba(203, 176, 235, 0.3)',
      },
      dark: {
        background: '#CBB0EB',
        text: '#0A0F1B',
        hover: '#E3CFF6',
        shadow: 'rgba(203, 176, 235, 0.4)',
      },
    },
    secondary: {
      light: {
        background: 'rgba(255, 255, 255, 0.8)',
        text: '#1F2937',
        border: '#CBB0EB',
        hover: '#EFE3FB',
      },
      dark: {
        background: 'rgba(31, 41, 55, 0.9)',
        text: '#FFFFFF',
        border: '#374151',
        hover: 'rgba(203, 176, 235, 0.1)',
      },
    },
    outline: {
      light: {
        background: 'transparent',
        text: '#9F7BCC',
        border: '#CBB0EB',
        hover: '#EFE3FB',
      },
      dark: {
        background: '#1F2937',
        text: '#CBB0EB',
        border: '#B594DE',
        hover: 'rgba(203, 176, 235, 0.1)',
      },
    },
  },

  // Card colors
  card: {
    light: {
      background: '#FFFFFF',
      border: 'rgba(203, 176, 235, 0.3)',
      shadow: 'rgba(0, 0, 0, 0.1)',
    },
    dark: {
      background: '#1F2937',
      border: 'rgba(55, 65, 81, 0.3)',
      shadow: 'rgba(0, 0, 0, 0.3)',
    },
  },

  // Special effects
  effects: {
    glow: 'rgba(227, 207, 246, 0.3)',
    dropShadow: 'rgba(203, 176, 235, 0.3)',
    textShadow: 'rgba(0, 0, 0, 0.1)',
    blur: 'rgba(255, 255, 255, 0.1)',
  },

  // Utility colors
  utility: {
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
    neutral: '#6B7280',
  },

  // Special colors
  special: {
    dragMe: '#B347EA',       // Hot pink for drag me star (rgb(236, 73, 153))
    aurora: {
      dark: '#B98BF0',       // Pink aurora for dark mode
      light: {
        1: '#E9D5FF',        // Light pink aurora stop 1
        2: '#DDD6FE',        // Light pink aurora stop 2
        3: '#EDE9FE',        // Light pink aurora stop 3
      }
    }
  },
} as const;

// Type definitions for better TypeScript support
type ColorTheme = 'light' | 'dark';
type ColorVariant = keyof typeof colors;

export type { ColorTheme, ColorVariant };

// Helper function to get theme-specific colors
export const getThemeColors = (theme: ColorTheme) => ({
  background: colors.background[theme],
  text: colors.text[theme],
  interactive: colors.interactive[theme],
  navigation: colors.navigation[theme],
  button: {
    primary: colors.button.primary[theme],
    secondary: colors.button.secondary[theme],
    outline: colors.button.outline[theme],
  },
  card: colors.card[theme],
});