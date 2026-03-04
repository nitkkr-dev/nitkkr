'use client';

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import { MultiLineAxisTick } from './multi-line-axis-tick';

interface PackageDataPoint {
  programme: string;
  medianPackage: number;
  averagePackage: number;
  highestPackage: number;
  lowestPackage: number;
}

interface PackageBarChartProps {
  data: PackageDataPoint[];
}

const BAR_GROUP_WIDTH = 120;
const MIN_CHART_WIDTH = 600;

export function PackageBarChart({ data }: PackageBarChartProps) {
  const formattedData = data.map((item) => ({
    programme: item.programme,
    lowest: parseFloat(item.lowestPackage.toString()),
    median: parseFloat(item.medianPackage.toString()),
    average: parseFloat(item.averagePackage.toString()),
    highest: parseFloat(item.highestPackage.toString()),
  }));

  const chartWidth = Math.max(MIN_CHART_WIDTH, data.length * BAR_GROUP_WIDTH);

  return (
    <div className="w-full">
      <div className="w-full overflow-x-auto">
        <div style={{ width: chartWidth, minWidth: '100%' }}>
          <ResponsiveContainer width="100%" height={450}>
            <BarChart
              data={formattedData}
              margin={{ top: 20, right: 30, left: 10, bottom: 20 }}
              barCategoryGap="20%"
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#E0E0E0" />
              <XAxis
                dataKey="programme"
                interval={0}
                height={100}
                tick={<MultiLineAxisTick />}
              />
              <YAxis
                label={{
                  value: 'Package (LPA)',
                  angle: -90,
                  position: 'insideLeft',
                }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E13F32',
                  borderRadius: '8px',
                }}
                formatter={(value: string | number | undefined) => {
                  if (typeof value === 'number') {
                    return `₹${value.toFixed(2)} LPA`;
                  }
                  return value ?? '';
                }}
                labelFormatter={(label: unknown) => String(label)}
              />
              <Legend wrapperStyle={{ paddingTop: '20px' }} iconType="square" />
              <Bar
                dataKey="lowest"
                fill="#EE928B"
                name="Lowest Package"
                radius={[8, 8, 0, 0]}
                barSize={20}
              />
              <Bar
                dataKey="median"
                fill="#E7695F"
                name="Median Package"
                radius={[8, 8, 0, 0]}
                barSize={20}
              />
              <Bar
                dataKey="average"
                fill="#E13F32"
                name="Average Package"
                radius={[8, 8, 0, 0]}
                barSize={20}
              />
              <Bar
                dataKey="highest"
                fill="#C5291D"
                name="Highest Package"
                radius={[8, 8, 0, 0]}
                barSize={20}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
