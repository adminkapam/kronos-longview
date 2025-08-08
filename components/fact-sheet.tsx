
'use client'

import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { 
  FileText, 
  Download, 
  Building2, 
  Calendar, 
  DollarSign, 
  TrendingUp,
  Users,
  Clock,
  Phone,
  Mail
} from 'lucide-react'

export function FactSheet() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="fact-sheet" className="py-20 bg-gradient-to-br from-blue-50 to-yellow-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-blue-900 mb-6">
              <span className="kronos-text-gradient">Fact Sheet</span> Completo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Todas as informações essenciais do KAPAM Kronos Longview FIM 
              em formato profissional para os investidores.
            </p>
          </div>

          {/* Fact Sheet Content */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Header with Visual */}
            <div className="relative bg-gradient-to-r from-blue-900 to-blue-800 p-8 text-white">
              <div className="absolute inset-0 opacity-10">
                <Image
                  src="https://cdn.abacus.ai/images/d9db8353-3a3a-4d54-9295-46e1c18a3bd4.png"
                  alt="Performance Dashboard"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
                <div>
                  <h3 className="text-3xl font-bold mb-2 font-playfair">
                    KAPAM <span className="text-yellow-400">KRONOS</span> LONGVIEW FIM
                  </h3>
                  <p className="text-blue-200 text-lg">
                    Fundo de Investimento Multimercado - Estratégia Livre
                  </p>
                </div>
                <div className="mt-4 md:mt-0">
                  <Button className="bg-yellow-600 hover:bg-yellow-700 text-white">
                    <Download className="w-4 h-4 mr-2" />
                    Baixar PDF
                  </Button>
                </div>
              </div>
            </div>

            {/* Content Grid */}
            <div className="p-8">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Column 1: Fund Information */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-bold text-blue-900 mb-4 flex items-center">
                      <Building2 className="w-5 h-5 mr-2 text-yellow-600" />
                      Informações do Fundo
                    </h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">CNPJ:</span>
                        <span className="font-medium">54.792.610/0001-02</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Data de Início:</span>
                        <span className="font-medium">13/05/2024</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Administrador:</span>
                        <span className="font-medium">BTG Pactual</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Gestor:</span>
                        <span className="font-medium">KAPAM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Classificação:</span>
                        <span className="font-medium">Multimercado</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-blue-900 mb-4 flex items-center">
                      <DollarSign className="w-5 h-5 mr-2 text-yellow-600" />
                      Taxas e Valores
                    </h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Taxa Admin.:</span>
                        <span className="font-medium">0,60% a.a.</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Taxa Perform.:</span>
                        <span className="font-medium">20% s/ CDI</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Aporte Mínimo:</span>
                        <span className="font-medium">R$ 1.000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Saldo Mínimo:</span>
                        <span className="font-medium">R$ 50.000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Liquidez:</span>
                        <span className="font-medium">D+35</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Column 2: Performance */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-bold text-blue-900 mb-4 flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2 text-yellow-600" />
                      Performance
                    </h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Retorno Total:</span>
                        <span className="font-medium text-green-600">11,40%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Rentab. 12M:</span>
                        <span className="font-medium text-green-600">9,35%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Volatilidade:</span>
                        <span className="font-medium">1,49%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Índice de Sharpe 12M (250722):</span>
                        <span className="font-medium">-2,02</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Meses Positivos:</span>
                        <span className="font-medium text-green-600">93,33%</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-blue-900 mb-4 flex items-center">
                      <Clock className="w-5 h-5 mr-2 text-yellow-600" />
                      Patrimônio
                    </h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">PL Atual:</span>
                        <span className="font-medium">R$ 22,28 mi</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">PL Médio 12M:</span>
                        <span className="font-medium">R$ 21,20 mi</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Cotistas:</span>
                        <span className="font-medium">1 (Exclusivo)</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Column 3: Strategy & Contact */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-bold text-blue-900 mb-4 flex items-center">
                      <Users className="w-5 h-5 mr-2 text-yellow-600" />
                      Estratégia Kronos
                    </h4>
                    <div className="text-sm text-gray-700 space-y-2">
                      <p>
                        <strong>Filosofia:</strong> Investimento de longo prazo baseado 
                        na sabedoria temporal de Kronos.
                      </p>
                      <p>
                        <strong>Horizonte:</strong> longo prazo para capturar ciclos 
                        completos de mercado.
                      </p>
                      <p>
                        <strong>Foco:</strong> Criação de riqueza através do tempo 
                        com disciplina e paciência.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-blue-900 mb-4 flex items-center">
                      <Phone className="w-5 h-5 mr-2 text-yellow-600" />
                      Contato KAPAM
                    </h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-gray-500" />
                        <span>(48) 3037-4440</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-gray-500" />
                        <span>contato@kapam.com.br</span>
                      </div>
                      <div className="mt-4">
                        <p className="text-xs text-gray-500">
                          R. Esteves Júnior, 50 - 507<br />
                          Centro - Florianópolis - SC
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="mt-8 p-6 bg-gradient-to-r from-blue-900 to-blue-800 rounded-xl text-white text-center">
                <h4 className="text-xl font-bold mb-2">
                  Pronto para Investir com Visão de Longo Prazo?
                </h4>
                <p className="text-blue-200 mb-4">
                  Junte-se à filosofia Kronos e construa riqueza através do tempo.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-yellow-600 hover:bg-yellow-700 text-white">
                    <FileText className="w-4 h-4 mr-2" />
                    Solicitar Proposta
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                    Agendar Reunião
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
