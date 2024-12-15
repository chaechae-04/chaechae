import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

export default function About() {
    return (
        <div className="min-h-screen bg-[#051c2c]">
            <Header />
            <div className="bg-[#051c2c] text-white flex flex-col items-center justify-center mx-auto md:mt-[50px] lg:mt-[100px] xl:mt-[150px]">
                <p className="text-xxs xl:text-4xl font-bold mb-6">
                    안녕하세요, 저는 [chaechae] 입니다.
                    </p>
                <p className="text-xxxs xl:text-lg text-gray-400 font-bold mb-4">
                    백엔드, 게임 개발자로, 항상 새로운것을 알아가는것에 열정을 가지고 있습니다.
                </p>
                
                <div style={{ width: '55% '}} className="bg-gray-600 h-px mt-2 mx-auto mt-5 mb-10" />

                <div className="flex flex-col w-[50%] mx-auto">
                    <p className="flex text-xxxs xl:text-2xl font-bold mb-3 text-left">
                        경력
                    </p>
                    <ul className="list-disc list-inside text-gray-300 text-xxxs xl:text-xl">
                        <li>[국립한국교통대학교] - 컴퓨터 공학 전공</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    )
}