
'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Clock, TrendingUp, Shield, Target } from 'lucide-react'

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 parallax-bg">
        <Image
          src="https://cdn.abacus.ai/images/ce3cc0ea-625c-4612-a481-ec13ba32361f.png"
          alt="Kronos - Deus do Tempo"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-6">
            KAPAM
            <span className="block kronos-text-gradient text-6xl md:text-8xl">
              KRONOS
            </span>
            <span className="text-4xl md:text-6xl text-blue-100">
              LONGVIEW FIM
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto font-light">
            O tempo é o maior aliado na criação de riqueza. Investimento de longo prazo 
            com disciplina, paciência e visão estratégica.
          </p>

          {/* Key Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
            {[
              { icon: Clock, label: 'Visão de Longo Prazo', desc: 'Estratégia' },
              { icon: TrendingUp, label: 'Crescimento Sustentável', desc: '11.40% retorno' },
              { icon: Shield, label: 'Gestão Disciplinada', desc: 'KAPAM' },
              { icon: Target, label: 'Foco Público Geral', desc: 'R$ 22+ mi' },
            ].map((feature, index) => (
              <div
                key={feature.label}
                className={`glass-effect rounded-xl p-4 text-white transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <feature.icon className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
                <h3 className="font-semibold text-sm mb-1">{feature.label}</h3>
                <p className="text-xs text-blue-200">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="kronos-gradient text-white text-lg px-8 py-4 hover:opacity-90">
              Conheça o Fundo
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white/10 border-white text-white hover:bg-white hover:text-blue-900 text-lg px-8 py-4"
            >
              Baixar Fact Sheet
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
