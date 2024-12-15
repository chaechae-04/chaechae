import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { NextResponse } from 'next/server'
import { PostData } from '@/types/post'

const postsDirectory = path.join(process.cwd(), 'posts')

async function getAllPosts(): Promise<PostData[]> {
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostData = await Promise.all(fileNames.map(async (fileName) => {
        const id = fileName.replace(/\.md$/, '')
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const matterResult = matter(fileContents)

        return {
            id,
            title: matterResult.data.title,
            date: matterResult.data.date,
            excerpt: matterResult.data.excerpt,
            content: matterResult.content,
            type: matterResult.data.type
        }
    }))

    return allPostData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function GET() {
    try {
        const posts = await getAllPosts()
        return NextResponse.json(posts)
    } catch (error) {
        console.error('Error fetching posts:', error)
        return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 })
    }
}

export async function POST() {
    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
}
