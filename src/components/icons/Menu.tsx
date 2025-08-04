import React from 'react';
import { Icon, IconProps } from './Icon';

export const Menu: React.FC<IconProps> = ({ variant = 'current', ...props }) => {
  // Determinar qué variante usar
  let content;
  if (variant === 'black') {
    content = (
      <>
        <circle cx="2.4" cy="2.4" fill="#595959" r="2.4"/>
        <circle cx="2.4" cy="21.6002" fill="#595959" r="2.4"/>
        <circle cx="2.4" cy="12.0001" fill="#595959" r="2.4"/>
        <circle cx="12.0001" cy="2.4" fill="#595959" r="2.4"/>
        <circle cx="12.0001" cy="21.6002" fill="#595959" r="2.4"/>
        <circle cx="12.0001" cy="12.0001" fill="#595959" r="2.4"/>
        <circle cx="21.6002" cy="2.4" fill="#595959" r="2.4"/>
        <circle cx="21.6002" cy="21.6002" fill="#595959" r="2.4"/>
        <circle cx="21.6002" cy="12.0001" fill="#595959" r="2.4"/>
      </>
    );
  } else if (variant === 'white') {
    content = (
      <>
        <circle cx="2.4" cy="2.4" fill="#ACACAC" r="2.4"/>
        <circle cx="2.4" cy="21.6002" fill="#ACACAC" r="2.4"/>
        <circle cx="2.4" cy="12.0001" fill="#ACACAC" r="2.4"/>
        <circle cx="12.0001" cy="2.4" fill="#ACACAC" r="2.4"/>
        <circle cx="12.0001" cy="21.6002" fill="#ACACAC" r="2.4"/>
        <circle cx="12.0001" cy="12.0001" fill="#ACACAC" r="2.4"/>
        <circle cx="21.6002" cy="2.4" fill="#ACACAC" r="2.4"/>
        <circle cx="21.6002" cy="21.6002" fill="#ACACAC" r="2.4"/>
        <circle cx="21.6002" cy="12.0001" fill="#ACACAC" r="2.4"/>
      </>
    );
  } else {
    // Para current, usar la versión current (con currentColor)
    content = (
      <>
        <circle cx="2.4" cy="2.4" fill="currentColor" r="2.4"/>
        <circle cx="2.4" cy="21.6002" fill="currentColor" r="2.4"/>
        <circle cx="2.4" cy="12.0001" fill="currentColor" r="2.4"/>
        <circle cx="12.0001" cy="2.4" fill="currentColor" r="2.4"/>
        <circle cx="12.0001" cy="21.6002" fill="currentColor" r="2.4"/>
        <circle cx="12.0001" cy="12.0001" fill="currentColor" r="2.4"/>
        <circle cx="21.6002" cy="2.4" fill="currentColor" r="2.4"/>
        <circle cx="21.6002" cy="21.6002" fill="currentColor" r="2.4"/>
        <circle cx="21.6002" cy="12.0001" fill="currentColor" r="2.4"/>
      </>
    );
  }
  
  return (
    <Icon variant={variant} {...props}>
      {content}
    </Icon>
  );
};
