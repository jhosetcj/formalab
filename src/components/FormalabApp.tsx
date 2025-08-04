'use client';

import { useState } from 'react';
import Header from './ui/Header';
import ControlPanel from './controls/ControlPanel';
import GenerativeCanvas from './canvas/GenerativeCanvas';

export default function FormalabApp() {
  const [parameters, setParameters] = useState({
    // Canvas parameters
    canvasWidth: 1000,
    canvasHeight: 600,
    backgroundColor: '#581DFF',
    backgroundColorOpacity: 100,
    gridX: 10,
    gridY: 6,
    rotation: 0,
    
    // Pattern parameters
    patternForm: 'rectangle', // rectangle, circle, triangle
    patternType: 'fill', // fill, outline
    patternWeight: 2,
    patternColor: '#003ADA',
    patternColorOpacity: 100,
    cornerType: 'slice', // round, slice
    cornerValue1: 20,
    cornerValue2: 70,
    
    // Control groups
    controlGroups: [
      {
        id: 1,
        type: 'stroke',
        strokeType: 'angular', // angular, curve
        points: [
          { x: 100, y: 100 },
          { x: 100, y: 100 }
        ],
        shapes: ['strain']
      },
      {
        id: 2,
        type: 'stroke',
        strokeType: 'angular', // angular, smooth
        ratio: 2,
        points: [
          { x: 100, y: 100 },
          { x: 100, y: 100 }
        ],
        shapes: ['transform']
      }
    ]
  });

  const handleParametersChange = (newParameters: any) => {
    setParameters(newParameters);
  };

  const handleExport = () => {
    console.log('Exportando diseño...', parameters);
  };

  const handleSave = () => {
    console.log('Guardando diseño...', parameters);
  };

  const handleReset = () => {
    setParameters({
      canvasWidth: 1000,
      canvasHeight: 600,
      backgroundColor: '#581DFF',
      backgroundColorOpacity: 100,
      gridX: 10,
      gridY: 6,
      rotation: 0,
      patternForm: 'rectangle',
      patternType: 'fill',
      patternWeight: 2,
      patternColor: '#003ADA',
      patternColorOpacity: 100,
      cornerType: 'slice',
      cornerValue1: 20,
      cornerValue2: 70,
      controlGroups: [
        {
          id: 1,
          type: 'stroke',
          strokeType: 'angular',
          points: [
            { x: 100, y: 100 },
            { x: 100, y: 100 }
          ],
          shapes: ['strain']
        },
        {
          id: 2,
          type: 'stroke',
          strokeType: 'angular',
          ratio: 2,
          points: [
            { x: 100, y: 100 },
            { x: 100, y: 100 }
          ],
          shapes: ['transform']
        }
      ]
    });
  };

  return (
    <div className="h-screen flex flex-col bg-formalab-background dark:bg-formalab-background-dark">
      <Header
        onExport={handleExport}
        onSave={handleSave}
        onReset={handleReset}
      />
      
      <div className="flex-1 flex overflow-hidden">
        {/* Panel de controles izquierdo */}
        <div className="w-80 flex-shrink-0 border-r border-formalab-grey-1.5 dark:border-formalab-grey-1.5-dark">
          <ControlPanel
            parameters={parameters}
            onParametersChange={handleParametersChange}
            className="h-full"
          />
        </div>
        
        {/* Área de canvas principal */}
        <div className="flex-1">
          <GenerativeCanvas
            parameters={parameters}
            className="h-full"
          />
        </div>
      </div>
    </div>
  );
} 