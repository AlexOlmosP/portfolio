import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
    const sectionRef = useRef(null);
    const gridRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo(gridRef.current.children,
                { y: 50, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 70%",
                    }
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="w-full h-[100dvh] bg-[#050505] px-4 md:px-16 overflow-hidden border-t border-white/5 relative z-10 flex items-center justify-center">
            <div className="max-w-[1400px] w-full mx-auto flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-center">
                {/* Title Section */}
                <div className="md:w-1/3 flex-shrink-0 mb-8 md:mb-0">
                    <h2 className="text-4xl md:text-6xl font-sans tracking-tighter text-white font-bold leading-tight">
                        WORK <br />
                        <span className="font-serif italic text-[var(--color-moss)]">EXPERIENCE.</span>
                    </h2>
                </div>

                {/* Experience Grid */}
                <div ref={gridRef} className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 border-l border-white/10 pl-6 md:pl-10">

                    {/* Column 1: Red Bull Media House */}
                    <div className="flex flex-col gap-3 relative">
                        <span className="absolute -left-[30px] md:-left-[45px] top-2 w-[8px] h-[8px] rounded-full bg-[var(--color-neon)]" />
                        <span className="font-mono text-xs tracking-widest text-[var(--color-neon)]">[ 2020 — PRESENT ]</span>
                        <h3 className="font-serif italic text-2xl text-[var(--color-clay)]">Red Bull Media House</h3>
                        <h4 className="font-sans font-bold text-lg md:text-xl text-white uppercase tracking-tighter">SENIOR UA MANAGER</h4>
                        <p className="font-mono text-xs md:text-sm text-slate-400 leading-relaxed mt-2 max-w-[30ch]">
                            Architecting global growth loops; 100% team retention over 6 years.
                        </p>
                    </div>

                    {/* Column 2: WeQ */}
                    <div className="flex flex-col gap-3 relative">
                        <span className="absolute -left-[30px] md:-left-[45px] top-2 w-[8px] h-[8px] rounded-full bg-slate-700" />
                        <span className="font-mono text-xs tracking-widest text-slate-500">[ 2017 — 2019 ]</span>
                        <h3 className="font-serif italic text-2xl text-slate-300">WeQ (Startup)</h3>
                        <h4 className="font-sans font-bold text-lg md:text-xl text-white uppercase tracking-tighter opacity-80">UA MANAGER</h4>
                        <p className="font-mono text-xs md:text-sm text-slate-500 leading-relaxed mt-2 max-w-[30ch]">
                            Led pivot to hyper-casual; managed budget forecasting and mobile-team education.
                        </p>
                    </div>

                    {/* Column 3: From the Bench */}
                    <div className="flex flex-col gap-3 relative">
                        <span className="absolute -left-[30px] md:-left-[45px] top-2 w-[8px] h-[8px] rounded-full bg-slate-800" />
                        <span className="font-mono text-xs tracking-widest text-slate-600">[ 2013 — 2017 ]</span>
                        <h3 className="font-serif italic text-2xl text-slate-400">From the Bench</h3>
                        <h4 className="font-sans font-bold text-lg md:text-xl text-white uppercase tracking-tighter opacity-60">UA & ASO SPECIALIST</h4>
                        <p className="font-mono text-xs md:text-sm text-slate-600 leading-relaxed mt-2 max-w-[30ch]">
                            Pioneered ASO department; grew marketing team from 1 to 4.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
