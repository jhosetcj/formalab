import React from 'react';
import { Icon, IconProps } from './Icon';

export const TriangleStar: React.FC<IconProps> = ({ variant = 'current', ...props }) => {
  // Determinar qué variante usar
  let content;
  if (variant === 'black') {
    content = (
      <>
        <path d="M12 0L14.16 14.56L24 24L12 18.88L0 24L9.84 14.56L12 0Z" fill="#595959"/>
      </>
    );
  } else if (variant === 'white') {
    content = (
      <>
        <path d="M12 0L14.16 14.56L24 24L12 18.88L0 24L9.84 14.56L12 0Z" fill="#ACACAC"/>
      </>
    );
  } else {
    // Para current, usar la versión current (con currentColor)
    content = (
      <>
        <path d="M12 0L14.16 14.56L24 24L12 18.88L0 24L9.84 14.56L12 0Z" fill="currentColor"/>
      </>
    );
  }
  
  return (
    <Icon variant={variant} {...props}>
      {content}
    </Icon>
  );
};
