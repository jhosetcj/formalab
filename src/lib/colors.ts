// Paleta de colores de Formalab basada en el diseño de Figma

export const colors = {
  // Light Mode Colors
  light: {
    // Base colors
    white: '#FFFFFF',
    'grey-1.5': '#DCDCDC',
    background: '#E7E7E7',
    'grey-2': '#BEBEBE',
    'grey-1': '#EAEAEA',
    'white-50': '#FFFFFF', // 50% opacity
    'white-80': '#FFFFFF', // 80% opacity
    
    // Brand colors
    red: '#C91818',
    'red-hover': '#EA9C99',
    'pink-hover': '#EAA8B9',
    'active': '#1DB2F2',
    'red-light': '#FFC2C0',
    pink: '#F64043',
    blue: '#1921F6',
    'blue-hover': '#7B89F5',
    'blue-navy': '#1B20AB',
  },
  
  // Dark Mode Colors
  dark: {
    // Base colors
    'white-dark': '#161616',
    'background-dark': '#212121',
    'grey-1-dark': '#2D2D2D',
    'grey-1.5-dark': '#2A2A2A',
    'grey-2-dark': '#242424',
    'white-50-dark': '#000000', // 30% opacity
    'white-80-dark': '#000000', // 20% opacity
    
    // Brand colors (same as light mode for now, can be adjusted)
    red: '#C91818',
    'red-hover': '#EA9C99',
    'pink-hover': '#EAA8B9',
    'active': '#1DB2F2',
    'red-light': '#FFC2C0',
    pink: '#F64043',
    blue: '#1921F6',
    'blue-hover': '#7B89F5',
    'blue-navy': '#1B20AB',
  }
};

// Función helper para obtener colores según el modo
export const getColor = (colorName: string, mode: 'light' | 'dark' = 'light') => {
  const modeColors = colors[mode];
  return modeColors[colorName as keyof typeof modeColors] || colorName;
};

// Función helper para obtener colores con opacidad
export const getColorWithOpacity = (colorName: string, opacity: number, mode: 'light' | 'dark' = 'light') => {
  const color = getColor(colorName, mode);
  if (opacity === 100) return color;
  
  // Convertir hex a rgba
  const hex = color.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  
  return `rgba(${r}, ${g}, ${b}, ${opacity / 100})`;
}; 