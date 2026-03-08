import { useState, useEffect } from "react";

const LOGS = [
    "[ SYNCING_MMP: [APPSFLYER / ADJUST] ... HOOKING_SDK_EVENTS ... DEPLOYING_MINIGAME_CONTENT_V2.1 ]",
    "[ LOAD_LTV_MODEL_PREDICTIVE ... WINDOW: PAY_BACK_ANALYSIS ... STATUS: PROFITABLE_SCALE_LOCKED ]",
    "[ FETCHING_COMMUNITY_FEEDBACK ... INJECTING_LIVE_OPS_EVENTS ... REDUCING_CHURN_THROUGH_ANALYTICS ]"
];

export default function EngineeringFeed() {
    const [logIndex, setLogIndex] = useState(0);
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentLog = LOGS[logIndex];
        const typeSpeed = isDeleting ? 30 : 50;

        const timeout = setTimeout(() => {
            if (!isDeleting && text === currentLog) {
                // Pause before deleting
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && text === "") {
                setIsDeleting(false);
                setLogIndex((logIndex + 1) % LOGS.length);
            } else {
                setText(currentLog.substring(0, text.length + (isDeleting ? -1 : 1)));
            }
        }, typeSpeed);

        return () => clearTimeout(timeout);
    }, [text, isDeleting, logIndex]);

    return (
        <section className="w-full py-6 md:py-8 border-y border-white/5 bg-[#050505] relative z-20">
            <div className="max-w-[1400px] mx-auto px-4 md:px-16 flex items-center justify-between">
                <div className="flex items-center gap-4 min-w-[150px]">
                    <div className="relative flex items-center justify-center w-3 h-3">
                        <span className="w-3 h-3 rounded-full bg-[var(--color-neon)] animate-ping absolute" />
                        <span className="w-2 h-2 rounded-full bg-[var(--color-neon)] relative z-10" />
                    </div>
                    <h3 className="text-xs md:text-sm font-sans font-bold text-white uppercase tracking-widest hidden md:block">
                        GROWTH ENGINEERING
                    </h3>
                </div>

                <div className="flex-1 ml-4 md:ml-8 overflow-hidden whitespace-nowrap mask-image-fade">
                    <p className="font-mono text-xs md:text-sm text-[var(--color-neon)] tracking-widest opacity-90">
                        {text}
                        <span className="animate-[pulse_1s_cubic-bezier(0.4,0,0.6,1)_infinite] ml-1 inline-block w-2 h-4 bg-[var(--color-neon)] align-middle"></span>
                    </p>
                </div>
            </div>
        </section>
    );
}
