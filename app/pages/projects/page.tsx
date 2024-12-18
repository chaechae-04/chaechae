import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

export default function Projects() {
    return (
        <div className="min-h-screen bg-[#051c2c] max-w-full overflow-hidden">
            <Header />
            <div className="bg-[#051c2c] text-white flex flex-col items-center justify-center mx-auto md:my-[50px] lg:my-[100px] xl:my-[150px]">
                Project Page
            </div>
            <Footer />
        </div>
    )
}