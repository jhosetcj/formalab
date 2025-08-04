'use client';

import Button from './Button';
import { Heading, Caption } from './Typography';

interface HeaderProps {
  onExport?: () => void;
  onSave?: () => void;
  onReset?: () => void;
}

export default function Header({ onExport, onSave, onReset }: HeaderProps) {
  return (
    <header className="bg-formalab-white dark:bg-formalab-white-dark border-b border-formalab-grey-1.5 dark:border-formalab-grey-1.5-dark px-6 py-3 h-16 flex items-center justify-between">
      {/* Logo a la izquierda */}
      <div className="flex items-center">
        <Heading className="text-formalab-foreground dark:text-formalab-white">
          Formalab
        </Heading>
      </div>
      
      {/* Regla horizontal en el centro */}
      <div className="flex-1 flex justify-center">
        <div className="bg-formalab-grey-1 dark:bg-formalab-grey-1-dark rounded-lg px-4 py-2 min-w-[400px]">
          <div className="flex items-center justify-between">
            <Caption>0</Caption>
            <Caption>100</Caption>
            <Caption>200</Caption>
            <Caption>300</Caption>
            <Caption>400</Caption>
            <Caption>500</Caption>
            <Caption>600</Caption>
            <Caption>700</Caption>
            <Caption>800</Caption>
            <Caption>900</Caption>
            <Caption>1000</Caption>
          </div>
          <div className="w-full h-1 bg-formalab-grey-1.5 dark:bg-formalab-grey-1.5-dark rounded-full mt-1 relative">
            {/* Marcas de la regla */}
            {Array.from({ length: 11 }, (_, i) => (
              <div
                key={i}
                className="absolute w-px h-2 bg-formalab-grey-2 dark:bg-formalab-grey-2-dark"
                style={{ left: `${(i / 10) * 100}%` }}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Controles a la derecha */}
      <div className="flex items-center space-x-3">
        {/* Undo/Redo */}
        <button className="p-2 text-formalab-grey-2 dark:text-formalab-grey-2-dark hover:text-formalab-foreground dark:hover:text-formalab-white">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
          </svg>
        </button>
        <button className="p-2 text-formalab-grey-2 dark:text-formalab-grey-2-dark hover:text-formalab-foreground dark:hover:text-formalab-white">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 10h-10a8 8 0 00-8 8v2M21 10l-6 6m6-6l-6-6" />
          </svg>
        </button>
        
        {/* Heart */}
        <button className="p-2 text-formalab-grey-2 dark:text-formalab-grey-2-dark hover:text-formalab-foreground dark:hover:text-formalab-white">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
        
        {/* Mail */}
        <button className="p-2 text-formalab-grey-2 dark:text-formalab-grey-2-dark hover:text-formalab-foreground dark:hover:text-formalab-white">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </button>
        
        {/* Theme toggle */}
        <button className="p-2 text-formalab-grey-2 dark:text-formalab-grey-2-dark hover:text-formalab-foreground dark:hover:text-formalab-white">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </button>
        
        {/* Pencil */}
        <button className="p-2 text-formalab-grey-2 dark:text-formalab-grey-2-dark hover:text-formalab-foreground dark:hover:text-formalab-white">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
        </button>
        
        {/* Export button */}
        <Button
          variant="outline"
          size="sm"
          onClick={onExport}
        >
          Export
        </Button>
        
        {/* PRO plan button */}
        <Button
          variant="primary"
          size="sm"
          className="bg-formalab-blue hover:bg-formalab-blue-hover"
        >
          PRO plan
        </Button>
        
        {/* User profile */}
        <button className="p-2 text-formalab-grey-2 dark:text-formalab-grey-2-dark hover:text-formalab-foreground dark:hover:text-formalab-white">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </button>
        
        {/* Settings */}
        <button className="p-2 text-formalab-grey-2 dark:text-formalab-grey-2-dark hover:text-formalab-foreground dark:hover:text-formalab-white">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>
      </div>
    </header>
  );
} 