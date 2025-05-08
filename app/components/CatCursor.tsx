"use client"

import { useEffect, useState } from 'react' 
import { Position } from '@/types/catCursor' 

const CatCursor: React.FC = () => {
    const [mousePosition, setMousePosition] = useState<Position>({ x: 0, y: 0 }) 
    const [catPosition, setCatPosition] = useState<Position>({ x: 0, y: 0 }) 

    const speed = 5.0 

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const newMousePosition = { x: event.pageX, y: event.pageY } 
            setMousePosition(newMousePosition) 

            setCatPosition((prev) => {
                const dx = newMousePosition.x - prev.x 
                const dy = newMousePosition.y - prev.y 
                const distance = Math.sqrt(dx * dx + dy * dy) 

                const moveX = (dx / distance) 
                const moveY = (dy / distance)

                if (distance > 0) {
                    if (distance > speed) {
                        return {
                            x: prev.x + moveX,
                            y: prev.y + moveY,
                        } 
                    } else {
                        return { x: newMousePosition.x, y: newMousePosition.y } 
                    }
                }

                return prev 
            }) 
        } 

        window.addEventListener('mousemove', handleMouseMove) 

        const interval = setInterval(() => {
            setCatPosition((prev: Position) => {
                const dx = mousePosition.x - prev.x 
                const dy = mousePosition.y - prev.y 
                const distance = Math.sqrt(dx * dx + dy * dy) 

                const moveX = (dx / distance) * speed 
                const moveY = (dy / distance) * speed 

                if (distance > 0) {
                    if (distance > speed) {
                        return {
                            x: prev.x + moveX,
                            y: prev.y + moveY,
                        } 
                    } else {
                        return { x: mousePosition.x, y: mousePosition.y } 
                    }
                }

                return prev 
            }) 
        }, 1000 / 60)  

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)  
            clearInterval(interval)  
        } 
    }, [mousePosition])  

    return (
        <div
            className="absolute w-12 h-12 bg-cover pointer-events-none rounded-full"
            style={{
                backgroundImage: 'url(/imgs/chaechae.jpg)', 
                left: catPosition.x,
                top: catPosition.y,
                transform: 'translate(-50%, -50%)',
            }}
        />
    ) 
}

export default CatCursor 
