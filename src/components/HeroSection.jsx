import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
    const heroRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(heroRef.current, {
                yPercent: -100,
                ease: "none",
                scrollTrigger: {
                    trigger: document.body,
                    start: "top top",
                    end: () => "+=" + window.innerHeight,
                    scrub: true,
                }
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <>
            {/* Spacer to allow scrolling while the hero is fixed on top */}
            <div className="h-[100dvh] w-full" />

            <section
                ref={heroRef}
                className="fixed top-0 left-0 w-full h-[100dvh] z-40 bg-[var(--color-charcoal)] overflow-hidden"
            >
                <div className="absolute inset-0">
                    <img
                        src="/assets/hero-bg.jpg"
                        alt="Hero Background"
                        className="w-full h-full object-cover opacity-50"
                    />
                    {/* Heavy Charcoal-to-Transparent gradient overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-charcoal)] via-[var(--color-charcoal)]/80 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-charcoal)] via-[var(--color-charcoal)]/60 to-transparent" />
                </div>

                <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-16 max-w-[1400px] mx-auto pb-24">
                    <div className="flex flex-col gap-0 md:gap-2 relative">
                        <h1 className="flex flex-col w-full">
                            <span className="text-[clamp(1.5rem,6.2vw,7.5rem)] whitespace-nowrap font-sans font-bold tracking-tighter text-white uppercase leading-none">
                                ALEJANDRO OLMOS PARDO
                            </span>
                            <span className="text-[clamp(1.25rem,5.5vw,6.5rem)] whitespace-nowrap mt-0 md:-mt-2 ml-1 md:ml-4 font-serif italic text-[var(--color-moss)] opacity-90 leading-tight">
                                MOBILE GROWTH
                            </span>
                        </h1>
                    </div>
                </div>
            </section>
        </>
    );
}
