import React, { useState } from 'react';
import { cn } from '../../lib/utils';
import { IconProps } from '../icons';
import { Down, Up } from '../icons';

export interface IconButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onToggle'> {
  icon?: React.ComponentType<IconProps>;
  variant?: 'collapse' | 'delete';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  isCollapsed?: boolean;
  onToggle?: (collapsed: boolean) => void;
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon: Icon,
  variant = 'collapse',
  size = 'md',
  className,
  isCollapsed = false,
  onToggle,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8', 
    lg: 'w-10 h-10'
  };

  const variantClasses = {
    collapse: {
      base: 'border-formalab-grey-1.5 dark:border-formalab-grey-1.5-dark bg-transparent',
      hover: 'hover:bg-formalab-white dark:hover:bg-formalab-white-dark',
      focus: 'focus:ring-formalab-grey-1.5 dark:focus:ring-formalab-grey-1.5-dark'
    },
    delete: {
      base: 'border-formalab-red bg-formalab-red-light',
      hover: 'hover:bg-formalab-red-hover',
      focus: 'focus:ring-formalab-red'
    }
  };

  const iconSizeMap = {
    sm: 'xs',
    md: 'sm',
    lg: 'md'
  };

  const iconColorMap = {
    collapse: 'text-formalab-grey-2 dark:text-formalab-grey-2-dark',
    delete: 'text-formalab-red'
  };

  // Determinar qué icono usar
  let IconComponent: React.ComponentType<IconProps> = Icon || Down;
  if (variant === 'collapse' && !Icon) {
    IconComponent = isCollapsed ? Down : Up;
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (variant === 'collapse' && onToggle) {
      onToggle(!isCollapsed);
    }
    if (props.onClick) {
      props.onClick(e);
    }
  };

  return (
    <button
      className={cn(
        baseClasses,
        sizeClasses[size],
        variantClasses[variant].base,
        variantClasses[variant].hover,
        variantClasses[variant].focus,
        'rounded-[7px]', // Border radius específico
        className
      )}
      style={{
        padding: '5px', // Padding específico
      }}
      onClick={handleClick}
      {...props}
    >
      <IconComponent 
        size={iconSizeMap[size] as any} 
        className={iconColorMap[variant]}
      />
    </button>
  );
}; 