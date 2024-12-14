import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { PostData } from '../types/post'


const postsDirectory = path.join(process.cwd(), 'posts')

export async function getPostData(id: string) {
    const fullPath = path.join(postsDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const matterResult = matter(fileContents)

    return {
        id,
        content: matterResult.content,
        title: matterResult.data.title,
        date: matterResult.data.date,
        excerpt: matterResult.data.excerpt
    }
}

export async function getAllPosts(): Promise<PostData[]> {
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostData = await Promise.all(fileNames.map(async fileName => {
        const id = fileName.replace(/\.md$/,'')
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const matterResult = matter(fileContents)
        
        return {
            id,
            title: matterResult.data.title,
            date: matterResult.data.date,
            excerpt: matterResult.data.excerpt,
            content: matterResult.content
        }
    }))

    return allPostData.sort((a, b) => (a.date < b.date ? 1 : -1))
}