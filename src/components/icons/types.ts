export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type IconColor = 'current' | 'inherit' | string;

export interface BaseIconProps {
  size?: IconSize;
  color?: IconColor;
  className?: string;
} 