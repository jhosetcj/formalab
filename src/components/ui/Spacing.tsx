'use client';

import { ReactNode } from 'react';
import { designTokens } from '../../lib/design-tokens';

interface SpacingProps {
  children?: ReactNode;
  className?: string;
  size?: keyof typeof designTokens.spacing;
}

// Componente base para espaciado
export const Spacing = ({ children, className = '', size = 4, ...props }: SpacingProps) => {
  const spacingValue = designTokens.spacing[size];
  return (
    <div className={className} style={{ padding: spacingValue }} {...props}>
      {children}
    </div>
  );
};

// Componentes específicos de espaciado
export const Padding = ({ children, className = '', size = 4, ...props }: SpacingProps) => (
  <div className={`p-${size} ${className}`} {...props}>
    {children}
  </div>
);

export const PaddingX = ({ children, className = '', size = 4, ...props }: SpacingProps) => (
  <div className={`px-${size} ${className}`} {...props}>
    {children}
  </div>
);

export const PaddingY = ({ children, className = '', size = 4, ...props }: SpacingProps) => (
  <div className={`py-${size} ${className}`} {...props}>
    {children}
  </div>
);

export const Margin = ({ children, className = '', size = 4, ...props }: SpacingProps) => (
  <div className={`m-${size} ${className}`} {...props}>
    {children}
  </div>
);

export const MarginX = ({ children, className = '', size = 4, ...props }: SpacingProps) => (
  <div className={`mx-${size} ${className}`} {...props}>
    {children}
  </div>
);

export const MarginY = ({ children, className = '', size = 4, ...props }: SpacingProps) => (
  <div className={`my-${size} ${className}`} {...props}>
    {children}
  </div>
);

// Componentes de gap
export const Gap = ({ children, className = '', size = 4, ...props }: SpacingProps) => (
  <div className={`gap-${size} ${className}`} {...props}>
    {children}
  </div>
);

export const GapX = ({ children, className = '', size = 4, ...props }: SpacingProps) => (
  <div className={`gap-x-${size} ${className}`} {...props}>
    {children}
  </div>
);

export const GapY = ({ children, className = '', size = 4, ...props }: SpacingProps) => (
  <div className={`gap-y-${size} ${className}`} {...props}>
    {children}
  </div>
);

// Componentes de espacio vertical
export const Space = ({ children, className = '', size = 4, ...props }: SpacingProps) => (
  <div className={`space-y-${size} ${className}`} {...props}>
    {children}
  </div>
);

export const SpaceX = ({ children, className = '', size = 4, ...props }: SpacingProps) => (
  <div className={`space-x-${size} ${className}`} {...props}>
    {children}
  </div>
); 