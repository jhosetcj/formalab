import React from 'react';
import { Icon, IconProps } from './Icon';

export const RectangleFill: React.FC<IconProps> = ({ variant = 'current', ...props }) => {
  // Determinar qué variante usar
  let content;
  if (variant === 'black') {
    content = (
      <>
        <path d="M0 1.2C0 0.537259 0.537258 0 1.2 0H22.8C23.4627 0 24 0.537258 24 1.2V22.8C24 23.4627 23.4627 24 22.8 24H1.2C0.537259 24 0 23.4627 0 22.8V1.2Z" fill="#595959"/>
      </>
    );
  } else if (variant === 'white') {
    content = (
      <>
        <path d="M0 1.2C0 0.537259 0.537258 0 1.2 0H22.8C23.4627 0 24 0.537258 24 1.2V22.8C24 23.4627 23.4627 24 22.8 24H1.2C0.537259 24 0 23.4627 0 22.8V1.2Z" fill="#ACACAC"/>
      </>
    );
  } else {
    // Para current, usar la versión current (con currentColor)
    content = (
      <>
        <path d="M0 1.2C0 0.537259 0.537258 0 1.2 0H22.8C23.4627 0 24 0.537258 24 1.2V22.8C24 23.4627 23.4627 24 22.8 24H1.2C0.537259 24 0 23.4627 0 22.8V1.2Z" fill="currentColor"/>
      </>
    );
  }
  
  return (
    <Icon variant={variant} {...props}>
      {content}
    </Icon>
  );
};
