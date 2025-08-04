import React from 'react';
import { cn } from '../../lib/utils';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  variant?: 'black' | 'white' | 'current';
  className?: string;
}

const sizeMap = {
  xs: '12px',
  sm: '16px', 
  md: '20px',
  lg: '24px',
  xl: '32px',
  '2xl': '48px',
};

export const Icon: React.FC<IconProps> = ({
  size = 'md',
  variant = 'current',
  className,
  children,
  ...props
}) => {
  const iconSize = sizeMap[size];
  
  return (
    <svg
      width={iconSize}
      height={iconSize}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        'inline-block',
        variant === 'current' && 'text-current',
        className
      )}
      {...props}
    >
      {children}
    </svg>
  );
}; 