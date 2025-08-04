// Sistema de Tipografía para Formalab
// Basado en los design tokens y las especificaciones de Figma

export const typography = {
  // Fuentes principales
  fonts: {
    primary: 'Satoshi Variable',
    secondary: 'JetBrains Mono',
    fallback: 'system-ui, -apple-system, sans-serif',
  },

  // Tamaños de fuente
  sizes: {
    xs: '0.75rem',      // 12px
    sm: '0.875rem',     // 14px
    base: '1rem',       // 16px
    lg: '1.125rem',     // 18px
    xl: '1.25rem',      // 20px
    '2xl': '1.5rem',    // 24px
    '3xl': '1.875rem',  // 30px
    '4xl': '2.25rem',   // 36px
    '5xl': '3rem',      // 48px
    '6xl': '3.75rem',   // 60px
  },

  // Pesos de fuente
  weights: {
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },

  // Alturas de línea
  lineHeights: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
    auto: 'auto',
  },

  // Espaciado entre letras
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },

  // Variantes de texto predefinidas
  variants: {
    // Textos de interfaz
    'text-xs': {
      fontSize: '0.75rem',
      fontWeight: '400',
      lineHeight: '1.5',
      letterSpacing: '0em',
    },
    'text-sm': {
      fontSize: '0.875rem',
      fontWeight: '400',
      lineHeight: '1.5',
      letterSpacing: '0em',
    },
    'text-base': {
      fontSize: '1rem',
      fontWeight: '400',
      lineHeight: '1.5',
      letterSpacing: '0em',
    },
    'text-lg': {
      fontSize: '1.125rem',
      fontWeight: '400',
      lineHeight: '1.5',
      letterSpacing: '0em',
    },
    'text-xl': {
      fontSize: '1.25rem',
      fontWeight: '600',
      lineHeight: '1.25',
      letterSpacing: '0em',
    },
    'text-2xl': {
      fontSize: '1.5rem',
      fontWeight: '700',
      lineHeight: '1.25',
      letterSpacing: '0em',
    },
    'text-3xl': {
      fontSize: '1.875rem',
      fontWeight: '700',
      lineHeight: '1.25',
      letterSpacing: '0em',
    },
    'text-4xl': {
      fontSize: '2.25rem',
      fontWeight: '800',
      lineHeight: '1.25',
      letterSpacing: '0em',
    },

    // Títulos específicos
    'title': {
      fontSize: '1.5rem',
      fontWeight: '700',
      lineHeight: '1.25',
      letterSpacing: '0em',
    },
    'subtitle': {
      fontSize: '1.25rem',
      fontWeight: '600',
      lineHeight: '1.25',
      letterSpacing: '0em',
    },
    'heading': {
      fontSize: '2.25rem',
      fontWeight: '800',
      lineHeight: '1.25',
      letterSpacing: '0em',
    },

    // Textos especializados
    'caption': {
      fontSize: '0.75rem',
      fontWeight: '400',
      lineHeight: '1.5',
      letterSpacing: '0em',
    },
    'label': {
      fontSize: '0.875rem',
      fontWeight: '500',
      lineHeight: '1.5',
      letterSpacing: '0em',
    },
    'body': {
      fontSize: '1rem',
      fontWeight: '400',
      lineHeight: '1.5',
      letterSpacing: '0em',
    },
    'mono': {
      fontSize: '0.875rem',
      fontWeight: '400',
      lineHeight: '1.5',
      letterSpacing: '0em',
      fontFamily: 'JetBrains Mono, Consolas, monospace',
    },
  },
};

// Función helper para generar clases CSS
export const getTypographyStyles = (variant: keyof typeof typography.variants) => {
  const styles = typography.variants[variant];
  return {
    fontSize: styles.fontSize,
    fontWeight: styles.fontWeight,
    lineHeight: styles.lineHeight,
    letterSpacing: styles.letterSpacing,
    fontFamily: styles.fontFamily || typography.fonts.primary,
  };
};

// Función helper para generar clases de Tailwind
export const getTypographyClasses = (variant: keyof typeof typography.variants) => {
  const styles = typography.variants[variant];
  const classes = [
    `text-[${styles.fontSize}]`,
    `font-${styles.fontWeight === '400' ? 'normal' : styles.fontWeight === '500' ? 'medium' : styles.fontWeight === '600' ? 'semibold' : styles.fontWeight === '700' ? 'bold' : styles.fontWeight === '800' ? 'extrabold' : 'normal'}`,
    `leading-${styles.lineHeight === '1' ? 'none' : styles.lineHeight === '1.25' ? 'tight' : styles.lineHeight === '1.5' ? 'normal' : 'normal'}`,
    `tracking-${styles.letterSpacing === '0em' ? 'normal' : styles.letterSpacing === '-0.025em' ? 'tight' : styles.letterSpacing === '0.025em' ? 'wide' : 'normal'}`,
  ];

  if (styles.fontFamily && styles.fontFamily !== typography.fonts.primary) {
    classes.push('font-mono');
  }

  return classes.join(' ');
}; 