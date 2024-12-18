import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import { NextResponse } from "next/server"
import { Props } from '@/types/post'

export async function GET(
    request: Request,
    { params }: Props
) {

    const { id } = await params

    try {
        const postsDirectory = path.join(process.cwd(), 'posts')
        const fullPath = path.join(postsDirectory, `${id}.md`)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const matterResult = matter(fileContents)

        return NextResponse.json({
            id: id,
            ...matterResult.data,
            content: matterResult.content
        })
    } catch (error) {
        return NextResponse.json(
            { error: 'Post not found' },
            { status: 404 } 
        )
    }
}