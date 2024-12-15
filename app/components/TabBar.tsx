"use client"

import { useState } from 'react'
import { TabBarProps } from '@/types/tabBar'

export default function TabBar({ onSelectTab }: TabBarProps) {

    const tabMap: { [key: string]: string | null } = {
        '전체': null,
        '공부': 'study',
        '게임': 'game',
        '코딩테스트': 'test',
        '디자인': 'design'
    }
    const [selectedTab, setSelectedTab] = useState('전체')

    const handleTabClick = (tab: string) => {
        setSelectedTab(tab)
        onSelectTab(tabMap[tab])
    }

    return (
        <div className="flex justify-center mt-4 mx-auto">
            <div className="flex gap-6">
                {Object.keys(tabMap).map((tab) => (
                    <button 
                        key={tab} 
                        onClick={() => handleTabClick(tab)} 
                        className={`px-4 py-2 border-b-2 transition ${tab === selectedTab ? 'text-white border-white' : 'text-gray-300 hover:text-white border-transparent hover:border-white'}
                        text-xxs xl:text-base font-bold`}>
                        {tab}
                    </button>
                ))}
            </div>
        </div>
    )    
}