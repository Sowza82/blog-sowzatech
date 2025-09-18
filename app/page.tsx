'use client'

import { ArrowDown } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero */}
      <section
        className="flex flex-col flex-1 justify-center items-center text-center px-4
        bg-black"
      >
        <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
          Bem-vindos ao Blog <span className="text-pink-400">SowzaTech</span>!
        </h1>

        <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed drop-shadow">
          Acompanhe minha jornada na tecnologia, descubra projetos, aprendizados
          e insights sobre Front-End, Back-End, UX/UI, Cloud e Engenharia de
          Qualidade.
        </p>

        <Link
          href="/posts"
          className="group inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500
          text-white font-semibold px-8 py-4 rounded-lg shadow-md transition-transform hover:scale-105"
        >
          <span className="text-white">Ver Posts</span>
          <ArrowDown size={20} className="text-white group-hover:text-white" />
        </Link>
      </section>
    </main>
  )
}
