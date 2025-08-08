
'use client'

import { useInView } from 'react-intersection-observer'
import { PerformanceChart } from '@/components/performance-chart'
import { ConsistencyMetrics } from '@/components/consistency-metrics'
import { TrendingUp, Award, Shield, Target } from 'lucide-react'

export function PerformanceSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="performance" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-blue-900 mb-6">
              Performance e <span className="kronos-text-gradient">Resultados</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Consistência e disciplina refletidas em resultados sólidos. 
              O tempo como validador da estratégia de longo prazo.
            </p>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: TrendingUp,
                title: 'Retorno Total',
                value: '11,40%',
                subtitle: 'Desde o início (14 meses)',
                color: 'text-green-600',
                bgColor: 'bg-green-50'
              },
              {
                icon: Award,
                title: 'Rentabilidade 12M',
                value: '9,35%',
                subtitle: 'Performance anualizada',
                color: 'text-blue-600',
                bgColor: 'bg-blue-50'
              },
              {
                icon: Shield,
                title: 'Volatilidade',
                value: '1,49%',
                subtitle: 'Controle de risco',
                color: 'text-yellow-600',
                bgColor: 'bg-yellow-50'
              },
              {
                icon: Target,
                title: 'Consistência',
                value: '93,33%',
                subtitle: 'Meses positivos',
                color: 'text-purple-600',
                bgColor: 'bg-purple-50'
              }
            ].map((metric) => (
              <div key={metric.title} className={`${metric.bgColor} rounded-xl p-6 text-center`}>
                <metric.icon className={`w-8 h-8 ${metric.color} mx-auto mb-3`} />
                <div className={`text-3xl font-bold ${metric.color} mb-2`}>
                  {metric.value}
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">{metric.title}</h4>
                <p className="text-sm text-gray-600">{metric.subtitle}</p>
              </div>
            ))}
          </div>

          {/* Performance Chart */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-blue-900 mb-6 font-playfair">
              Evolução do Patrimônio
            </h3>
            <PerformanceChart />
          </div>

          {/* Consistency Metrics */}
          <ConsistencyMetrics />

          {/* Risk Analysis */}
          <div className="bg-blue-900 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 font-playfair">
              Análise de Risco e Retorno
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">-2,02</div>
                <h4 className="font-semibold mb-2">Índice de Sharpe 12M</h4>
                <p className="text-sm text-blue-200">
                  Relação risco-retorno em contexto de baixa volatilidade
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">1,41%</div>
                <h4 className="font-semibold mb-2">Maior Retorno Mensal</h4>
                <p className="text-sm text-blue-200">
                  Pico de performance demonstrando potencial de ganhos
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">-0,33%</div>
                <h4 className="font-semibold mb-2">Menor Retorno Mensal</h4>
                <p className="text-sm text-blue-200">
                  Drawdown controlado evidenciando gestão de risco
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
