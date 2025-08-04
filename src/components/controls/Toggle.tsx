'use client';

import { useState, useEffect } from 'react';

interface ToggleProps {
  label: string;
  value?: boolean;
  defaultValue?: boolean;
  onChange?: (enabled: boolean) => void;
  className?: string;
}

export default function Toggle({
  label,
  value,
  defaultValue = false,
  onChange,
  className = ''
}: ToggleProps) {
  const [localValue, setLocalValue] = useState(value ?? defaultValue);

  useEffect(() => {
    if (value !== undefined) {
      setLocalValue(value);
    }
  }, [value]);

  const handleToggle = () => {
    const newValue = !localValue;
    setLocalValue(newValue);
    onChange?.(newValue);
  };

  return (
    <div className={`flex items-center justify-between ${className}`}>
      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>
      <button
        type="button"
        onClick={handleToggle}
        className={`
          relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
          ${localValue ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'}
        `}
      >
        <span
          className={`
            inline-block h-4 w-4 transform rounded-full bg-white transition-transform
            ${localValue ? 'translate-x-6' : 'translate-x-1'}
          `}
        />
      </button>
    </div>
  );
} 