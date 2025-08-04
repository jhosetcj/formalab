'use client';

import { useState, useEffect } from 'react';

interface ColorPickerProps {
  label: string;
  value?: string;
  defaultValue?: string;
  onChange?: (color: string) => void;
  className?: string;
}

export default function ColorPicker({
  label,
  value,
  defaultValue = '#3b82f6',
  onChange,
  className = ''
}: ColorPickerProps) {
  const [localValue, setLocalValue] = useState(value ?? defaultValue);

  useEffect(() => {
    if (value !== undefined) {
      setLocalValue(value);
    }
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value;
    setLocalValue(newColor);
    onChange?.(newColor);
  };

  return (
    <div className={`space-y-2 ${className}`}>
      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>
      <div className="flex items-center space-x-3">
        <input
          type="color"
          value={localValue}
          onChange={handleChange}
          className="w-12 h-10 rounded-lg border-2 border-gray-200 dark:border-gray-600 cursor-pointer bg-transparent"
        />
        <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">
          {localValue}
        </span>
      </div>
    </div>
  );
} 