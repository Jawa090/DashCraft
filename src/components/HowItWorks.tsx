import { ArrowRight, Check } from "lucide-react";
import FadeIn from "./FadeIn";

const steps = [
    {
        number: "01",
        title: "Select Template",
        description: "Choose from our library of 50+ premium, production-ready dashboard templates.",
    },
    {
        number: "02",
        title: "Customize & Config",
        description: "Tweaking colors, logos, and data sources takes minutes via our simple config files.",
    },
    {
        number: "03",
        title: "Deploy to Prod",
        description: "One-click deployment to Vercel, Netlify, or your private cloud infrastructure.",
    },
    {
        number: "04",
        title: "Scale Indefinitely",
        description: "Built on a rock-solid React foundation that handles millions of rows of data.",
    },
];

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="py-24 px-6 bg-slate-900 text-white relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-800/50 to-transparent opacity-50"></div>

            <div className="container mx-auto max-w-6xl relative z-10">
                <FadeIn>
                    <div className="text-center mb-20">
                        <h2 className="font-sans font-extrabold text-4xl md:text-5xl mb-6 tracking-tight">
                            From zero to dashboard <br /> in record time.
                        </h2>
                        <p className="text-slate-400 text-xl max-w-2xl mx-auto font-light leading-relaxed">
                            A streamlined 4-step process designed for modern dev teams.
                        </p>
                    </div>
                </FadeIn>

                <div className="grid md:grid-cols-4 gap-8 relative">
                    {/* Continuous Line Background (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-slate-800 -z-10"></div>

                    {steps.map((step, index) => (
                        <FadeIn key={index} delay={index * 0.1} className="relative group">
                            <div className="flex flex-col items-center text-center">
                                <div className="w-24 h-24 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center mb-8 shadow-xl relative group-hover:-translate-y-2 transition-transform duration-500 z-10">
                                    <div className="absolute inset-0 bg-primary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <span className="font-bold text-3xl text-primary font-serif">
                                        {step.number}
                                    </span>
                                    {index < steps.length - 1 && (
                                        <div className="hidden md:block absolute top-1/2 -right-[calc(50%+1rem)] w-full h-0.5 bg-primary/20 z-0"></div>
                                    )}
                                </div>

                                <h3 className="font-bold text-xl mb-3 text-white group-hover:text-primary transition-colors">{step.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed px-2">
                                    {step.description}
                                </p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
