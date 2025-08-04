import React from 'react';
import { Icon, IconProps } from './Icon';

export const Angular: React.FC<IconProps> = ({ variant = 'current', ...props }) => {
  // Determinar qué variante usar
  let content;
  if (variant === 'black') {
    content = (
      <>
        <path d="M22.8 0C23.4627 0 24 0.537258 24 1.2V1.2C24 1.86274 23.4627 2.4 22.8 2.4H3.6C2.93726 2.4 2.4 2.93726 2.4 3.6V22.8C2.4 23.4627 1.86274 24 1.2 24V24C0.537258 24 0 23.4627 0 22.8V1.2C0 0.537259 0.537258 0 1.2 0H22.8Z" fill="#595959"/>
      </>
    );
  } else if (variant === 'white') {
    content = (
      <>
        <path d="M22.8 0C23.4627 0 24 0.537258 24 1.2V1.2C24 1.86274 23.4627 2.4 22.8 2.4H3.6C2.93726 2.4 2.4 2.93726 2.4 3.6V22.8C2.4 23.4627 1.86274 24 1.2 24V24C0.537258 24 0 23.4627 0 22.8V1.2C0 0.537259 0.537258 0 1.2 0H22.8Z" fill="#ACACAC"/>
      </>
    );
  } else {
    // Para current, usar la versión current (con currentColor)
    content = (
      <>
        <path d="M22.8 0C23.4627 0 24 0.537258 24 1.2V1.2C24 1.86274 23.4627 2.4 22.8 2.4H3.6C2.93726 2.4 2.4 2.93726 2.4 3.6V22.8C2.4 23.4627 1.86274 24 1.2 24V24C0.537258 24 0 23.4627 0 22.8V1.2C0 0.537259 0.537258 0 1.2 0H22.8Z" fill="currentColor"/>
      </>
    );
  }
  
  return (
    <Icon variant={variant} {...props}>
      {content}
    </Icon>
  );
};
