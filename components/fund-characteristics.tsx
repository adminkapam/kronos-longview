
'use client'

import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { 
  Clock, 
  Target, 
  TrendingUp, 
  Shield, 
  PieChart, 
  DollarSign,
  Calendar,
  Users
} from 'lucide-react'

export function FundCharacteristics() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="strategy" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-blue-900 mb-6">
              Características do <span className="kronos-text-gradient">Fundo</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Estrutura operacional sólida e estratégia de investimento disciplinada 
              para investidores com visão de longo prazo.
            </p>
          </div>

          {/* Main Strategy Section */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Strategy Description */}
            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-6 font-playfair">
                Estratégia de Investimento
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 kronos-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-2">Multimercado Estratégia Livre</h4>
                    <p className="text-gray-600">
                      Flexibilidade para alocação em diversos mercados e estratégias, 
                      mantendo foco na criação de valor de longo prazo.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-2">Horizonte Longo Prazo</h4>
                    <p className="text-gray-600">
                      Estratégia que permite capturar ciclos completos 
                      de mercado e o poder dos juros compostos.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 kronos-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-2">Gestão de Risco Disciplinada</h4>
                    <p className="text-gray-600">
                      Processo rigoroso de análise e controle de risco, 
                      com volatilidade historicamente baixa (1,49%).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://cdn.abacus.ai/images/647b81c3-9de4-475d-befa-32ade1bfe737.png"
                  alt="Crescimento Financeiro Temporal"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Portfolio Composition */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
            <h3 className="text-2xl font-bold text-blue-900 mb-8 font-playfair flex items-center">
              <PieChart className="w-8 h-8 mr-3 text-yellow-600" />
              Composição da Carteira
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  category: 'Cotas de Fundos',
                  percentage: '56,84%',
                  value: 'R$ 12,64 mi',
                  color: 'bg-yellow-400',
                  icon: TrendingUp,
                  description: 'Seleção rigorosa dos melhores gestores'
                },
                {
                  category: 'Títulos Públicos',
                  percentage: '37,26%',
                  value: 'R$ 8,29 mi',
                  color: 'bg-blue-600',
                  icon: Shield,
                  description: 'Base sólida e segura da carteira'
                },
                {
                  category: 'Op. Compromissadas',
                  percentage: '5,80%',
                  value: 'R$ 1,29 mi',
                  color: 'bg-gray-400',
                  icon: Clock,
                  description: 'Gestão de liquidez e oportunidades'
                }
              ].map((item) => (
                <div key={item.category} className="text-center">
                  <div className="relative mb-4">
                    <div className="w-24 h-24 mx-auto rounded-full border-8 border-gray-200 relative overflow-hidden">
                      <div 
                        className={`absolute bottom-0 left-0 right-0 ${item.color} transition-all duration-1000`}
                        style={{ height: inView ? item.percentage : '0%' }}
                      ></div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <item.icon className="w-8 h-8 text-gray-600" />
                    </div>
                  </div>
                  <h4 className="font-semibold text-blue-900 mb-2">{item.category}</h4>
                  <div className="text-2xl font-bold text-gray-800 mb-1">{item.percentage}</div>
                  <div className="text-sm text-gray-600 mb-2">{item.value}</div>
                  <p className="text-xs text-gray-500">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Operational Details */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: DollarSign,
                title: 'Taxa de Administração',
                value: '0,60% a.a.',
                subtitle: 'Competitiva no mercado',
                color: 'bg-green-100 text-green-600'
              },
              {
                icon: TrendingUp,
                title: 'Taxa de Performance',
                value: '20%',
                subtitle: 'Do excesso sobre 100% CDI',
                color: 'bg-blue-100 text-blue-600'
              },
              {
                icon: Calendar,
                title: 'Liquidez',
                value: 'D+35',
                subtitle: 'Adequada ao longo prazo',
                color: 'bg-yellow-100 text-yellow-600'
              },
              {
                icon: Users,
                title: 'Aporte Mínimo',
                value: 'R$ 1.000',
                subtitle: 'Investidor geral',
                color: 'bg-purple-100 text-purple-600'
              }
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 shadow-md">
                <div className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center mb-4`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-blue-900 mb-2">{item.title}</h4>
                <div className="text-2xl font-bold text-gray-800 mb-1">{item.value}</div>
                <p className="text-sm text-gray-600">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
