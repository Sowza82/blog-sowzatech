'use client'

import Link from 'next/link'

interface Post {
  title: string
  slug: string
  date: string
  category: string
  excerpt: string
}

interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <div className="bg-purple-900/20 border border-purple-600 rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transition transform duration-300">
      {/* Categoria */}
      <p className="text-sm text-purple-300 font-semibold mb-2">
        {post.category}
      </p>

      {/* Título */}
      <h2 className="text-xl font-bold text-purple-100 mb-2">{post.title}</h2>

      {/* Data */}
      <p className="text-sm text-purple-300 mb-4">{post.date}</p>

      {/* Resumo */}
      <p className="text-purple-200 mb-4">{post.excerpt}</p>

      {/* Link para ler mais */}
      <Link
        href={`/posts/${post.slug}`}
        className="text-purple-300 hover:text-pink-400 font-medium underline transition-colors"
      >
        Ler mais
      </Link>
    </div>
  )
}
