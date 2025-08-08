
'use client'

import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { Clock, Target, TrendingUp, Shield } from 'lucide-react'

export function AboutSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Clock className="w-8 h-8 text-yellow-600 mr-3" />
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-blue-900">
                Sobre o <span className="kronos-text-gradient">Kronos Longview</span>
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Inspirado na sabedoria milenar do tempo e na disciplina dos grandes investidores, 
              o KAPAM Kronos Longview FIM combina mitologia e estratégia moderna.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4 font-playfair">
                  A Filosofia Kronos
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  <strong>Kronos (Χρόνος)</strong>, o deus primordial grego da personificação do tempo, 
                  representa a criação através dos ciclos eternos e a sabedoria que surge da paciência. 
                  Assim como Kronos governa o cosmos através do tempo, nossa estratégia reconhece que 
                  a verdadeira criação de riqueza acontece através de horizontes estendidos.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  A abordagem <strong>Longview</strong> complementa essa filosofia temporal com 
                  disciplina de investimento moderna: análise rigorosa, foco no compounding e 
                  paciência estratégica para capturar valor onde outros veem apenas volatilidade.
                </p>
              </div>

              {/* Key Principles */}
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: Target, title: 'Horizonte Longo Prazo', desc: 'Estratégia e segurança' },
                  { icon: TrendingUp, title: 'Poder do Compounding', desc: 'Juros compostos' },
                  { icon: Shield, title: 'Análise Rigorosa', desc: 'Processo disciplinado' },
                  { icon: Clock, title: 'Paciência Estratégica', desc: 'Timing é essencial' },
                ].map((principle) => (
                  <div key={principle.title} className="bg-blue-50 rounded-lg p-4">
                    <principle.icon className="w-6 h-6 text-yellow-600 mb-2" />
                    <h4 className="font-semibold text-blue-900 mb-1">{principle.title}</h4>
                    <p className="text-sm text-gray-600">{principle.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="aspect-square relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://cdn.abacus.ai/images/1c6edda0-92a9-48a1-9387-a2657962a462.png"
                  alt="Logo Conceitual Kronos"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 kronos-gradient rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-900 rounded-full opacity-10"></div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 text-white">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: 'R$ 22+', label: 'Milhões sob Gestão', sublabel: 'PL' },
                { number: '11,40%', label: 'Retorno Total', sublabel: 'Desde Início' },
                { number: '93,33%', label: 'Meses Positivos', sublabel: '14 de 15 meses' },
                { number: '1,49%', label: 'Volatilidade', sublabel: 'Baixo Risco' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="font-semibold mb-1">{stat.label}</div>
                  <div className="text-sm text-blue-200">{stat.sublabel}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
