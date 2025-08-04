'use client';

import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  disabled = false,
  className = ''
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-formalab-active focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-formalab-blue text-formalab-white hover:bg-formalab-blue-hover dark:bg-formalab-blue dark:hover:bg-formalab-blue-hover',
    secondary: 'bg-formalab-grey-1 text-formalab-foreground hover:bg-formalab-grey-1.5 dark:bg-formalab-grey-1-dark dark:text-formalab-white dark:hover:bg-formalab-grey-1.5-dark',
    outline: 'border border-formalab-grey-1.5 text-formalab-foreground hover:bg-formalab-grey-1 dark:border-formalab-grey-1.5-dark dark:text-formalab-white dark:hover:bg-formalab-grey-1-dark',
    ghost: 'text-formalab-foreground hover:bg-formalab-grey-1 dark:text-formalab-white dark:hover:bg-formalab-grey-1-dark'
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base'
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </button>
  );
} 