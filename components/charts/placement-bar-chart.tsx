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

interface ChartDataPoint {
  programme: string;
  numberOfEligible: number;
  numberOfPlaced: number;
  numberOfOffers: number;
  percentagePlaced?: number;
}

interface PlacementBarChartProps {
  data: ChartDataPoint[];
}

const BAR_GROUP_WIDTH = 100;
const MIN_CHART_WIDTH = 600;

export function PlacementBarChart({ data }: PlacementBarChartProps) {
  const chartWidth = Math.max(MIN_CHART_WIDTH, data.length * BAR_GROUP_WIDTH);

  return (
    <div className="w-full">
      <div className="w-full overflow-x-auto">
        <div style={{ width: chartWidth, minWidth: '100%' }}>
          <ResponsiveContainer width="100%" height={450}>
            <BarChart
              data={data}
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
              <YAxis />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E13F32',
                  borderRadius: '8px',
                }}
                formatter={(value: string | number | undefined) => {
                  if (typeof value === 'number') {
                    return value.toFixed(0);
                  }
                  return value ?? '';
                }}
              />
              <Legend wrapperStyle={{ paddingTop: '20px' }} iconType="square" />
              <Bar
                dataKey="numberOfEligible"
                fill="#C5291D"
                name="Eligible Students"
                radius={[8, 8, 0, 0]}
                barSize={20}
              />
              <Bar
                dataKey="numberOfOffers"
                fill="#E13F32"
                name="Placement Offers"
                radius={[8, 8, 0, 0]}
                barSize={20}
              />
              <Bar
                dataKey="numberOfPlaced"
                fill="#EE928B"
                name="Students Placed"
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
