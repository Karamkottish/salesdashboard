// src/components/organisms/SalesChart.tsx
import React from 'react'
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from 'recharts'
import { SalesRecord } from '@/data/sales'

interface SalesChartProps {
  data: SalesRecord[]
  type: 'bar' | 'line' | 'pie'
}

export const SalesChart: React.FC<SalesChartProps> = ({ data, type }) => {
  const COLORS = ['#3b82f6', '#10b981', '#f59e0b']

  return (
    <ResponsiveContainer width="100%" height={300}>
      {type === 'bar' && (
        <BarChart data={data}>
          <Bar dataKey="sales" fill={COLORS[0]} />
        </BarChart>
      )}

      {type === 'line' && (
        <LineChart data={data}>
          <Line type="monotone" dataKey="sales" stroke={COLORS[0]} />
        </LineChart>
      )}

      {type === 'pie' && (
        <PieChart>
          <Pie data={data} dataKey="sales" nameKey="year" outerRadius={100}>
            {data.map((_, idx) => (
              <Cell key={idx} fill={COLORS[idx % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      )}
    </ResponsiveContainer>
  )
}
