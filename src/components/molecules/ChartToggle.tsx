import React from 'react';
import { Button } from '../atoms/Button';

type ChartType = 'bar' | 'line' | 'pie';

interface ChartToggleProps {
  selected: ChartType;
  onSelect: (t: ChartType) => void;
}

export const ChartToggle: React.FC<ChartToggleProps> = ({ selected, onSelect }) => (
  <div className="flex space-x-2">
    {(['bar', 'line', 'pie'] as ChartType[]).map(type => (
      <Button
        key={type}
        variant={selected === type ? 'primary' : 'secondary'}
        onClick={() => onSelect(type)}
      >
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </Button>
    ))}
  </div>
);
