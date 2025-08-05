// src/pages/dashboard.tsx
import React, { useState } from 'react';
import { NextPage } from 'next';
import { salesData } from '../data/sales';
import { ThresholdInput } from '../components/molecules/ThresholdInput';
import { ChartToggle } from '../components/molecules/ChartToggle';
import { SalesChart } from '../components/organisms/SalesChart';

const Dashboard: NextPage = () => {
  const [threshold, setThreshold] = useState(0);
  const [chartType, setChartType] = useState<'bar' | 'line' | 'pie'>('bar');

  const maxSales = Math.max(...salesData.map(r => r.sales));
  const filtered = salesData.filter(r => r.sales >= threshold);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Sales Dashboard</h1>
      <p className="text-gray-600">
        Interactive sales overview (2022–2024). Adjust the slider to filter data.
      </p>

      <div className="bg-white p-4 rounded-lg shadow space-y-4">
        <ThresholdInput value={threshold} max={maxSales} onChange={setThreshold} />
        <ChartToggle selected={chartType} onSelect={setChartType} />
      </div>

      <div className="bg-white p-4 rounded-lg shadow">
        <SalesChart data={filtered} type={chartType} />
      </div>
    </div>
  );
};

export default Dashboard;
