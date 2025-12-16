import { Shield, Globe, Lock, Server, CheckCircle2, Zap } from "lucide-react";
import FadeIn from "./FadeIn";

const features = [
    {
        icon: Shield,
        title: "SOC2 Type II Ready",
        description: "Enterprise-grade security controls baked into every template. Compliant by default.",
        color: "text-emerald-400",
        bgColor: "bg-emerald-400/10"
    },
    {
        icon: Globe,
        title: "Global Edge Network",
        description: "Deploy to 35+ regions automatically. 99.99% uptime SLA guaranteed.",
        color: "text-blue-400",
        bgColor: "bg-blue-400/10"
    },
    {
        icon: Lock,
        title: "SSO & SAML",
        description: "Built-in support for Okta, Auth0, and Google Workspace authentication.",
        color: "text-violet-400",
        bgColor: "bg-violet-400/10"
    },
    {
        icon: Server,
        title: "Dedicated Infrastructure",
        description: "Optional isolated databases and computation for high-compliance workloads.",
        color: "text-amber-400",
        bgColor: "bg-amber-400/10"
    }
];

const EnterpriseScale = () => {
    return (
        <section className="py-24 px-6 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/5 rounded-full blur-3xl -z-10"></div>

            <div className="container mx-auto max-w-6xl">
                <FadeIn>
                    <div className="mb-16">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                            <div className="max-w-2xl">
                                <h2 className="font-sans font-extrabold text-4xl md:text-5xl mb-6 tracking-tight text-white">
                                    Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Enterprise Scale.</span>
                                </h2>
                                <p className="text-slate-400 text-xl leading-relaxed font-light">
                                    Security, compliance, and performance aren't afterthoughts. They're the foundation.
                                </p>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 font-medium text-sm whitespace-nowrap">
                                <Zap className="w-4 h-4 fill-blue-500" />
                                <span>Powering 30+ Fortune 500s</span>
                            </div>
                        </div>
                    </div>
                </FadeIn>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <FadeIn key={index} delay={index * 0.1}>
                            <div className="glass-card p-6 rounded-2xl h-full hover:bg-white/5 transition-colors border border-white/5 group">
                                <div className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </FadeIn>
                    ))}
                </div>

                <FadeIn delay={0.4}>
                    <div className="mt-6 flex flex-wrap gap-x-8 gap-y-4 justify-center items-center py-6 border-t border-white/5">
                        {["HIPAA Compliant", "GDPR Ready", "ISO 27001", "CCPA"].map((cert, i) => (
                            <div key={i} className="flex items-center gap-2 text-slate-500 text-sm">
                                <CheckCircle2 className="w-4 h-4 text-slate-600" />
                                {cert}
                            </div>
                        ))}
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};

export default EnterpriseScale;
