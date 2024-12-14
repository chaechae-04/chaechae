export default function Header() {
    return (
        <header className="min-h-screen bg-[#051c2c]">
            <nav className="max-w-7xl max-auto px-4 py-4 flex items-center justify-between border-b border-white">
                <div className="ml-10 text-white text-2xl font-bold">채채의 개발로그</div>
                <div className="flex gap-4 text-gray-300">
                    <a href="/posts" className="hover:text-white">글</a>
                    <a href="/tags" className="hover:text-white">태그</a>
                    <a href="/about" className="hover:text-white">소개</a>
                </div>
            </nav>
        </header>
    )
}