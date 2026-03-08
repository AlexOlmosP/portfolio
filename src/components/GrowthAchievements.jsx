import { useState, useEffect } from "react";

const CARDS = [
    {
        id: 1,
        image: "/assets/achievement1.png",
        headline: "Global Category Leadership 🏆",
        caption: "Orchestrated the ascent of Dirt Bike Unchained to the #1 position in Racing Games worldwide, surpassing established competitors like Mario Kart Tour and Asphalt Legends.",
    },
    {
        id: 2,
        image: "/assets/achievement2.png",
        headline: "Award-Winning Strategy 🥇",
        caption: "Secured the 2021 Pocket Gamer 'Best Racing Game' award through a synergy of performance marketing and high-impact PR campaigns.",
    },
    {
        id: 3,
        image: "/assets/achievement3.png",
        headline: "High-Velocity Production ⚡",
        caption: "Architected a creative pipeline delivering 100+ high-performance assets weekly with a lean team of two designers.",
    }
];

export default function GrowthAchievements() {
    const [cards, setCards] = useState(CARDS);

    useEffect(() => {
        const interval = setInterval(() => {
            setCards(prev => {
                const next = [...prev];
                const last = next.pop();
                next.unshift(last);
                return next;
            });
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative w-full py-24 md:py-40 bg-[var(--color-charcoal)] px-4 md:px-16 overflow-hidden">
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                {/* Text / Context */}
                <div className="flex flex-col gap-6 order-1 md:order-1 relative z-20">
                    <h2 className="text-4xl md:text-6xl font-sans tracking-tighter text-white font-bold leading-tight">
                        GROWTH <br />
                        <span className="font-serif italic text-[var(--color-clay)]">ACHIEVEMENTS</span>
                    </h2>
                    <p className="text-base text-gray-400 font-mono max-w-[45ch] leading-relaxed">
                        Defining growth through data-driven decisions rather than intuition.
                    </p>

                    {/* Active Caption for Web (Hidden on very small mobile) */}
                    <div className="hidden md:block mt-8 p-6 glass-panel rounded-2xl border-l-[4px] border-l-[var(--color-neon)]">
                        <p className="font-mono text-[var(--color-neon)] text-sm tracking-widest relative z-10 w-fit">
                            [ {cards[0].headline} ]
                        </p>
                        <p className="text-white mt-3 font-medium font-sans text-xl">
                            {cards[0].caption}
                        </p>
                    </div>
                </div>

                {/* Shuffler UI */}
                <div className="relative h-[550px] md:h-[650px] w-full max-w-[400px] mx-auto order-2 md:order-2 perspective-[1000px]">
                    {cards.map((card, index) => {
                        // Calculate z-index, scale, and vertical offset based on position in array
                        // index 0 is at front
                        const isFront = index === 0;
                        const yOffset = index * 24; // Push deeper cards down slightly
                        const scale = 1 - (index * 0.05);
                        const zIndex = 30 - index;
                        const opacity = 1 - (index * 0.25);

                        return (
                            <div
                                key={card.id}
                                className="absolute top-0 left-0 w-full aspect-[9/16] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden glass-panel origin-top shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]"
                                style={{
                                    zIndex,
                                    transform: `translateY(${yOffset}px) scale(${scale})`,
                                    opacity,
                                    transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
                                }}
                            >
                                <img
                                    src={card.image}
                                    alt={card.caption}
                                    className="w-full h-full object-cover opacity-80"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                                {/* Mobile Text Overlay (Permanent on Mobile) */}
                                <div className="absolute bottom-0 left-0 w-full p-6 pb-20 md:p-8 flex flex-col justify-end h-full">
                                    <div className={`transform transition-all duration-500 delay-300 md:opacity-0 ${isFront ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                                        <p className="font-mono text-[var(--color-neon)] text-xs mb-2 leading-tight pr-4">{card.headline}</p>
                                        <p className="font-sans font-semibold text-white text-base md:text-lg leading-snug">
                                            {card.caption}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
