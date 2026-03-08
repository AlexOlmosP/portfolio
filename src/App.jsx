import HeroSection from "./components/HeroSection";
import GrowthAchievements from "./components/GrowthAchievements";
import EngineeringFeed from "./components/EngineeringFeed";
import MonetizationProtocol from "./components/MonetizationProtocol";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import { LinkedinLogo, EnvelopeSimple, FileArrowDown } from "@phosphor-icons/react";

function FixedNav() {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex flex-wrap justify-center items-center gap-2 md:gap-4 text-xs md:text-sm font-mono tracking-widest uppercase opacity-90 p-3 md:p-4 rounded-full glass-panel border border-white/10 shadow-2xl backdrop-blur-md bg-black/40 w-[max-content] max-w-[90vw]">
      <a
        href="https://www.linkedin.com/in/alex-olmos-pardo-30666794/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 md:gap-2 px-3 md:px-4 py-2 rounded-full border border-[var(--color-clay)]/30 bg-[var(--color-clay)]/10 text-[var(--color-clay)] hover:bg-[var(--color-clay)]/20 transition-colors whitespace-nowrap"
      >
        <LinkedinLogo size={18} weight="fill" className="shrink-0" />
        <span className="hidden sm:inline">LinkedIn</span>
      </a>
      <a
        href="mailto:alejandroop123@gmail.com"
        className="flex items-center gap-1 md:gap-2 px-3 md:px-4 py-2 rounded-full border border-slate-500/30 bg-slate-500/10 text-slate-300 hover:bg-slate-500/20 transition-colors whitespace-nowrap"
      >
        <EnvelopeSimple size={18} className="shrink-0" />
        <span className="hidden sm:inline">Email</span>
      </a>
      <a
        href="/assets/ALEJANDRO OLMOS PARDO CV.pdf"
        download="ALEJANDRO OLMOS PARDO CV.pdf"
        className="flex items-center gap-1 md:gap-2 px-3 md:px-4 py-2 rounded-full border border-slate-500/30 bg-slate-500/10 text-slate-300 hover:bg-slate-500/20 transition-colors"
      >
        <FileArrowDown size={18} className="shrink-0" />
        <span className="hidden sm:inline">Download CV</span>
        <span className="sm:hidden">CV</span>
      </a>
    </div>
  );
}

export default function App() {
  return (
    <main className="relative bg-[var(--color-charcoal)] min-h-[100dvh]">
      <FixedNav />
      <HeroSection />
      {/* 
        This wrapper holds the rest of the content under the hero.
        Since Hero is fixed on top, this container starts immediately, overlapping Hero via standard scroll.
      */}
      <div className="relative z-20">
        <GrowthAchievements />
        <EngineeringFeed />
        <MonetizationProtocol />
        <Experience />
        <Footer />
      </div>
    </main>
  );
}
