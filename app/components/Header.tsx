"use client"

import Link from 'next/link'

import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isMenuVisible, setIsMenuVisible] = useState(false)

    const toggleMenu = async () => {
        if (isMenuOpen) {
            setIsMenuVisible(false)
            setTimeout(() => setIsMenuOpen(false), 500)
        } else {
            setIsMenuOpen(true)
            setTimeout(() => { setIsMenuVisible(true) }, 50)
        }
    }

    return (
            <nav className="mx-auto max-w-screen-xl px-4 sm:px-10 py-4 flex flex-col relative">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex flex-row">
                        <img src="/imgs/chaechae.jpg" alt="채채 사진" className="rounded-full aspect-[1/1] w-[14%] md:w-[7%] lg:w-[7%] xl:w-[7%]" />
                        <p className="ml-5 text-white text-xl sm:text-2xl font-bold my-auto">채채의 개발로그</p>
                    </Link>
                    <div className="hidden sm:flex gap-4 text-gray-300 pr-10 flex-row">
                        <Link href="/projects" className="hover:text-white px-2 text-sm sm:text-base w-[50%]">Projects</Link>
                        <Link href="/todo" className="hover:text-white px-2 text-sm sm:text-base w-[50%]">To-do</Link>
                        <Link href="/about" className="hover:text-white px-2 text-sm sm:text-base w-[15%]">About</Link>
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
                        <Link href="/projects" className="block hover:text-gray-300 py-2 font-bold">Projects</Link>
                        <Link href="/todo" className="block hover:text-gray-300 py-2 font-bold">To-do</Link>
                        <Link href="/about" className="block hover:text-gray-300 py-2 font-bold">About</Link>
                    </div>
                )}
            </nav>
    )
}