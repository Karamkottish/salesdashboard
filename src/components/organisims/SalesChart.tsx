import React from 'react';
import { ResponsiveContainer, BarChart, Bar, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { SalesRecord } from '../../data/sales';

interface SalesChartProps {
  data: SalesRecord[];
  type: 'bar' | 'line' | 'pie';
}

export const SalesChart: React.FC<SalesChartProps> = ({ data, type }) => {
  const filtered = data;
  const COLORS = ['#3b82f6', '#10b981', '#f59e0b'];

  return (
    <ResponsiveContainer width="100%" height={300}>
      {type === 'bar' && (
        <BarChart data={filtered}>
          <Bar dataKey="sales" fill="#3b82f6" />
        </BarChart>
      )}
      {type === 'line' && (
        <LineChart data={filtered}>
          <Line type="monotone" dataKey="sales" stroke="#3b82f6" />
        </LineChart>
      )}
      {type === 'pie' && (
        <PieChart>
          <Pie data={filtered} dataKey="sales" nameKey="year" outerRadius={100}>
            {filtered.map((_, idx) => (
              <Cell key={idx} fill={COLORS[idx % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      )}
    </ResponsiveContainer>
  );
};
