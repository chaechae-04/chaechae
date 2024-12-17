"use client"

import Link from 'next/link'

import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
            <nav className="mx-auto max-w-screen-xl px-4 sm:px-10 py-4 flex flex-col">
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

                {isMenuOpen && (
                    <div className="absolute top-16 left-0 w-full bg-gray-800 text-white p-4 flex flex-col sm:hidden transform transition-transform duration-300 origin-top animate-slideDown">
                        <Link href="/projects" className="block hover:text-gray-300 py-2">Projects</Link>
                        <Link href="/todo" className="block hover:text-gray-300 py-2">To-do</Link>
                        <Link href="/about" className="block hover:text-gray-300 py-2">About</Link>
                    </div>
                )}
            </nav>
    )
}