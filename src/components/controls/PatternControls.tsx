'use client';

import ColorPicker from './ColorPicker';
import { Label, Caption } from '../ui/Typography';

interface PatternControlsProps {
  parameters: any;
  onParametersChange: (params: any) => void;
}

export default function PatternControls({ parameters, onParametersChange }: PatternControlsProps) {
  const handleChange = (key: string, value: any) => {
    onParametersChange({ ...parameters, [key]: value });
  };

  return (
    <div className="space-y-4">
      {/* Form */}
      <div className="space-y-2">
        <Label className="text-formalab-foreground dark:text-formalab-white">
          Form
        </Label>
        <select
          value={parameters.patternForm}
          onChange={(e) => handleChange('patternForm', e.target.value)}
          className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="rectangle">Rectangle</option>
          <option value="circle">Circle</option>
          <option value="triangle">Triangle</option>
        </select>
      </div>

      {/* Type */}
      <div className="space-y-2">
        <Label className="text-formalab-foreground dark:text-formalab-white">
          Type
        </Label>
        <select
          value={parameters.patternType}
          onChange={(e) => handleChange('patternType', e.target.value)}
          className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="fill">Fill</option>
          <option value="outline">Outline</option>
          <option value="fill-outline">Fill + Outline</option>
        </select>
      </div>

      {/* Weight */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <Label className="text-formalab-foreground dark:text-formalab-white">
            Weight
          </Label>
          <Caption>
            {parameters.patternWeight}px
          </Caption>
        </div>
        <input
          type="range"
          min="1"
          max="20"
          value={parameters.patternWeight}
          onChange={(e) => handleChange('patternWeight', parseInt(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
      </div>

      {/* Color */}
      <ColorPicker
        label="Color"
        value={parameters.patternColor}
        onChange={(value) => handleChange('patternColor', value)}
      />

      {/* Color Opacity */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <Label className="text-formalab-foreground dark:text-formalab-white">
            Opacity
          </Label>
          <Caption>
            {parameters.patternColorOpacity}%
          </Caption>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={parameters.patternColorOpacity}
          onChange={(e) => handleChange('patternColorOpacity', parseInt(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
      </div>

      {/* Corner Type */}
      <div className="space-y-2">
        <Label className="text-formalab-foreground dark:text-formalab-white">
          Corner Type
        </Label>
        <select
          value={parameters.cornerType}
          onChange={(e) => handleChange('cornerType', e.target.value)}
          className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="sharp">Sharp</option>
          <option value="round">Round</option>
          <option value="slice">Slice</option>
        </select>
      </div>

      {/* Corner Values */}
      <div className="space-y-2">
        <Label className="text-formalab-foreground dark:text-formalab-white">
          Corner Values
        </Label>
        <div className="flex space-x-2">
          <div className="flex-1">
            <input
              type="text"
              value={parameters.cornerValue1}
              onChange={(e) => {
                const value = parseInt(e.target.value);
                if (!isNaN(value)) handleChange('cornerValue1', value);
              }}
              className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Value 1"
            />
          </div>
          <div className="flex-1">
            <input
              type="text"
              value={parameters.cornerValue2}
              onChange={(e) => {
                const value = parseInt(e.target.value);
                if (!isNaN(value)) handleChange('cornerValue2', value);
              }}
              className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Value 2"
            />
          </div>
        </div>
      </div>
    </div>
  );
} 