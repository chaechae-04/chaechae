import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

import Link from 'next/link'

export default function About() {
    return (
        <div className="min-h-screen bg-[#051c2c] max-w-screen">
            <Header />
            <div className="bg-[#051c2c] text-white flex flex-col items-center justify-center mx-auto md:my-[50px] lg:my-[100px] xl:my-[150px]">
                <p className="text-base xl:text-4xl font-bold mb-6">
                    안녕하세요, 저는 [chaechae-04] 입니다.
                    </p>
                <p className="text-sm xl:text-lg text-gray-400 font-bold mb-4">
                    백엔드, 게임 개발자로, 항상 새로운것을 알아가는것에 열정을 가지고 있습니다.
                </p>
                
                <div className="w-[90%] xl:w-[55%] bg-gray-600 h-px mt-2 mx-auto mt-5 mb-10" />

                {/* Desctop View */}
                <div className="hidden md:flex lg:flex xl:flex flex-col w-[50%] mx-auto space-y-10">
                    <div>
                        <p className="flex text-2xl font-bold mb-3 text-left">
                            PERSONAL HISTORY
                        </p>
                        <ul className="list-disc list-inside text-gray-300 text-xl">
                            <li>[국립한국교통대학교] - 컴퓨터 공학 전공 1학년 재학</li>
                        </ul>
                    </div>

                    <div>
                        <p className="flex text-2xl font-bold mb-3 text-left">
                            PROJECTS
                        </p>
                        <ul className="list-disc list-inside text-gray-300 text-xl">
                            <ul className="list-disc list-inside text-white text-lg font-bold">
                                Web Projects
                                <li> <Link href="https://github.com/chaechae-04/LiquorLounge" target="_blank" className="underline">LiquorLounge</Link></li>
                            </ul>
                            &nbsp;
                            <ul className="list-disc list-inside text-white text-lg font-bold">
                                Game Projects
                                <li>Empty !</li>
                            </ul>
                            &nbsp;
                        </ul>
                    </div>

                    <div>
                        <p className="flex text-2xl font-bold mb-3 text-left">
                            STACKS
                        </p>
                        <div className="flex flex-col mx-auto ml-5 space-y-2">
                            <div className="flex flex-row space-x-2">
                                <img src="https://img.shields.io/badge/Java-007396.svg?&style=for-the-badge&logo=openjdk&logoColor=white" className="rounded-2xl hover:opacity-80 transition-opacity duration-500" />
                                <img src="https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=csharp&logoColor=white" className="rounded-2xl hover:opacity-80 transition-opacity duration-500" />
                                <img src="https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=white" className="rounded-2xl hover:opacity-80 transition-opacity duration-500" />
                                <img src="https://img.shields.io/badge/swift-F54A2A?style=for-the-badge&logo=swift&logoColor=white" className="rounded-2xl hover:opacity-80 transition-opacity duration-500" />
                            </div>
                            <div className="flex flex-row space-x-2">
                                <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white" className="rounded-2xl hover:opacity-80 transition-opacity duration-50  hover:opacity-80 transition-opacity duration-5000"/>
                                <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white" className="rounded-2xl hover:opacity-80 transition-opacity duration-500  hover:opacity-80 transition-opacity duration-500" />
                                <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" className="rounded-2xl hover:opacity-80 transition-opacity duration-500  hover:opacity-80 transition-opacity duration-500" />
                                <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" className="rounded-2xl hover:opacity-80 transition-opacity duration-500  hover:opacity-80 transition-opacity duration-500" />
                            </div>
                            <div className="flex flex-row space-x-2">
                                <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black" className="rounded-2xl  hover:opacity-80 transition-opacity duration-500" />
                                <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white" className="rounded-2xl  hover:opacity-80 transition-opacity duration-500" />
                                <img src="https://img.shields.io/badge/springboot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white" className="rounded-2xl  hover:opacity-80 transition-opacity duration-500" />
                                <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white" className="rounded-2xl  hover:opacity-80 transition-opacity duration-500" />
                            </div>
                            <div className="flex flex-row space-x-2">
                                <img src="https://img.shields.io/badge/unity-%23000000.svg?style=for-the-badge&logo=unity&logoColor=white" className="rounded-2xl  hover:opacity-80 transition-opacity duration-500" />
                                <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white" className="rounded-2xl  hover:opacity-80 transition-opacity duration-500" />
                                <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white" className="rounded-2xl  hover:opacity-80 transition-opacity duration-500" />
                            </div>
                        </div>                         
                    </div>
                    
                    <div>
                        <p className="flex text-2xl font-bold mb-3 text-left">
                            CONTACT
                        </p>
                        <div className="flex flex-col mx-auto ml-5 space-y-2">
                            <div className="flex flex-row space-x-2">
                                <Link href="https://github.com/chaechae-04" className="flex text-gray-300 hover:text-white mx-1 space-x-2" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faGithub} className="w-6 h-6 mr-2" /> GitHub : chaechae-04
                                </Link>
                            </div>
                            <div className="flex flex-row space-x-2">
                                <Link href="https://instagram.com/lee.young_s" className="flex text-gray-300 hover:text-white mx-1 space-x-2" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faInstagram} className="w-6 h-6 mr-2" /> Instagram : lee.young_s
                                </Link>
                            </div>
                            <div className="flex flex-row space-x-2">
                                <Link href="mailto:leeys4903@naver.com" className="flex text-gray-300 hover:text-white mx-1 space-x-2">
                                    <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6 mr-2" /> Email : leeys4903@naver.com
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Mobile View */}
                <div className="flex md:hidden lg:hidden xl:hidden w-full flex-col mx-auto ml-10 space-y-8">
                    <div>
                        <p className="font-bold mb-2">PERSONAM HISTORY</p>
                        <div className="flex flex-col">
                            <p className="text-sm font-bold text-gray-300">[국립한국교통대학교] - 컴퓨터 공학 전공 1학년 재학</p>
                        </div>
                    </div>

                    <div>
                        <p className="font-bold mb-2">PROJECTS</p>
                        <div className="flex flex-col">
                            <div className="text-white font-bold">Web Projects</div>
                            <Link href="https://github.com/chaechae-04/LiquorLounge" target="_blank" className="text-sm font-bold text-gray-300 underline">LiquorLounge</Link>
                            &nbsp;
                            <div className="text-white font-bold">Game Projects</div>
                            <div className="text-sm font-bold text-gray-300">Empty !</div>
                        </div>
                    </div>

                    <div>
                        <p className="font-bold mb-2">STACKS</p>
                        <div className="flex space-x-2 flex-wrap space-y-2 w-[80%]">
                            <div />
                            <img src="https://img.shields.io/badge/Java-007396.svg?&style=for-the-badge&logo=openjdk&logoColor=white" className="rounded-2xl hover:opacity-80 transition-opacity duration-500" />
                            <img src="https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=csharp&logoColor=white" className="rounded-2xl hover:opacity-80 transition-opacity duration-500" />
                            <img src="https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=white" className="rounded-2xl hover:opacity-80 transition-opacity duration-500" />
                            <img src="https://img.shields.io/badge/swift-F54A2A?style=for-the-badge&logo=swift&logoColor=white" className="rounded-2xl hover:opacity-80 transition-opacity duration-500" />
                            <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white" className="rounded-2x hover:opacity-80 transition-opacity duration-500"/>
                            <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white" className="rounded-2xl hover:opacity-80 transition-opacity duration-500" />
                            <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" className="rounded-2xl hover:opacity-80 transition-opacity duration-500" />
                            <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" className="rounded-2xl hover:opacity-80 transition-opacity duration-500" />
                            <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black" className="rounded-2xl hover:opacity-80 transition-opacity duration-500" />
                            <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white" className="rounded-2xl hover:opacity-80 transition-opacity duration-500" />
                            <img src="https://img.shields.io/badge/springboot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white" className="rounded-2xl hover:opacity-80 transition-opacity duration-500" />
                            <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white" className="rounded-2xl hover:opacity-80 transition-opacity duration-500" />
                            <img src="https://img.shields.io/badge/unity-%23000000.svg?style=for-the-badge&logo=unity&logoColor=white" className="rounded-2xl hover:opacity-80 transition-opacity duration-500" />
                            <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white" className="rounded-2xl hover:opacity-80 transition-opacity duration-500" />
                            <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white" className="rounded-2xl hover:opacity-80 transition-opacity duration-500" />
                        </div>
                    </div>

                    <div>
                        <p className="font-bold mb-5">CONTACT</p>
                        <div className="flex flex-col">
                            <div className="flex flex-row space-x-2">
                                <Link href="https://github.com/chaechae-04" className="flex text-gray-300 hover:text-white mx-1 space-x-2" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faGithub} className="w-6 h-6 mr-2" /> GitHub : chaechae-04
                                </Link>
                            </div>
                            <div className="flex flex-row space-x-2">
                                <Link href="https://instagram.com/lee.young_s" className="flex text-gray-300 hover:text-white mx-1 space-x-2" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faInstagram} className="w-6 h-6 mr-2" /> Instagram : lee.young_s
                                </Link>
                            </div>
                            <div className="flex flex-row space-x-2">
                                <Link href="mailto:leeys4903@naver.com" className="flex text-gray-300 hover:text-white mx-1 space-x-2">
                                    <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6 mr-2" /> Email : leeys4903@naver.com
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}