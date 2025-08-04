'use client';

import { ReactNode } from 'react';
import { typography, getTypographyClasses } from '../../lib/typography';

interface TypographyProps {
  children: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  variant?: keyof typeof typography.variants;
}

// Componente base para texto
const Text = ({ 
  children, 
  className = '', 
  as: Component = 'span', 
  variant = 'body',
  ...props 
}: TypographyProps) => {
  const typographyClasses = getTypographyClasses(variant);
  
  return (
    <Component className={`${typographyClasses} ${className}`} {...props}>
      {children}
    </Component>
  );
};

// Variantes de texto usando el sistema de tipografía
export const TextXS = ({ children, className = '', ...props }: TypographyProps) => (
  <Text variant="text-xs" className={className} {...props}>
    {children}
  </Text>
);

export const TextSM = ({ children, className = '', ...props }: TypographyProps) => (
  <Text variant="text-sm" className={className} {...props}>
    {children}
  </Text>
);

export const TextBase = ({ children, className = '', ...props }: TypographyProps) => (
  <Text variant="text-base" className={className} {...props}>
    {children}
  </Text>
);

export const TextLG = ({ children, className = '', ...props }: TypographyProps) => (
  <Text variant="text-lg" className={className} {...props}>
    {children}
  </Text>
);

export const TextXL = ({ children, className = '', ...props }: TypographyProps) => (
  <Text variant="text-xl" className={className} {...props}>
    {children}
  </Text>
);

export const Text2XL = ({ children, className = '', ...props }: TypographyProps) => (
  <Text variant="text-2xl" className={className} {...props}>
    {children}
  </Text>
);

export const Text3XL = ({ children, className = '', ...props }: TypographyProps) => (
  <Text variant="text-3xl" className={className} {...props}>
    {children}
  </Text>
);

export const Text4XL = ({ children, className = '', ...props }: TypographyProps) => (
  <Text variant="text-4xl" className={className} {...props}>
    {children}
  </Text>
);

// Componentes específicos
export const Heading = ({ children, className = '', ...props }: TypographyProps) => (
  <Text as="h1" variant="heading" className={className} {...props}>
    {children}
  </Text>
);

export const Subheading = ({ children, className = '', ...props }: TypographyProps) => (
  <Text as="h2" variant="subtitle" className={className} {...props}>
    {children}
  </Text>
);

export const Title = ({ children, className = '', ...props }: TypographyProps) => (
  <Text as="h3" variant="title" className={className} {...props}>
    {children}
  </Text>
);

export const Caption = ({ children, className = '', ...props }: TypographyProps) => (
  <Text variant="caption" className={`text-formalab-grey-2 dark:text-formalab-grey-2-dark ${className}`} {...props}>
    {children}
  </Text>
);

export const Label = ({ children, className = '', ...props }: TypographyProps) => (
  <Text variant="label" className={className} {...props}>
    {children}
  </Text>
);

export const Body = ({ children, className = '', ...props }: TypographyProps) => (
  <Text variant="body" className={className} {...props}>
    {children}
  </Text>
);

export const Mono = ({ children, className = '', ...props }: TypographyProps) => (
  <Text variant="mono" className={className} {...props}>
    {children}
  </Text>
);

// Componente flexible para usar cualquier variante
export const Typography = ({ 
  children, 
  variant = 'body', 
  className = '', 
  as,
  ...props 
}: TypographyProps) => (
  <Text variant={variant} className={className} as={as} {...props}>
    {children}
  </Text>
); 