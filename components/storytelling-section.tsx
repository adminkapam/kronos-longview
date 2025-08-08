
'use client'

import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { ArrowRight, Clock, TrendingUp, Target } from 'lucide-react'

export function StorytellingSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <Image
          src="https://cdn.abacus.ai/images/d16da1fa-0def-44b8-940f-39a654f99a0c.png"
          alt="Pattern Background"
          fill
          className="object-cover opacity-5"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-blue-900 mb-6">
              A Jornada de <span className="kronos-text-gradient">Transformação</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Do MAG Institucional Moderado ao Kronos Longview: uma evolução natural 
              rumo à filosofia de investimento temporal.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-yellow-400 to-blue-900 rounded-full"></div>

            {/* Timeline Items */}
            <div className="space-y-16">
              {/* Item 1: Foundation */}
              <div className="flex items-center justify-between">
                <div className="w-5/12 text-right pr-8">
                  <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-yellow-400">
                    <div className="text-sm text-yellow-600 font-semibold mb-2">MAIO 2024</div>
                    <h3 className="text-xl font-bold text-blue-900 mb-3">Fundação Sólida</h3>
                    <p className="text-gray-600">
                      Lançamento do Kapam Moderado FIM com foco em preservação 
                      de capital e rentabilidade consistente. Primeiros passos na jornada 
                      de criação de valor.
                    </p>
                    <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-blue-900 font-semibold">R$ 22,28 mi</span>
                        <div className="text-gray-500">Patrimônio</div>
                      </div>
                      <div>
                        <span className="text-green-600 font-semibold">11,40%</span>
                        <div className="text-gray-500">Retorno</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="w-12 h-12 kronos-gradient rounded-full flex items-center justify-center relative z-10">
                  <Target className="w-6 h-6 text-white" />
                </div>
                
                <div className="w-5/12"></div>
              </div>

              {/* Item 2: Evolution */}
              <div className="flex items-center justify-between">
                <div className="w-5/12"></div>
                
                <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center relative z-10">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                
                <div className="w-5/12 pl-8">
                  <div className="bg-white rounded-xl p-6 shadow-lg border-r-4 border-blue-900">
                    <div className="text-sm text-blue-600 font-semibold mb-2">2024-2025</div>
                    <h3 className="text-xl font-bold text-blue-900 mb-3">Evolução Estratégica</h3>
                    <p className="text-gray-600">
                      Consolidação da performance com 93,33% de meses positivos e volatilidade 
                      controlada de 1,49%. Demonstração consistente da disciplina de gestão 
                      e foco no longo prazo.
                    </p>
                    <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-green-600 font-semibold">93,33%</span>
                        <div className="text-gray-500">Meses Positivos</div>
                      </div>
                      <div>
                        <span className="text-blue-600 font-semibold">1,49%</span>
                        <div className="text-gray-500">Volatilidade</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Item 3: Transformation */}
              <div className="flex items-center justify-between">
                <div className="w-5/12 text-right pr-8">
                  <div className="bg-gradient-to-br from-yellow-50 to-blue-50 rounded-xl p-6 shadow-lg border-l-4 border-gradient-to-b from-yellow-400 to-blue-600">
                    <div className="text-sm text-yellow-600 font-semibold mb-2">2025 - AGORA</div>
                    <h3 className="text-xl font-bold text-blue-900 mb-3">Transformação Kronos</h3>
                    <p className="text-gray-600">
                      Evolução natural para o <strong>KAPAM Kronos Longview FIM</strong>. 
                      Incorporação da filosofia temporal milenar com estratégia moderna de 
                      longo prazo. O tempo como aliado na criação de riqueza com **segurança**.
                    </p>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center justify-end text-sm">
                        <span className="text-blue-900 font-semibold">Visão Longo Prazo</span>
                        <ArrowRight className="w-4 h-4 ml-2 text-yellow-600" />
                      </div>
                      <div className="flex items-center justify-end text-sm">
                        <span className="text-blue-900 font-semibold">Filosofia Kronos</span>
                        <ArrowRight className="w-4 h-4 ml-2 text-yellow-600" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-blue-600 rounded-full flex items-center justify-center relative z-10">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                
                <div className="w-5/12"></div>
              </div>
            </div>
          </div>

          {/* Philosophy Quote */}
          <div className="mt-16 text-center">
            <div className="bg-blue-900 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <Image
                  src="https://cdn.abacus.ai/images/ce3cc0ea-625c-4612-a481-ec13ba32361f.png"
                  alt="Kronos Background"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative z-10">
                <blockquote className="text-2xl md:text-3xl font-playfair italic mb-6">
                  "Assim como Kronos governa os ciclos eternos, reconhecemos que a verdadeira 
                  criação de riqueza acontece através do tempo, com paciência, disciplina e 
                  estratégia e segurança."
                </blockquote>
                <div className="text-yellow-400 font-semibold">
                  — Filosofia KAPAM Kronos Longview
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
