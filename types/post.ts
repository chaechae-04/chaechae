export interface PostData {
    id: string
    title: string
    type: string
    date: string
    excerpt: string
    content: string
}

export interface PostParams {
    params: {
        id: string;
    }
}