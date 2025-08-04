'use client';

import { useState } from 'react';

interface ControlGroupSectionProps {
  parameters: any;
  onParametersChange: (params: any) => void;
}

export default function ControlGroupSection({ parameters, onParametersChange }: ControlGroupSectionProps) {
  const [nextGroupId, setNextGroupId] = useState(3);

  const addNewGroup = () => {
    const newGroup = {
      id: nextGroupId,
      type: 'stroke',
      strokeType: 'angular',
      points: [
        { x: 100, y: 100 },
        { x: 100, y: 100 }
      ],
      shapes: ['transform']
    };

    const newControlGroups = [...parameters.controlGroups, newGroup];
    onParametersChange({ ...parameters, controlGroups: newControlGroups });
    setNextGroupId(nextGroupId + 1);
  };

  const deleteGroup = (groupId: number) => {
    const newControlGroups = parameters.controlGroups.filter((group: any) => group.id !== groupId);
    onParametersChange({ ...parameters, controlGroups: newControlGroups });
  };

  const updateGroup = (groupId: number, updates: any) => {
    const newControlGroups = parameters.controlGroups.map((group: any) =>
      group.id === groupId ? { ...group, ...updates } : group
    );
    onParametersChange({ ...parameters, controlGroups: newControlGroups });
  };

  const addPoint = (groupId: number) => {
    const group = parameters.controlGroups.find((g: any) => g.id === groupId);
    if (group) {
      const newPoints = [...group.points, { x: 100, y: 100 }];
      updateGroup(groupId, { points: newPoints });
    }
  };

  const deletePoint = (groupId: number, pointIndex: number) => {
    const group = parameters.controlGroups.find((g: any) => g.id === groupId);
    if (group && group.points.length > 1) {
      const newPoints = group.points.filter((_: any, index: number) => index !== pointIndex);
      updateGroup(groupId, { points: newPoints });
    }
  };

  const updatePoint = (groupId: number, pointIndex: number, field: string, value: number) => {
    const group = parameters.controlGroups.find((g: any) => g.id === groupId);
    if (group) {
      const newPoints = [...group.points];
      newPoints[pointIndex] = { ...newPoints[pointIndex], [field]: value };
      updateGroup(groupId, { points: newPoints });
    }
  };

  const addShape = (groupId: number) => {
    const group = parameters.controlGroups.find((g: any) => g.id === groupId);
    if (group) {
      const newShapes = [...group.shapes, 'transform'];
      updateGroup(groupId, { shapes: newShapes });
    }
  };

  const deleteShape = (groupId: number, shapeIndex: number) => {
    const group = parameters.controlGroups.find((g: any) => g.id === groupId);
    if (group && group.shapes.length > 1) {
      const newShapes = group.shapes.filter((_: any, index: number) => index !== shapeIndex);
      updateGroup(groupId, { shapes: newShapes });
    }
  };

  return (
    <div className="space-y-4">
      {/* Add new group button */}
      <button
        onClick={addNewGroup}
        className="w-full py-2 px-3 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg text-sm text-gray-600 dark:text-gray-400 hover:border-gray-400 dark:hover:border-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
      >
        + Add new group
      </button>

      {/* Existing groups */}
      {parameters.controlGroups.map((group: any) => (
        <div key={group.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 space-y-4">
          {/* Group header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                <div className="w-3 h-3 bg-gray-400 rounded-sm"></div>
                <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-400 rounded-sm"></div>
              </div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Stroke</span>
            </div>
            <button
              onClick={() => deleteGroup(group.id)}
              className="p-1 text-gray-400 hover:text-red-500 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>

          {/* Type */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Type</label>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name={`strokeType-${group.id}`}
                  value="angular"
                  checked={group.strokeType === 'angular'}
                  onChange={(e) => updateGroup(group.id, { strokeType: e.target.value })}
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                  {group.id === 1 ? 'Angular' : 'Angular'}
                </span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name={`strokeType-${group.id}`}
                  value={group.id === 1 ? 'curve' : 'smooth'}
                  checked={group.strokeType === (group.id === 1 ? 'curve' : 'smooth')}
                  onChange={(e) => updateGroup(group.id, { strokeType: e.target.value })}
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                  {group.id === 1 ? 'Curve' : 'Smooth'}
                </span>
              </label>
            </div>
          </div>

          {/* Ratio (only for group 2) */}
          {group.id === 2 && (
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Ratio</label>
              <input
                type="text"
                value={group.ratio || 2}
                onChange={(e) => {
                  const value = parseInt(e.target.value);
                  if (!isNaN(value)) updateGroup(group.id, { ratio: value });
                }}
                className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}

          {/* Points */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Points</label>
              <button
                onClick={() => addPoint(group.id)}
                className="text-xs text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              >
                + Add new
              </button>
            </div>
            <div className="space-y-2">
              {group.points.map((point: any, pointIndex: number) => (
                <div key={pointIndex} className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={`N ${point.x} px`}
                    onChange={(e) => {
                      const value = parseInt(e.target.value.replace(/\D/g, ''));
                      if (!isNaN(value)) updatePoint(group.id, pointIndex, 'x', value);
                    }}
                    className="flex-1 px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    value={`N ${point.y} px`}
                    onChange={(e) => {
                      const value = parseInt(e.target.value.replace(/\D/g, ''));
                      if (!isNaN(value)) updatePoint(group.id, pointIndex, 'y', value);
                    }}
                    className="flex-1 px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    onClick={() => deletePoint(group.id, pointIndex)}
                    className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Shapes */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Shape</label>
              <button
                onClick={() => addShape(group.id)}
                className="text-xs text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              >
                + Add new
              </button>
            </div>
            <div className="space-y-2">
              {group.shapes.map((shape: string, shapeIndex: number) => (
                <div key={shapeIndex} className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={shape}
                    onChange={(e) => {
                      const newShapes = [...group.shapes];
                      newShapes[shapeIndex] = e.target.value;
                      updateGroup(group.id, { shapes: newShapes });
                    }}
                    className="flex-1 px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <div className="w-4 h-4 bg-gray-400 rounded-sm"></div>
                  <button
                    onClick={() => deleteShape(group.id, shapeIndex)}
                    className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 