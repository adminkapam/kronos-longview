
'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Clock, Menu, X } from 'lucide-react'

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMobileMenuOpen(false)
  }

  const navItems = [
    { id: 'about', label: 'Sobre o Fundo' },
    { id: 'strategy', label: 'Estratégia' },
    { id: 'performance', label: 'Performance' },
    { id: 'fact-sheet', label: 'Fact Sheet' },
    { id: 'contact', label: 'Contato' },
  ]

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-md' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 kronos-gradient rounded-full flex items-center justify-center">
              <Clock className="w-4 h-4 text-white" />
            </div>
            <div className="text-xl font-bold">
              <span className="text-blue-900">KAPAM</span>
              <span className="kronos-text-gradient ml-2">KRONOS</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-blue-900 font-medium transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Button className="kronos-gradient text-white hover:opacity-90">
              Investir Agora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-3 py-2">
                <Button className="w-full kronos-gradient text-white">
                  Investir Agora
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
