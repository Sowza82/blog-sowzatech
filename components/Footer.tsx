'use client'

import { Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-purple-50 text-gray-700 text-sm sm:text-base py-6 shadow-inner">
      <div className="container mx-auto flex flex-col items-center gap-2 text-center">
        <p>© 2025 Sowzatech. Todos os direitos reservados.</p>
        <p className="flex items-center gap-1 justify-center">
          Feito com <Heart size={16} className="text-purple-600" /> por Tatiane
          Souza | Inspiração e aprendizado constante.
        </p>
      </div>
    </footer>
  )
}
