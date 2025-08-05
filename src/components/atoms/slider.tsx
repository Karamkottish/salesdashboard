import React from 'react';

interface SliderProps {
  min: number;
  max: number;
  value: number;
  onChange: (v: number) => void;
}

export const Slider: React.FC<SliderProps> = ({ min, max, value, onChange }) => (
  <input
    type="range"
    min={min}
    max={max}
    value={value}
    onChange={e => onChange(Number(e.target.value))}
    className="w-full"
  />
);
