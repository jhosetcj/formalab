'use client';

import { useState, ReactNode } from 'react';
import { Title } from './Typography';

interface CollapsibleSectionProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

export default function CollapsibleSection({
  title,
  children,
  defaultOpen = true,
  className = ''
}: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`border-b border-formalab-grey-1.5 dark:border-formalab-grey-1.5-dark ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 px-6 text-left hover:bg-formalab-grey-1 dark:hover:bg-formalab-grey-1-dark transition-colors"
      >
                            <Title className="text-formalab-foreground dark:text-formalab-white">
            {title}
          </Title>
        <svg
          className={`w-4 h-4 text-formalab-grey-2 dark:text-formalab-grey-2-dark transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="px-6 pb-4 space-y-4">
          {children}
        </div>
      )}
    </div>
  );
} 