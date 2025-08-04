import React from 'react';
import { Icon, IconProps } from './Icon';

export const Minus: React.FC<IconProps> = ({ variant = 'current', ...props }) => {
  // Determinar qué variante usar
  let content;
  if (variant === 'black') {
    content = (
      <>
        <path d="M20.3999 10.7998C21.0626 10.7998 21.5999 11.3371 21.5999 11.9998V11.9998C21.5999 12.6625 21.0626 13.1998 20.3999 13.1998H3.5999C2.93716 13.1998 2.3999 12.6625 2.3999 11.9998V11.9998C2.3999 11.3371 2.93716 10.7998 3.5999 10.7998H20.3999Z" fill="#595959"/>
      </>
    );
  } else if (variant === 'white') {
    content = (
      <>
        <path d="M20.3999 10.7998C21.0626 10.7998 21.5999 11.3371 21.5999 11.9998V11.9998C21.5999 12.6625 21.0626 13.1998 20.3999 13.1998H3.5999C2.93716 13.1998 2.3999 12.6625 2.3999 11.9998V11.9998C2.3999 11.3371 2.93716 10.7998 3.5999 10.7998H20.3999Z" fill="#ACACAC"/>
      </>
    );
  } else {
    // Para current, usar la versión current (con currentColor)
    content = (
      <>
        <path d="M20.3999 10.7998C21.0626 10.7998 21.5999 11.3371 21.5999 11.9998V11.9998C21.5999 12.6625 21.0626 13.1998 20.3999 13.1998H3.5999C2.93716 13.1998 2.3999 12.6625 2.3999 11.9998V11.9998C2.3999 11.3371 2.93716 10.7998 3.5999 10.7998H20.3999Z" fill="currentColor"/>
      </>
    );
  }
  
  return (
    <Icon variant={variant} {...props}>
      {content}
    </Icon>
  );
};
