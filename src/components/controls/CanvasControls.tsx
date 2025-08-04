'use client';

import ColorPicker from './ColorPicker';
import { Label, Caption } from '../ui/Typography';

interface CanvasControlsProps {
  parameters: any;
  onParametersChange: (params: any) => void;
}

export default function CanvasControls({ parameters, onParametersChange }: CanvasControlsProps) {
  const handleChange = (key: string, value: any) => {
    onParametersChange({ ...parameters, [key]: value });
  };

  return (
    <div className="space-y-4">
      {/* Size */}
      <div className="space-y-2">
        <Label className="text-formalab-foreground dark:text-formalab-white">
          Size
        </Label>
        <div className="flex space-x-2">
          <div className="flex-1">
            <input
              type="text"
              value={`X ${parameters.canvasWidth} px`}
              onChange={(e) => {
                const value = parseInt(e.target.value.replace(/\D/g, ''));
                if (!isNaN(value)) handleChange('canvasWidth', value);
              }}
              className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex-1">
            <input
              type="text"
              value={`Y ${parameters.canvasHeight} px`}
              onChange={(e) => {
                const value = parseInt(e.target.value.replace(/\D/g, ''));
                if (!isNaN(value)) handleChange('canvasHeight', value);
              }}
              className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Background Color */}
      <ColorPicker
        label="Background Color"
        value={parameters.backgroundColor}
        onChange={(value) => handleChange('backgroundColor', value)}
      />

      {/* Background Opacity */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <Label className="text-formalab-foreground dark:text-formalab-white">
            Opacity
          </Label>
          <Caption>
            {parameters.backgroundColorOpacity}%
          </Caption>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={parameters.backgroundColorOpacity}
          onChange={(e) => handleChange('backgroundColorOpacity', parseInt(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
      </div>

      {/* Grid */}
      <div className="space-y-2">
        <Label className="text-formalab-foreground dark:text-formalab-white">
          Grid
        </Label>
        <div className="flex space-x-2">
          <div className="flex-1">
            <input
              type="text"
              value={`X ${parameters.gridX}`}
              onChange={(e) => {
                const value = parseInt(e.target.value.replace(/\D/g, ''));
                if (!isNaN(value)) handleChange('gridX', value);
              }}
              className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex-1">
            <input
              type="text"
              value={`Y ${parameters.gridY}`}
              onChange={(e) => {
                const value = parseInt(e.target.value.replace(/\D/g, ''));
                if (!isNaN(value)) handleChange('gridY', value);
              }}
              className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Rotation */}
      <div className="space-y-2">
        <Label className="text-formalab-foreground dark:text-formalab-white">
          Rotation
        </Label>
        <input
          type="text"
          value={`${parameters.rotation}°`}
          onChange={(e) => {
            const value = parseInt(e.target.value.replace(/\D/g, ''));
            if (!isNaN(value)) handleChange('rotation', value);
          }}
          className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
} 