export interface PatternParameters {
  // Parámetros de forma
  size: number;
  rotation: number;
  scale: number;
  
  // Parámetros de color
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  
  // Parámetros de patrón
  density: number;
  complexity: number;
  symmetry: boolean;
  patternType: 'geometric' | 'organic' | 'fractal' | 'wave' | 'grid';
  
  // Parámetros de animación
  animation: boolean;
  speed: number;
}

export interface SelectOption {
  value: string;
  label: string;
}

export interface ControlPanelProps {
  onParametersChange?: (params: PatternParameters) => void;
  className?: string;
}

export interface GenerativeCanvasProps {
  parameters: PatternParameters;
  className?: string;
} 