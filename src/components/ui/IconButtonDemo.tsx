'use client';

import React, { useState } from 'react';
import { IconButton } from './IconButton';
import { Delete } from '../icons';
import { Title, Body, Caption } from './Typography';

export default function IconButtonDemo() {
  const [collapsedStates, setCollapsedStates] = useState<Record<string, boolean>>({});

  const handleToggle = (id: string, collapsed: boolean) => {
    setCollapsedStates(prev => ({
      ...prev,
      [id]: collapsed
    }));
  };

  return (
    <div className="p-8 space-y-8 bg-formalab-white dark:bg-formalab-white-dark">
      <div>
        <Title>IconButton Component</Title>
        <Body className="text-formalab-grey-2 dark:text-formalab-grey-2-dark">
          Botón con icono para contraer secciones y eliminar elementos.
        </Body>
      </div>

      {/* Variantes */}
      <div className="space-y-6">
        <div>
          <Caption className="mb-4">Variante Collapse (contraer secciones) - Icono dinámico</Caption>
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center gap-2">
              <IconButton 
                variant="collapse" 
                size="sm" 
                isCollapsed={collapsedStates.small}
                onToggle={(collapsed) => handleToggle('small', collapsed)}
              />
              <span className="text-xs">Small</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <IconButton 
                variant="collapse" 
                size="md" 
                isCollapsed={collapsedStates.medium}
                onToggle={(collapsed) => handleToggle('medium', collapsed)}
              />
              <span className="text-xs">Medium</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <IconButton 
                variant="collapse" 
                size="lg" 
                isCollapsed={collapsedStates.large}
                onToggle={(collapsed) => handleToggle('large', collapsed)}
              />
              <span className="text-xs">Large</span>
            </div>
          </div>
        </div>

        <div>
          <Caption className="mb-4">Variante Delete (eliminar secciones)</Caption>
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center gap-2">
              <IconButton icon={Delete} variant="delete" size="sm" />
              <span className="text-xs">Small</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <IconButton icon={Delete} variant="delete" size="md" />
              <span className="text-xs">Medium</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <IconButton icon={Delete} variant="delete" size="lg" />
              <span className="text-xs">Large</span>
            </div>
          </div>
        </div>
      </div>

      {/* Especificaciones */}
      <div className="space-y-4">
        <Title>Especificaciones</Title>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 border border-formalab-grey-1.5 dark:border-formalab-grey-1.5-dark rounded-lg">
            <Caption className="mb-2">Dimensiones</Caption>
            <ul className="text-sm space-y-1">
              <li>• Icono: 10x10 unidades</li>
              <li>• Padding: 5px en todos los lados</li>
              <li>• Border radius: 7px</li>
              <li>• Stroke: 1px</li>
            </ul>
          </div>

          <div className="p-4 border border-formalab-grey-1.5 dark:border-formalab-grey-1.5-dark rounded-lg">
            <Caption className="mb-2">Variantes</Caption>
            <ul className="text-sm space-y-1">
              <li>• <strong>Collapse:</strong> Sin fondo, stroke grey-1, hover white</li>
              <li>• <strong>Delete:</strong> Fondo light-red, stroke red, hover red-hover</li>
              <li>• <strong>Dark Mode:</strong> Se aplica automáticamente con clases CSS</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Ejemplos de uso */}
      <div className="space-y-4">
        <Title>Ejemplos de Uso</Title>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Ejemplo 1: Sección colapsable */}
          <div className="p-4 border border-formalab-grey-1.5 dark:border-formalab-grey-1.5-dark rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <Caption>Sección de Patrones</Caption>
              <IconButton 
                variant="collapse" 
                size="sm" 
                isCollapsed={collapsedStates.patterns}
                onToggle={(collapsed) => handleToggle('patterns', collapsed)}
              />
            </div>
            {!collapsedStates.patterns && (
              <div className="p-3 bg-formalab-grey-1 dark:bg-formalab-grey-1-dark rounded">
                <Body className="text-sm">Contenido de la sección...</Body>
              </div>
            )}
          </div>

          {/* Ejemplo 2: Elemento eliminable */}
          <div className="p-4 border border-formalab-grey-1.5 dark:border-formalab-grey-1.5-dark rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <Caption>Control de Grupo</Caption>
              <IconButton icon={Delete} variant="delete" size="sm" />
            </div>
            <div className="p-3 bg-formalab-grey-1 dark:bg-formalab-grey-1-dark rounded">
              <Body className="text-sm">Configuración del control...</Body>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 