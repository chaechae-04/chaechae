import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

export default function About() {
    return (
        <div className="min-h-screen bg-[#051c2c]">
            <Header />
            <div className="text-white flex flex-col items-center justify-center p-8">
                <h1 className="text-3xl font-bold mb-4">About</h1>
                <p className="text-lg text-gray-400">
                    자세한 내용
                </p>
            </div>
            <Footer />
        </div>
    )
}