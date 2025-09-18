'use client'

import { Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-purple-50 text-gray-700 text-sm py-6 shadow-inner">
      <div className="container mx-auto text-center space-y-1 flex flex-col items-center">
        <p>© 2025 Sowzatech. Todos os direitos reservados.</p>
        <p className="flex items-center gap-1">
          Feito com <Heart size={16} className="text-purple-600" /> por Tatiane
          Souza | Inspiração e aprendizado constante.
        </p>
      </div>
    </footer>
  )
}
