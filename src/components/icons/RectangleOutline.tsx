import React from 'react';
import { Icon, IconProps } from './Icon';

export const RectangleOutline: React.FC<IconProps> = ({ variant = 'current', ...props }) => {
  // Determinar qué variante usar
  let content;
  if (variant === 'black') {
    content = (
      <>
        <path d="M22.8 0C23.4627 0 24 0.537258 24 1.2V22.8C24 23.4627 23.4627 24 22.8 24H1.2C0.537259 24 0 23.4627 0 22.8V1.2C0 0.537259 0.537258 0 1.2 0H22.8ZM2.4 20.4C2.4 21.0627 2.93726 21.6 3.6 21.6H20.4C21.0627 21.6 21.6 21.0627 21.6 20.4V3.6C21.6 2.93726 21.0627 2.4 20.4 2.4H3.6C2.93726 2.4 2.4 2.93726 2.4 3.6V20.4Z" fill="#595959"/>
      </>
    );
  } else if (variant === 'white') {
    content = (
      <>
        <path d="M22.8 0C23.4627 0 24 0.537258 24 1.2V22.8C24 23.4627 23.4627 24 22.8 24H1.2C0.537259 24 0 23.4627 0 22.8V1.2C0 0.537259 0.537258 0 1.2 0H22.8ZM2.4 20.4C2.4 21.0627 2.93726 21.6 3.6 21.6H20.4C21.0627 21.6 21.6 21.0627 21.6 20.4V3.6C21.6 2.93726 21.0627 2.4 20.4 2.4H3.6C2.93726 2.4 2.4 2.93726 2.4 3.6V20.4Z" fill="#ACACAC"/>
      </>
    );
  } else {
    // Para current, usar la versión current (con currentColor)
    content = (
      <>
        <path d="M22.8 0C23.4627 0 24 0.537258 24 1.2V22.8C24 23.4627 23.4627 24 22.8 24H1.2C0.537259 24 0 23.4627 0 22.8V1.2C0 0.537259 0.537258 0 1.2 0H22.8ZM2.4 20.4C2.4 21.0627 2.93726 21.6 3.6 21.6H20.4C21.0627 21.6 21.6 21.0627 21.6 20.4V3.6C21.6 2.93726 21.0627 2.4 20.4 2.4H3.6C2.93726 2.4 2.4 2.93726 2.4 3.6V20.4Z" fill="currentColor"/>
      </>
    );
  }
  
  return (
    <Icon variant={variant} {...props}>
      {content}
    </Icon>
  );
};
