import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CARDS = [
    {
        id: 1,
        image: "/assets/monetization1.jpeg",
        title: "ARPDAU ACCELERATION",
        description: "Orchestrated a comprehensive overhaul of in-app purchasing strategy, driving a >100% increase in ARPDAU by implementing granular user segmentation, precision price elasticity modeling, and dynamic offer design."
    },
    {
        id: 2,
        image: "/assets/monetization2.jpeg",
        title: "SUBSCRIPTION OPTIMIZATION",
        description: "Designed and deployed high-converting subscription architectures, focusing on schematic paywall optimization and the clear visualization of content value propositions to maximize user conversion and LTV."
    },
    {
        id: 3,
        image: "/assets/monetization3.jpeg",
        title: "AD MEDIATION SCALING",
        description: "Scaled ad revenue operations through programmatic precision, engineering optimized ad placements and architecting advanced waterfall mediation setups to maximize eCPMs and fill rates."
    }
];

export default function MonetizationProtocol() {
    const containerRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        let ctx = gsap.context(() => {
            cardsRef.current.forEach((card, i) => {
                if (i === CARDS.length - 1) return;

                gsap.to(card, {
                    scale: 0.9,
                    opacity: 0.5,
                    filter: "blur(20px)",
                    ease: "none",
                    scrollTrigger: {
                        trigger: card,
                        start: "top top",
                        end: "bottom top",
                        pin: true,
                        pinSpacing: false,
                        scrub: true,
                    }
                });
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative bg-[var(--color-charcoal)] w-full pb-32 z-10">
            <div className="pt-32 pb-16 px-4 md:px-16 max-w-[1400px] mx-auto text-center sticky top-0 -z-10">
                <h2 className="text-5xl md:text-7xl font-sans tracking-tighter text-white font-bold leading-tight uppercase">
                    MONETIZATION <br />
                    <span className="font-serif italic text-[var(--color-moss)] opacity-80">ARCHITECT.</span>
                </h2>
            </div>

            {CARDS.map((item, i) => (
                <div
                    key={item.id}
                    ref={el => cardsRef.current[i] = el}
                    className="relative h-[100dvh] flex items-center justify-center p-4 md:p-12 w-full origin-top"
                    style={{ zIndex: i + 10 }}
                >
                    <div className="w-full max-w-[1000px] h-full max-h-[800px] md:h-auto aspect-[4/5] md:aspect-[16/9] rounded-[2rem] md:rounded-[3rem] overflow-hidden glass-panel relative shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] flex flex-col md:flex-row bg-[#050505]/90 border-t border-white/5">
                        <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center relative z-20">
                            <span className="font-mono text-[var(--color-clay)] text-sm tracking-widest mb-4 uppercase">
                                Phase 0{i + 1}
                            </span>
                            <h3 className="text-3xl md:text-5xl font-sans font-bold text-white mb-6 uppercase tracking-tighter leading-none">
                                {item.title}
                            </h3>
                            <p className="text-gray-400 font-mono text-sm leading-relaxed md:max-w-[40ch]">
                                {item.description}
                            </p>
                        </div>

                        <div className="w-full md:w-1/2 h-full relative border-t md:border-t-0 md:border-l border-white/5">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover grayscale opacity-60 mix-blend-screen"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/90 via-transparent to-transparent md:block hidden" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-transparent to-transparent block md:hidden" />
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}
