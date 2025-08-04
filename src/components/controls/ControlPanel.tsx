'use client';

import CollapsibleSection from '../ui/CollapsibleSection';
import CanvasControls from './CanvasControls';
import PatternControls from './PatternControls';
import ControlGroupSection from './ControlGroupSection';

interface ControlPanelProps {
  parameters: any;
  onParametersChange: (params: any) => void;
  className?: string;
}

export default function ControlPanel({ parameters, onParametersChange, className = '' }: ControlPanelProps) {
  return (
    <div className={`bg-formalab-white dark:bg-formalab-white-dark overflow-y-auto ${className}`}>
      {/* Canvas Section */}
      <CollapsibleSection title="Canvas" defaultOpen={true}>
        <CanvasControls
          parameters={parameters}
          onParametersChange={onParametersChange}
        />
      </CollapsibleSection>

      {/* Pattern Section */}
      <CollapsibleSection title="Pattern" defaultOpen={true}>
        <PatternControls
          parameters={parameters}
          onParametersChange={onParametersChange}
        />
      </CollapsibleSection>

      {/* Control Groups Section */}
      <CollapsibleSection title="Control Group" defaultOpen={true}>
        <ControlGroupSection
          parameters={parameters}
          onParametersChange={onParametersChange}
        />
      </CollapsibleSection>
    </div>
  );
} 