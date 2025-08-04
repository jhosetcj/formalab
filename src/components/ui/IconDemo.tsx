'use client';

import React, { useState } from 'react';
import * as Icons from '../icons';
import { Title, Body, Caption } from './Typography';

export default function IconDemo() {
  const [selectedSize, setSelectedSize] = useState<'sm' | 'md' | 'lg'>('md');
  const [selectedVariant, setSelectedVariant] = useState<'black' | 'white' | 'current'>('current');

  const iconNames = Object.keys(Icons).filter(name => name !== 'Icon' && name !== 'IconProps');

  return (
    <div className="p-8 space-y-8 bg-formalab-white dark:bg-formalab-white-dark">
      <div>
        <Title>Iconos del Sistema de Diseño</Title>
        <Body className="text-formalab-grey-2 dark:text-formalab-grey-2-dark">
          Sistema de iconos personalizado con {iconNames.length} iconos disponibles.
        </Body>
      </div>

      {/* Controles */}
      <div className="flex gap-6 p-4 border border-formalab-grey-1.5 dark:border-formalab-grey-1.5-dark rounded-lg">
        <div>
          <Caption>Tamaño:</Caption>
          <select 
            value={selectedSize} 
            onChange={(e) => setSelectedSize(e.target.value as any)}
            className="mt-1 px-3 py-1 border border-formalab-grey-1.5 dark:border-formalab-grey-1.5-dark rounded bg-formalab-white dark:bg-formalab-white-dark"
          >
            <option value="sm">Pequeño (16px)</option>
            <option value="md">Mediano (20px)</option>
            <option value="lg">Grande (24px)</option>
          </select>
        </div>
        
        <div>
          <Caption>Variante:</Caption>
          <select 
            value={selectedVariant} 
            onChange={(e) => setSelectedVariant(e.target.value as any)}
            className="mt-1 px-3 py-1 border border-formalab-grey-1.5 dark:border-formalab-grey-1.5-dark rounded bg-formalab-white dark:bg-formalab-white-dark"
          >
            <option value="current">Current (flexible)</option>
            <option value="black">Black (light mode)</option>
            <option value="white">White (dark mode)</option>
          </select>
        </div>
      </div>

      {/* Grid de iconos */}
      <div className="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-4">
        {iconNames.map((iconName) => {
          const IconComponent = (Icons as any)[iconName];
          
          return (
            <div 
              key={iconName}
              className="flex flex-col items-center p-4 border border-formalab-grey-1.5 dark:border-formalab-grey-1.5-dark rounded-lg hover:bg-formalab-grey-1 dark:hover:bg-formalab-grey-1-dark transition-colors"
            >
              <IconComponent 
                size={selectedSize}
                variant={selectedVariant}
              />
              <Caption className="mt-2 text-center text-xs">
                {iconName}
              </Caption>
            </div>
          );
        })}
      </div>

      {/* Ejemplos de uso */}
      <div className="space-y-4">
        <Title>Ejemplos de Uso</Title>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Ejemplo 1: Botón con icono */}
          <div className="p-4 border border-formalab-grey-1.5 dark:border-formalab-grey-1.5-dark rounded-lg">
            <Caption className="mb-2">Botón con icono:</Caption>
            <button className="flex items-center gap-2 px-4 py-2 bg-formalab-blue text-white rounded-lg hover:bg-formalab-blue-hover transition-colors">
              <Icons.Save size="sm" />
              Guardar
            </button>
          </div>

          {/* Ejemplo 2: Iconos en diferentes tamaños */}
          <div className="p-4 border border-formalab-grey-1.5 dark:border-formalab-grey-1.5-dark rounded-lg">
            <Caption className="mb-2">Diferentes tamaños:</Caption>
            <div className="flex items-center gap-4">
              <Icons.Close size="sm" />
              <Icons.Close size="md" />
              <Icons.Close size="lg" />
            </div>
          </div>

          {/* Ejemplo 3: Iconos con diferentes variantes */}
          <div className="p-4 border border-formalab-grey-1.5 dark:border-formalab-grey-1.5-dark rounded-lg">
            <Caption className="mb-2">Diferentes variantes:</Caption>
            <div className="flex items-center gap-4">
              <Icons.Check variant="black" />
              <Icons.Close variant="white" />
              <Icons.Menu variant="current" className="text-formalab-blue" />
            </div>
          </div>

          {/* Ejemplo 4: Iconos en contexto */}
          <div className="p-4 border border-formalab-grey-1.5 dark:border-formalab-grey-1.5-dark rounded-lg">
            <Caption className="mb-2">En contexto:</Caption>
            <div className="flex items-center gap-2 text-formalab-grey-2 dark:text-formalab-grey-2-dark">
              <Icons.Ai size="sm" />
              <span className="text-sm">Generado con IA</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 