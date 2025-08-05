import React from 'react';
import { Slider } from '../atoms/Slider';

interface ThresholdInputProps {
  value: number;
  max: number;
  onChange: (v: number) => void;
}

export const ThresholdInput: React.FC<ThresholdInputProps> = ({ value, max, onChange }) => (
  <div className="w-full">
    <label className="block mb-1 text-gray-700">Min Sales Threshold</label>
    <div className="flex items-center space-x-4">
      <Slider min={0} max={max} value={value} onChange={onChange} />
      <input
        type="number"
        className="w-20 p-1 border rounded"
        value={value}
        onChange={e => onChange(Number(e.target.value))}
      />
    </div>
  </div>
);
