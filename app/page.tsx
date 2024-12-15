// app/page.tsx

"use client"

import Header from '@/app/components/Header'
import TabBar from '@/app/components/TabBar'
import Footer from '@/app/components/Footer'

import Link from 'next/link'

import { useEffect, useState } from 'react'
import { PostData } from '@/types/post'

export default function Home() {
  const [posts, setPosts] = useState<PostData[]>([])
  const [filteredPosts, setFilteredPosts] = useState<PostData[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 5

  useEffect(() => {
      const fetchPosts = async () => {
          const response = await fetch('/api/posts')
          if (!response.ok) {
              throw new Error('Network response was not ok')
          }
          const data = await response.json()
          setPosts(data)
          setFilteredPosts(data)
      }

      fetchPosts().catch(error => {
          console.error('Failed to fetch posts', error)
      })
  }, [])

  const handleSelectTab = (type: string | null) => {
    if (type === null) {
      setFilteredPosts(posts)
    } else {
      setFilteredPosts(posts.filter(post => post.type === type))
    }
    setCurrentPage(1)
  }

  const getPaginationButtons = () => {
    const buttons = []
    let startPage = Math.max(1, currentPage - 2)
    const endPage = Math.min(totalPages, startPage + 4)

    if (currentPage === totalPages - 1 || currentPage === totalPages) {
      startPage = Math.max(1, totalPages - 4)
    }

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button key={i} onClick={() => setCurrentPage(i)} className= {`mx-1 px-3 py-1 rounded-lg ${currentPage === i ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}>
          {i}
        </button>
      )
    }

    return buttons
  }

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)
  const currentPosts = filteredPosts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage)

  return (
    <div className="min-h-screen bg-[#051c2c]">
      <Header />
      <div className="mt-4">
        <img src="/imgs/temp.jpg" alt="임시 이미지" className="w-3/4 lg:w-1/2 rounded-lg mx-auto" />
      </div>
      <TabBar onSelectTab={handleSelectTab} />
      <div className="max-w-7xl mx-auto flex px-4 py-8 space-x-4">
        <div className="w-full md:w-3/4 lg:w-3/4 xl:w-3/4 flex flex-col">
          <main className="flex-1">
            <div className="grid gap-6">
              {currentPosts.map((post) => (
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

          <div className="flex justify-center mt-4">
            {getPaginationButtons()}
          </div>
        </div>
        {/* Desctop View */}
        <aside className="hidden md:flex lg:flex xl:flex w-1/4 bg-[#0A2540] p-4 rounded-lg">
              <h3 className="text-white text-lg font-bold md-4">추가 정보</h3>
        </aside>
      </div>
      {/* Mobile View */}
      <div className="flex md:hidden lg:hidden xl:hidden bg-[#0A2540] rounded-lg max-w-7xl mx-4 flex px-4 py-8 space-x-4">
        <h3 className="text-white text-lg font-bold md-4">추가 정보</h3>
      </div>
      <Footer />
    </div>
  )
}