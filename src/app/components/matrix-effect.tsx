
"use client";
import React, { useEffect, useState } from "react";
const MATRIX_SYMBOLS = "abcdefghijklmnopqrstuwxyz";

export default function MatrixEffect() {
    const [columns, setColumns] = useState<number[]>([]);

    useEffect(() => {
        const columnCount = Math.floor(window.innerWidth / 20); // Adjust column width
        setColumns(new Array(columnCount).fill(0));
    }, []);

    return (
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 opacity-20 overflow-hidden">
            {columns.map((_, index) => (
                <Column key={index} delay={Math.random() * 5} />
            ))}
        </div>
    );
}

function Column({ delay }: { delay: number }) {
    const getRandomSymbol = () => {
        return MATRIX_SYMBOLS[Math.floor(Math.random() * MATRIX_SYMBOLS.length)];
    };

    return (
        <div
            className="absolute top-0 opacity-0 animate-fall text-green-500 font-matrix text-xl"
            style={{
                left: `${Math.random() * 100}%`, // Random horizontal position
                animationDelay: `${delay}s`
            }}>

            {
                new Array(30).fill("").map((_, idx) => (
                    <p key={idx}>{getRandomSymbol()}</p>
                ))}
        </div>
    );
}
