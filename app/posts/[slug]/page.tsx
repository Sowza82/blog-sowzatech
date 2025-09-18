import posts from '../../../data/posts'

interface PostPageProps {
  params: { slug: string }
}

export default function PostPage({ params }: PostPageProps) {
  const post = posts.find(p => p.slug === params.slug)

  if (!post) {
    return <div className="text-red-400 p-6">Post não encontrado!</div>
  }

  return (
    <article className="max-w-3xl mx-auto px-4 py-12 text-white animate-fadeIn">
      <p className="text-sm text-purple-300 font-semibold mb-2">
        {post.category}
      </p>
      <h1 className="text-3xl font-bold text-purple-300 mb-4">{post.title}</h1>
      <p className="text-sm text-purple-200 mb-6">{post.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </article>
  )
}
