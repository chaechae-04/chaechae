import Link from 'next/link'

export default function Header() {
    return (
            <nav className="mx-auto max-auto px-10 py-4 flex flex-col">
                <div className="flex items-center justify-between">
                    <div className="ml-10 text-white text-2xl font-bold">채채의 개발로그</div>
                    <div className="flex gap-4 text-gray-300 pr-10">
                        <Link href="/posts" className="hover:text-white px-2">글</Link>
                        <Link href="/tags" className="hover:text-white px-2">태그</Link>
                        <Link href="/about" className="hover:text-white px-2">소개</Link>
                    </div>
                </div>
                <div style={{ width: '100% '}} className="bg-gray-400 h-px mt-2 mx-auto mt-5" />
            </nav>
    )
}