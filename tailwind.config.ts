import type { Config } from "tailwindcss";
import { designTokens } from "./src/lib/design-tokens";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Design Tokens
      fontFamily: {
        sans: designTokens.typography.fontFamily.sans,
        mono: designTokens.typography.fontFamily.mono,
      },
      fontSize: designTokens.typography.fontSize,
      fontWeight: designTokens.typography.fontWeight,
      lineHeight: designTokens.typography.lineHeight,
      letterSpacing: designTokens.typography.letterSpacing,
      
      spacing: designTokens.spacing,
      borderRadius: designTokens.borderRadius,
      borderWidth: designTokens.borderWidth,
      boxShadow: designTokens.boxShadow,
      
      transitionDuration: designTokens.transition.duration,
      transitionTimingFunction: designTokens.transition.easing,
      
      zIndex: designTokens.zIndex,
      
      // Colors de Formalab
      colors: {
        'formalab': {
          // Base colors
          'white': '#FFFFFF',
          'grey-1.5': '#DCDCDC',
          'background': '#E7E7E7',
          'grey-2': '#BEBEBE',
          'grey-1': '#EAEAEA',
          'white-50': '#FFFFFF',
          'white-80': '#FFFFFF',
          
          // Brand colors
          'red': '#C91818',
          'red-hover': '#EA9C99',
          'pink-hover': '#EAA8B9',
          'active': '#1DB2F2',
          'red-light': '#FFC2C0',
          'pink': '#F64043',
          'blue': '#1921F6',
          'blue-hover': '#7B89F5',
          'blue-navy': '#1B20AB',
          
          // Dark Mode Colors
          'white-dark': '#161616',
          'background-dark': '#212121',
          'grey-1-dark': '#2D2D2D',
          'grey-1.5-dark': '#2A2A2A',
          'grey-2-dark': '#242424',
          'white-50-dark': '#000000',
          'white-80-dark': '#000000',
          
          // Foreground colors
          'foreground': '#161616',
          'foreground-dark': '#FFFFFF',
        }
      },
    },
  },
  plugins: [],
};

export default config; 