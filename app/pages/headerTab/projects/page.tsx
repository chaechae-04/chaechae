import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

import Link from 'next/link'

export default function Projects() {
    return (
        <div className="min-h-screen bg-[#051c2c]">
            <Header />
            <div className="max-w-7xl mx-auto px-4 py-8 space-y-4">
                <article className="bg-[#0A2540] rounded-lg p-6 shadow-lg">
                    <Link href="https://github.com/chaechae-04/liquorlounge" target="_blank" rel="noopener noreferrer" className="font-bold text-base md:text-lg lg:text-xl xl:text-xl">Liquor Lounge</Link>
                </article>
                <article className="bg-[#0A2540] rounded-lg p-6 shadow-lg">
                    <Link href="/" target="_blank" rel="noopener noreferrer" className="font-bold text-base md:text-lg lg:text-xl xl:text-xl">Project-2</Link>
                </article>
            </div>
            <Footer />
        </div>
    )
}