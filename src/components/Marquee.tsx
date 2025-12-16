import { motion } from "framer-motion";

const logos = [
    { name: "Acme Inc", color: "bg-blue-500" },
    { name: "Globex", color: "bg-red-500" },
    { name: "Soylent", color: "bg-green-500" },
    { name: "Initech", color: "bg-violet-500" },
    { name: "Umbrella", color: "bg-purple-500" },
    { name: "Stark", color: "bg-cyan-500" },
    { name: "Wayne", color: "bg-slate-800" },
    { name: "Cyberdyne", color: "bg-indigo-500" },
];

const Marquee = () => {
    return (
        <div className="relative flex overflow-x-hidden border-t border-border/50 bg-white/50 py-10">
            <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-r from-background via-transparent to-background"></div>

            <div className="flex items-center gap-16 animate-marquee whitespace-nowrap">
                {/* First copy */}
                {logos.map((logo, index) => (
                    <div key={index} className="flex items-center gap-3 opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
                        <div className={`w-8 h-8 rounded-lg ${logo.color} shadow-sm`}></div>
                        <span className="font-bold text-xl font-sans text-foreground">{logo.name}</span>
                    </div>
                ))}
                {/* Second copy for infinite loop */}
                {logos.map((logo, index) => (
                    <div key={`copy-${index}`} className="flex items-center gap-3 opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
                        <div className={`w-8 h-8 rounded-lg ${logo.color} shadow-sm`}></div>
                        <span className="font-bold text-xl font-sans text-foreground">{logo.name}</span>
                    </div>
                ))}
                {/* Third copy for safety on large screens */}
                {logos.map((logo, index) => (
                    <div key={`copy2-${index}`} className="flex items-center gap-3 opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
                        <div className={`w-8 h-8 rounded-lg ${logo.color} shadow-sm`}></div>
                        <span className="font-bold text-xl font-sans text-foreground">{logo.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Marquee;
