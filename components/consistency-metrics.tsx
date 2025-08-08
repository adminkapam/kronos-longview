
'use client'

import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts'

const consistencyData = [
  { name: 'Meses Positivos', value: 14, color: '#22c55e' },
  { name: 'Meses Negativos', value: 1, color: '#ef4444' }
]

const monthlyReturns = [
  { month: 'Mai/24', return: 1.1 },
  { month: 'Jun/24', return: 1.2 },
  { month: 'Jul/24', return: 1.5 },
  { month: 'Ago/24', return: 1.4 },
  { month: 'Set/24', return: 0.9 },
  { month: 'Out/24', return: 1.4 },
  { month: 'Nov/24', return: 1.3 },
  { month: 'Dez/24', return: 1.2 },
  { month: 'Jan/25', return: 0.8 },
  { month: 'Fev/25', return: 0.7 },
  { month: 'Mar/25', return: 0.8 },
  { month: 'Abr/25', return: 0.9 },
  { month: 'Mai/25', return: 1.4 },
  { month: 'Jun/25', return: -0.33 },
  { month: 'Jul/25', return: 0.0 }
]

export function ConsistencyMetrics() {
  return (
    <div className="grid lg:grid-cols-2 gap-8 mb-16">
      {/* Consistency Pie Chart */}
      <div className="bg-gray-50 rounded-xl p-6">
        <h4 className="text-xl font-bold text-blue-900 mb-4 font-playfair">
          Consistência de Performance
        </h4>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={consistencyData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                dataKey="value"
                label={({ name, value, percent }) => `${name}: ${value} (${(percent * 100).toFixed(0)}%)`}
                labelLine={false}
                fontSize={11}
              >
                {consistencyData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #ccc',
                  borderRadius: '8px',
                  fontSize: '11px'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="text-center mt-4">
          <div className="text-3xl font-bold text-green-600 mb-1">93,33%</div>
          <p className="text-sm text-gray-600">Taxa de Sucesso Mensal</p>
        </div>
      </div>

      {/* Monthly Returns Bar Chart */}
      <div className="bg-gray-50 rounded-xl p-6">
        <h4 className="text-xl font-bold text-blue-900 mb-4 font-playfair">
          Retornos Mensais
        </h4>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={monthlyReturns} margin={{ top: 20, right: 30, left: 0, bottom: 40 }}>
              <XAxis 
                dataKey="month"
                tickLine={false}
                tick={{ fontSize: 9 }}
                angle={-45}
                textAnchor="end"
                height={50}
                interval={0}
              />
              <YAxis 
                tickLine={false}
                tick={{ fontSize: 10 }}
                label={{ 
                  value: 'Retorno (%)', 
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
                formatter={(value: any) => [`${Number(value).toFixed(2)}%`, 'Retorno']}
              />
              <Bar 
                dataKey="return" 
                fill="#22c55e"
                radius={[2, 2, 0, 0]}
              >
                {monthlyReturns.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.return >= 0 ? '#22c55e' : '#ef4444'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4 text-center">
          <div>
            <div className="text-xl font-bold text-green-600">1,41%</div>
            <p className="text-xs text-gray-600">Maior Retorno</p>
          </div>
          <div>
            <div className="text-xl font-bold text-red-600">-0,33%</div>
            <p className="text-xs text-gray-600">Menor Retorno</p>
          </div>
        </div>
      </div>
    </div>
  )
}
