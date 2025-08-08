
'use client'

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const performanceData = [
  { month: 'Mai/24', value: 100 },
  { month: 'Jun/24', value: 101.1 },
  { month: 'Jul/24', value: 102.3 },
  { month: 'Ago/24', value: 103.8 },
  { month: 'Set/24', value: 105.2 },
  { month: 'Out/24', value: 106.1 },
  { month: 'Nov/24', value: 107.5 },
  { month: 'Dez/24', value: 108.9 },
  { month: 'Jan/25', value: 110.2 },
  { month: 'Fev/25', value: 111.4 },
  { month: 'Mar/25', value: 112.1 },
  { month: 'Abr/25', value: 112.8 },
  { month: 'Mai/25', value: 113.6 },
  { month: 'Jun/25', value: 111.4 },
  { month: 'Jul/25', value: 111.4 }
]

export function PerformanceChart() {
  return (
    <div className="w-full h-96">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={performanceData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
          <XAxis 
            dataKey="month" 
            tickLine={false}
            tick={{ fontSize: 10 }}
            angle={-45}
            textAnchor="end"
            height={60}
            interval="preserveStartEnd"
          />
          <YAxis 
            tickLine={false}
            tick={{ fontSize: 10 }}
            domain={['dataMin - 2', 'dataMax + 2']}
            label={{ 
              value: 'Rentabilidade (%)', 
              angle: -90, 
              position: 'insideLeft',
              style: { textAnchor: 'middle', fontSize: 11 }
            }}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #ccc',
              borderRadius: '8px',
              fontSize: '11px'
            }}
            formatter={(value: any) => [
              `${Number(value).toFixed(1)}%`,
              'KAPAM Kronos'
            ]}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#D4AF37"
            strokeWidth={3}
            dot={{ fill: '#D4AF37', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, fill: '#D4AF37' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
