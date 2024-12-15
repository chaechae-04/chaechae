// app/page.tsx

import Header from '@/app/components/Header'
import TabBar from '@/app/components/TabBar'

import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export default async function Home() {
  const posts = await getAllPosts()

  return (
    <div className="min-h-screen bg-[#051c2c]">
      <Header />
      <div className="mt-4">
        <img src="/imgs/temp.jpg" alt="임시 이미지" className="w-full md:w-3/4 lg:w-1/2 rounded-lg mx-auto" />
      </div>
      <TabBar />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid gap-6">
          {posts.map((post) => (
            <article key={post.id} className="bg-[#0A2540] p-4 md:p-6 lg:p-8 rounded-lg hover:bg-[#123456] transition-colors">
              <Link href={`/posts/${post.id}`}>
                <h2 className="text-white text-lg md:text-xl lg:text-2xl font-bold mb-2">{post.title}</h2>
                <p className="text-gray-400 text-sm md:text-base mb-4">{post.excerpt}</p>
                <div className="text-xs md:text-sm text-gray-500">
                  <span>{post.date}</span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </main>
    </div>
  )
}