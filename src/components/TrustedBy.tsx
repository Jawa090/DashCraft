import { motion } from "framer-motion";

const companies = [
    { name: "TechFlow", logo: "T" },
    { name: "Nebula", logo: "N" },
    { name: "Vertex", logo: "V" },
    { name: "Matrix", logo: "M" },
    { name: "Synergy", logo: "S" },
    { name: "Quantum", logo: "Q" },
    { name: "Pinnacle", logo: "P" },
    { name: "Horizon", logo: "H" },
];

const TrustedBy = () => {
    return (
        <section className="py-10 border-y border-white/5 bg-slate-900/30 backdrop-blur-sm relative overflow-hidden">
            <div className="container mx-auto px-6 mb-6 text-center">
                <p className="text-sm font-medium text-slate-500 uppercase tracking-widest">
                    Trusted by forward-thinking teams
                </p>
            </div>

            <div className="relative flex overflow-x-hidden">


                <div className="flex items-center gap-16 animate-marquee whitespace-nowrap">
                    {/* First copy */}
                    {companies.map((company, index) => (
                        <div key={index} className="flex items-center gap-3 opacity-40 hover:opacity-80 transition-opacity duration-300">
                            <div className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center font-bold text-white/50 text-sm">
                                {company.logo}
                            </div>
                            <span className="font-bold text-xl font-display text-white/50">{company.name}</span>
                        </div>
                    ))}
                    {/* Second copy for infinite loop */}
                    {companies.map((company, index) => (
                        <div key={`copy-${index}`} className="flex items-center gap-3 opacity-40 hover:opacity-80 transition-opacity duration-300">
                            <div className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center font-bold text-white/50 text-sm">
                                {company.logo}
                            </div>
                            <span className="font-bold text-xl font-display text-white/50">{company.name}</span>
                        </div>
                    ))}
                    {/* Third copy for safety */}
                    {companies.map((company, index) => (
                        <div key={`copy2-${index}`} className="flex items-center gap-3 opacity-40 hover:opacity-80 transition-opacity duration-300">
                            <div className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center font-bold text-white/50 text-sm">
                                {company.logo}
                            </div>
                            <span className="font-bold text-xl font-display text-white/50">{company.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustedBy;
