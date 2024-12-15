"use client"

import { useState } from 'react'

export default function TabBar() {

    const tabs = ['전체', '공부', '게임', '코딩테스트', '디자인']
    const [selectedTab, setSelectedTab] = useState(tabs[0])

    return (
        <div className="flex justify-center mt-4 mx-auto">
            <div className="flex gap-6">
                {tabs.map((tab) => (
                    <button 
                        key={tab} 
                        onClick={() => setSelectedTab(tab)} 
                        className={`px-4 py-2 border-b-2 transition ${tab === selectedTab ? 'text-white border-white' : 'text-gray-300 hover:text-white border-transparent hover:border-white'}
                        text-xs xl:text-sm`}>
                        {tab}
                    </button>
                ))}
            </div>
        </div>
    )    
}