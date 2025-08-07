/**
 * Batak Color Palette
 * Centralized color definitions for the Aksara Batak website
 */

export const batakColors = {
  // Primary browns - main brand colors
  brown: {
    light: '#D6C0B3',
    dark: '#493628',
    medium: '#AB886D',
    darker: '#5B3C24',
    muted: '#956C4EBF', // 75% alpha
    deep: '#311F12',
    deepAlt: '#331F11',
    warm: '#372416',
    rich: '#402B1B',
    soft: '#AE8769',
  },
  
  // Light tones
  light: {
    cream: '#E0B59C',
    grayLight: '#D9D9D9',
    grayWarm: '#E4E0E1',
  },
  
  // Neutral tones
  neutral: {
    white: '#FFFFFF',
    black: '#000000',
    blackMuted: '#00000080', // 50% alpha
  },
  
  // Alpha variants
  alpha: {
    brownLight50: '#D6C0B380', // 50% alpha
    brownLight75: '#D6C0B3BF', // 75% alpha
  },
  
  // Gradient colors
  gradient: {
    start: '#3C2616',
    end: '#241205',
  },
} as const;

/**
 * CSS gradient utilities
 */
export const batakGradients = {
  vertical: `linear-gradient(to bottom, ${batakColors.gradient.start} 10%, ${batakColors.gradient.end} 100%)`,
  horizontal: `linear-gradient(to right, ${batakColors.gradient.start} 10%, ${batakColors.gradient.end} 100%)`,
  radial: `radial-gradient(circle, ${batakColors.gradient.start} 10%, ${batakColors.gradient.end} 100%)`,
} as const;

/**
 * Tailwind class name utilities for commonly used color combinations
 */
export const batakColorClasses = {
  // Background classes
  backgrounds: {
    primary: 'bg-batak-brown-light',
    dark: 'bg-batak-brown-dark',
    cream: 'bg-batak-cream',
    gradient: 'bg-batak-gradient',
  },
  
  // Text classes
  text: {
    primary: 'text-batak-brown-dark',
    light: 'text-batak-brown-light',
    cream: 'text-batak-cream',
    white: 'text-batak-white',
  },
  
  // Border classes
  borders: {
    primary: 'border-batak-brown-medium',
    dark: 'border-batak-brown-dark',
    light: 'border-batak-brown-light',
  },
  
  // Common color combinations
  combinations: {
    primaryCard: 'bg-batak-brown-light text-batak-brown-dark border-batak-brown-medium',
    darkCard: 'bg-batak-brown-dark text-batak-cream border-batak-brown-medium',
    creamCard: 'bg-batak-cream text-batak-brown-dark border-batak-brown-light',
    gradientCard: 'bg-batak-gradient text-batak-cream',
  },
} as const;

/**
 * Type definitions for better TypeScript support
 */
export type BatakColorKey = keyof typeof batakColors;
export type BatakGradientKey = keyof typeof batakGradients;
export type BatakColorClassKey = keyof typeof batakColorClasses;
