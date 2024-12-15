// app/api/posts/[id]/route.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { NextResponse } from 'next/server';

const postsDirectory = path.join(process.cwd(), 'app', 'posts');

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const { id } = params; // params에서 id 추출
    const fullPath = path.join(postsDirectory, `${id}.md`);

    try {
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);
        
        return NextResponse.json({
            id: matterResult.data.id,
            title: matterResult.data.title,
            date: matterResult.data.date,
            excerpt: matterResult.data.excerpt,
            content: matterResult.content,
            type: matterResult.data.type,
        });
    } catch (error) {
        console.error(`Error fetching post with id ${id}:`, error);
        return NextResponse.json({ error: 'Failed to fetch post' }, { status: 500 });
    }
}
