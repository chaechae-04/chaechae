"use client"

import Link from 'next/link'
import Image from 'next/image'
import CatCursor from '@/app/components/CatCursor'

import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isMenuVisible, setIsMenuVisible] = useState(false)
    const [isCatVisible, setIsCatVisible] = useState(false)

    const toggleMenu = async () => {
        if (isMenuOpen) {
            setIsMenuVisible(false)
            setTimeout(() => setIsMenuOpen(false), 500)
        } else {
            setIsMenuOpen(true)
            setTimeout(() => { setIsMenuVisible(true) }, 50)
        }
    }

    const catToggleButtonHandler = async () => {
        setIsCatVisible(!isCatVisible)
    }

    const Cat = () => {
        if (isCatVisible) {
            return (
                <div className="flex">
                    <CatCursor />
                </div>
            )
        } else {
            return (
                <div className="hidden">
                    <CatCursor />
                </div>
            )   
        }
    }

    return (
        <main>
            <nav className="mx-auto max-w-screen-xl px-4 sm:px-10 py-4 flex flex-col relative">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex flex-row">
                        <Image src="/imgs/chaechae.jpg" alt="채채 사진" width="1920" height="800" className="rounded-full aspect-[1/1] w-[14%] md:w-[7%] lg:w-[7%] xl:w-[7%]" />
                        <div className="flex-row my-auto">
                            <div className="flex ml-5 text-white text-xl sm:text-2xl">
                                chae
                                <div className="flex ml-1 text-gray-300 text-xl sm:text-2xl">
                                    tech
                                </div>
                            </div>
                        </div>
                    </Link>
                    <div className="hidden sm:flex gap-4 text-gray-300 pr-10 flex-row">
                        <Link href="/pages/headerTab/projects" className="hover:text-white px-2 text-sm sm:text-base w-[50%] font-bold">Projects</Link>
                        <Link href="/pages/headerTab/todo" className="hover:text-white px-2 text-sm sm:text-base w-[50%] font-bold">To-do</Link>
                        <Link href="/pages/headerTab/about" className="mr-4 hover:text-white px-2 text-sm sm:text-base w-[15%] font-bold">About</Link>

                        {/* Cat Visible Toggle Button */}
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" onClick={catToggleButtonHandler} className="sr-only peer" />
                            <div className="w-9 h-5 bg-gray-200 hover:bg-gray-300 peer-focus:outline-0 peer-focus:ring-transparent rounded-full peer transition-all ease-in-out duration-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-indigo-600 hover:peer-checked:bg-indigo-700"></div>
                        </label>

                    </div>
                    <button onClick={toggleMenu} className="flex sm:hidden text-gray-300">
                        <FontAwesomeIcon icon={faBars} className="text-white h-6 w-6" />
                    </button>
                </div>
                <div style={{ width: '100% '}} className="bg-gray-400 h-px mt-2 mx-auto mt-5" />

                {(isMenuOpen) && (
                    <div className={`absolute bottom-4 left-0 translate-y-full w-full bg-gray-800 text-white p-4 flex flex-col sm:hidden 
                                    transition-bg-opacity transition-opacity duration-500
                                    ${isMenuVisible ? 'bg-opacity-70 opacity-100' : 'bg-opacity-0 opacity-0' }`}>
                        <Link href="/pages/headerTab/projects" className="block hover:text-gray-300 py-2 font-bold">Projects</Link>
                        <Link href="/pages/headerTab/todo" className="block hover:text-gray-300 py-2 font-bold">To-do</Link>
                        <Link href="/pages/headerTab/about" className="block hover:text-gray-300 py-2 font-bold">About</Link>
                    </div>
                )}
            </nav>
            <Cat />
        </main>
    )
}