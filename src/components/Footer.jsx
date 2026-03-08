export default function Footer() {
    return (
        <footer className="w-full bg-[#050505] pt-12 relative z-20">
            <div className="w-full bg-[var(--color-charcoal)] rounded-t-[3rem] md:rounded-t-[5rem] px-8 md:px-16 py-20 md:py-32 flex flex-col items-center justify-center text-center shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.5)] border-t border-white/5 relative overflow-hidden">

                {/* Glow behind the status */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[var(--color-neon)] opacity-[0.03] blur-[100px] rounded-full pointer-events-none" />

                <div className="flex flex-col items-center gap-8 relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-4 px-6 py-3 rounded-full border border-[var(--color-neon)]/20 bg-[var(--color-neon)]/5 backdrop-blur-md">
                        <span className="relative flex h-4 w-4">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-neon)] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-4 w-4 bg-[var(--color-neon)] shadow-[0_0_15px_var(--color-neon)]"></span>
                        </span>
                        <span className="font-mono text-[var(--color-neon)] tracking-widest text-sm md:text-base font-semibold">
                            STATUS: READY_FOR_DEPLOYMENT
                        </span>
                    </div>

                    <h2 className="text-white text-5xl md:text-8xl font-sans font-bold tracking-tighter uppercase mt-8 flex flex-col items-center">
                        Acknowledge
                        <span className="font-serif italic text-[var(--color-moss)] font-normal text-4xl md:text-7xl -mt-2">
                            Signal.
                        </span>
                    </h2>

                    <div className="mt-16 flex items-center justify-between w-full max-w-sm pt-8 border-t border-white/10 text-slate-500 font-mono text-xs uppercase tracking-widest">
                        <span>Alex Olmos</span>
                        <span>Est. 2026 // TPL</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
