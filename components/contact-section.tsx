
'use client'

import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  User, 
  Building2,
  Award,
  GraduationCap
} from 'lucide-react'

export function ContactSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <Image
          src="https://cdn.abacus.ai/images/347b2d6b-c160-4d24-a4f8-c69726815155.png"
          alt="Temporal Cycles"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Construa seu Futuro com <span className="kronos-text-gradient">Kronos</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Entre em contato com nossa equipe especializada e descubra como 
              o tempo pode ser seu maior aliado na criação de riqueza.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 font-playfair flex items-center">
                  <Building2 className="w-8 h-8 mr-3 text-yellow-400" />
                  KAPAM Gestora
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Gestora independente especializada em segmentos institucional e private, 
                  com mais de R$ 230 milhões sob gestão e foco em resultados de longo prazo.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Telefone</h4>
                    <p className="text-gray-300">(48) 3037-4440</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">E-mail</h4>
                    <p className="text-gray-300">contato@kapam.com.br</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Endereço</h4>
                    <p className="text-gray-300">
                      R. Esteves Júnior, 50 - 507<br />
                      Centro - Florianópolis - SC
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Horário de Atendimento</h4>
                    <p className="text-gray-300">Segunda a Sexta: 9h às 18h</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Information */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold font-playfair flex items-center">
                <User className="w-8 h-8 mr-3 text-yellow-400" />
                Equipe Técnica
              </h3>

              {/* Team Members */}
              <div className="space-y-6">
                <div className="bg-gray-800 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-yellow-400 mb-2">
                    Victor Cardoso Carvalho Novaes
                  </h4>
                  <p className="text-gray-300 mb-3">Diretor de Investimentos</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-3 py-1 bg-blue-600 rounded-full text-xs">CGE</span>
                    <span className="px-3 py-1 bg-blue-600 rounded-full text-xs">CNPI-T</span>
                    <span className="px-3 py-1 bg-blue-600 rounded-full text-xs">CEA</span>
                  </div>
                  <p className="text-sm text-gray-400">
                    Especialista em gestão de investimentos com certificações 
                    reconhecidas pelo mercado financeiro.
                  </p>
                </div>

                <div className="bg-gray-800 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-yellow-400 mb-2">
                    Danilo Ferreira Rodrigues Junior
                  </h4>
                  <p className="text-gray-300 mb-3">Diretor de Risco e Compliance</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-3 py-1 bg-green-600 rounded-full text-xs">Direito</span>
                    <span className="px-3 py-1 bg-green-600 rounded-full text-xs">Mestrado ADM</span>
                  </div>
                  <p className="text-sm text-gray-400">
                    Formação jurídica e acadêmica focada em gestão de riscos 
                    e conformidade regulatória.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-xl p-6 text-center">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  Pronto Para Começar?
                </h4>
                <p className="text-gray-800 mb-6">
                  Agende uma reunião e descubra como a filosofia Kronos 
                  pode transformar seus investimentos.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-gray-900 hover:bg-gray-800 text-white">
                    Agendar Reunião
                  </Button>
                  <Button variant="outline" className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white">
                    Solicitar Proposta
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Information */}
          <div className="mt-16 pt-8 border-t border-gray-700 text-center">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <Award className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
                <h4 className="font-semibold mb-2">R$ 230+ Milhões</h4>
                <p className="text-sm text-gray-400">Recursos sob Gestão</p>
              </div>
              <div>
                <GraduationCap className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
                <h4 className="font-semibold mb-2">40+ Clientes</h4>
                <p className="text-sm text-gray-400">Atendidos com Excelência</p>
              </div>
              <div>
                <Clock className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
                <h4 className="font-semibold mb-2">Desde 2023</h4>
                <p className="text-sm text-gray-400">Inovação e Crescimento</p>
              </div>
            </div>
            
            <div className="text-sm text-gray-400">
              <p className="mb-2">
                <strong>CNPJ KAPAM:</strong> 51.224.521/0001-63
              </p>
              <p>
                © 2025 KAPAM Kronos Longview FIM. Todo investimento tem seu risco inerente. 
                Leia o regulamento antes de investir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
