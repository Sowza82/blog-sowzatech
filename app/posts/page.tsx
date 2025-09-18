// ================================
// ARQUIVO: app/posts/page.tsx
// DESCRIÇÃO: Página que lista todos os posts, permitindo toggle
// entre grid e lista. Ordena posts do mais recente para o mais antigo.
// ================================

'use client'

import { useState } from 'react'
import PostCard from '../../components/PostCard'
import posts from '../../data/posts'

export default function PostsPage() {
  const [view, setView] = useState<'grid' | 'list'>('grid')

  // Ordena os posts pelo ano (mais recente primeiro)
  const sortedPosts = [...posts].sort((a, b) => {
    const yearA = parseInt(a.date.match(/\d{4}/)?.[0] || '0', 10)
    const yearB = parseInt(b.date.match(/\d{4}/)?.[0] || '0', 10)
    return yearB - yearA
  })

  return (
    <section className="max-w-6xl mx-auto px-4 py-12 text-white animate-fadeIn">
      {/* Cabeçalho e toggle de visualização */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        <h1 className="text-4xl font-bold text-purple-400">Posts</h1>
        <div className="flex gap-4">
          <button
            onClick={() => setView('grid')}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              view === 'grid' ? 'bg-purple-600 shadow-lg' : 'bg-purple-500/50'
            } text-white`}
          >
            Grid
          </button>
          <button
            onClick={() => setView('list')}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              view === 'list' ? 'bg-purple-600 shadow-lg' : 'bg-purple-500/50'
            } text-white`}
          >
            Lista
          </button>
        </div>
      </div>

      {/* Renderiza os posts */}
      <div
        className={`${
          view === 'grid' ? 'grid md:grid-cols-2 gap-6' : 'flex flex-col gap-4'
        }`}
      >
        {sortedPosts.map(post => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  )
}
