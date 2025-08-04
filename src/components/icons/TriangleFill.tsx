import React from 'react';
import { Icon, IconProps } from './Icon';

export const TriangleFill: React.FC<IconProps> = ({ variant = 'current', ...props }) => {
  // Determinar qué variante usar
  let content;
  if (variant === 'black') {
    content = (
      <>
        <path d="M10.9512 2.09743C11.4084 1.18302 12.592 1.18302 13.0492 2.09743L23.0098 22.0186C23.4541 22.9073 22.8758 23.9995 21.9608 23.9995H2.03962C1.12464 23.9995 0.546274 22.9073 0.990628 22.0186L10.9512 2.09743Z" fill="#595959"/>
      </>
    );
  } else if (variant === 'white') {
    content = (
      <>
        <path d="M10.9512 2.09743C11.4084 1.18302 12.592 1.18302 13.0492 2.09743L23.0098 22.0186C23.4541 22.9073 22.8758 23.9995 21.9608 23.9995H2.03962C1.12464 23.9995 0.546274 22.9073 0.990628 22.0186L10.9512 2.09743Z" fill="#ACACAC"/>
      </>
    );
  } else {
    // Para current, usar la versión current (con currentColor)
    content = (
      <>
        <path d="M10.9512 2.09743C11.4084 1.18302 12.592 1.18302 13.0492 2.09743L23.0098 22.0186C23.4541 22.9073 22.8758 23.9995 21.9608 23.9995H2.03962C1.12464 23.9995 0.546274 22.9073 0.990628 22.0186L10.9512 2.09743Z" fill="currentColor"/>
      </>
    );
  }
  
  return (
    <Icon variant={variant} {...props}>
      {content}
    </Icon>
  );
};
