'use client';

import { useRef, useEffect, useState } from 'react';

interface GenerativeCanvasProps {
  parameters: any;
  className?: string;
}

export default function GenerativeCanvas({ parameters, className = '' }: GenerativeCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Configurar canvas
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const drawPattern = () => {
      const { width, height } = canvas.getBoundingClientRect();
      
      // Limpiar canvas
      ctx.clearRect(0, 0, width, height);
      
      // Establecer color de fondo
      const bgColor = parameters.backgroundColor || '#ffffff';
      const bgOpacity = (parameters.backgroundColorOpacity || 100) / 100;
      ctx.fillStyle = bgColor;
      ctx.globalAlpha = bgOpacity;
      ctx.fillRect(0, 0, width, height);
      ctx.globalAlpha = 1;

      // Dibujar grid
      drawGrid(ctx, width, height, parameters);

      // Dibujar patrón base
      drawBasePattern(ctx, width, height, parameters);

      // Dibujar puntos de control
      drawControlPoints(ctx, width, height, parameters);
    };

    drawPattern();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [parameters]);

  const drawGrid = (ctx: CanvasRenderingContext2D, width: number, height: number, params: any) => {
    const gridX = params.gridX || 10;
    const gridY = params.gridY || 6;
    
    ctx.strokeStyle = '#e0e7ff'; // Light blue grid
    ctx.lineWidth = 1;
    ctx.setLineDash([2, 2]);

    // Líneas verticales
    for (let i = 0; i <= gridX; i++) {
      const x = (width / gridX) * i;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }

    // Líneas horizontales
    for (let i = 0; i <= gridY; i++) {
      const y = (height / gridY) * i;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    ctx.setLineDash([]);
  };

  const drawBasePattern = (ctx: CanvasRenderingContext2D, width: number, height: number, params: any) => {
    const gridX = params.gridX || 10;
    const gridY = params.gridY || 6;
    const cellWidth = width / gridX;
    const cellHeight = height / gridY;
    
    const patternColor = params.patternColor || '#003ADA';
    const patternOpacity = (params.patternColorOpacity || 100) / 100;
    const patternWeight = params.patternWeight || 2;
    
    ctx.fillStyle = patternColor;
    ctx.strokeStyle = patternColor;
    ctx.lineWidth = patternWeight;
    ctx.globalAlpha = patternOpacity;

    for (let i = 0; i < gridX; i++) {
      for (let j = 0; j < gridY; j++) {
        const x = i * cellWidth;
        const y = j * cellHeight;
        
        // Aplicar rotación si está configurada
        if (params.rotation && params.rotation !== 0) {
          ctx.save();
          ctx.translate(x + cellWidth / 2, y + cellHeight / 2);
          ctx.rotate((params.rotation * Math.PI) / 180);
          ctx.translate(-(x + cellWidth / 2), -(y + cellHeight / 2));
        }

        // Dibujar forma según el tipo
        switch (params.patternForm) {
          case 'rectangle':
            if (params.patternType === 'fill') {
              ctx.fillRect(x + 2, y + 2, cellWidth - 4, cellHeight - 4);
            } else {
              ctx.strokeRect(x + 2, y + 2, cellWidth - 4, cellHeight - 4);
            }
            break;
          case 'circle':
            const radius = Math.min(cellWidth, cellHeight) / 2 - 4;
            const centerX = x + cellWidth / 2;
            const centerY = y + cellHeight / 2;
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
            if (params.patternType === 'fill') {
              ctx.fill();
            } else {
              ctx.stroke();
            }
            break;
          case 'triangle':
            const triX = x + cellWidth / 2;
            const triY = y + cellHeight / 2;
            const triSize = Math.min(cellWidth, cellHeight) / 2 - 4;
            ctx.beginPath();
            ctx.moveTo(triX, triY - triSize);
            ctx.lineTo(triX - triSize, triY + triSize);
            ctx.lineTo(triX + triSize, triY + triSize);
            ctx.closePath();
            if (params.patternType === 'fill') {
              ctx.fill();
            } else {
              ctx.stroke();
            }
            break;
        }

        if (params.rotation && params.rotation !== 0) {
          ctx.restore();
        }
      }
    }

    ctx.globalAlpha = 1;
  };

  const drawControlPoints = (ctx: CanvasRenderingContext2D, width: number, height: number, params: any) => {
    if (!params.controlGroups) return;

    params.controlGroups.forEach((group: any) => {
      if (group.points && group.points.length > 0) {
        // Dibujar puntos de control
        group.points.forEach((point: any, index: number) => {
          const x = (point.x / 1000) * width; // Normalizar a las dimensiones del canvas
          const y = (point.y / 600) * height;

          // Punto de control
          ctx.fillStyle = '#ef4444'; // Red
          ctx.beginPath();
          ctx.arc(x, y, 6, 0, 2 * Math.PI);
          ctx.fill();

          // Borde del punto
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 2;
          ctx.stroke();

          // Conectar puntos con líneas punteadas
          if (index > 0) {
            const prevPoint = group.points[index - 1];
            const prevX = (prevPoint.x / 1000) * width;
            const prevY = (prevPoint.y / 600) * height;

            ctx.strokeStyle = '#ef4444';
            ctx.lineWidth = 2;
            ctx.setLineDash([5, 5]);
            ctx.beginPath();
            ctx.moveTo(prevX, prevY);
            ctx.lineTo(x, y);
            ctx.stroke();
            ctx.setLineDash([]);
          }
        });
      }
    });
  };

  return (
    <div className={`relative bg-white dark:bg-gray-900 overflow-hidden ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{ cursor: 'crosshair' }}
      />
    </div>
  );
} 