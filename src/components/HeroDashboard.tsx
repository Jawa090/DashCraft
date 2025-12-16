import { useState, useEffect } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from "recharts";
import { LayoutDashboard, Users, BarChart3, CreditCard, Settings, Search, Bell, TrendingUp, TrendingDown, ArrowUpRight, MoreHorizontal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Mock Data
const revenueData = [
    { name: "Mon", value: 4000 },
    { name: "Tue", value: 3000 },
    { name: "Wed", value: 5500 },
    { name: "Thu", value: 4500 },
    { name: "Fri", value: 8000 },
    { name: "Sat", value: 6500 },
    { name: "Sun", value: 9000 },
];

const activityData = [
    { name: "00:00", value: 120 },
    { name: "04:00", value: 80 },
    { name: "08:00", value: 450 },
    { name: "12:00", value: 980 },
    { name: "16:00", value: 850 },
    { name: "20:00", value: 340 },
];

const sourceData = [
    { name: "Direct", value: 400, color: "#3b82f6" }, // Blue
    { name: "Social", value: 300, color: "#6366f1" }, // Indigo
    { name: "Organic", value: 300, color: "#06b6d4" }, // Cyan
];

const HeroDashboard = () => {
    const [activeTab, setActiveTab] = useState("overview");
    const [isLoading, setIsLoading] = useState(true);
    const [stats, setStats] = useState({
        revenue: 42593,
        users: 8549,
        growth: 24.8
    });

    // Simulate initial loading
    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    // Simulate live data updates
    useEffect(() => {
        const interval = setInterval(() => {
            setStats(prev => ({
                revenue: prev.revenue + Math.floor(Math.random() * 100) - 30,
                users: prev.users + Math.floor(Math.random() * 10) - 2,
                growth: prev.growth
            }));
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const TabButton = ({ id, icon: Icon, label }: { id: string, icon: any, label: string }) => (
        <button
            onClick={() => setActiveTab(id)}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ${activeTab === id
                    ? "bg-white/10 text-white font-medium shadow-sm border border-white/5"
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                }`}
        >
            <Icon className="w-4 h-4" />
            {label}
        </button>
    );

    return (
        <div className="relative bg-slate-900 rounded-2xl border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col h-[600px] w-full max-w-6xl mx-auto">
            {/* Browser Header */}
            <div className="bg-slate-800/50 backdrop-blur border-b border-white/5 px-4 py-3 flex items-center gap-4 sticky top-0 z-20 shrink-0">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400/20 border border-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400/20 border border-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400/20 border border-green-500/50"></div>
                </div>
                <div className="flex-1">
                    <div className="bg-black/20 border border-white/5 rounded-md h-8 max-w-md mx-auto flex items-center justify-center text-xs text-slate-500 shadow-inner font-mono">
                        <span className="text-green-500 mr-2">🔒</span> dashcraft.io/app/{activeTab}
                    </div>
                </div>
            </div>

            <div className="flex flex-1 overflow-hidden">
                {/* Sidebar */}
                <div className="w-64 bg-slate-900 border-r border-white/5 p-4 hidden md:flex flex-col">
                    <div className="flex items-center gap-3 mb-8 px-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/10">
                            <span className="font-bold text-white text-lg">D</span>
                        </div>
                        <span className="font-bold text-lg tracking-tight text-white">DashCraft</span>
                    </div>

                    <div className="space-y-1">
                        <TabButton id="overview" icon={LayoutDashboard} label="Overview" />
                        <TabButton id="customers" icon={Users} label="Customers" />
                        <TabButton id="analytics" icon={BarChart3} label="Analytics" />
                        <TabButton id="billing" icon={CreditCard} label="Billing" />
                        <TabButton id="settings" icon={Settings} label="Settings" />
                    </div>

                    <div className="mt-auto pt-6 border-t border-white/5">
                        <div className="bg-gradient-to-br from-blue-500/10 via-indigo-500/5 to-transparent rounded-xl p-4 border border-white/5 relative overflow-hidden group hover:border-blue-500/30 transition-colors">
                            <div className="flex justify-between items-start mb-2">
                                <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                                    <TrendingUp className="w-4 h-4" />
                                </div>
                                <span className="text-[10px] font-bold bg-blue-500/10 text-blue-300 px-1.5 py-0.5 rounded">PRO</span>
                            </div>
                            <p className="text-xs font-bold text-white mb-1">Upload Limit Reached</p>
                            <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden mb-2">
                                <div className="w-[85%] h-full bg-blue-500 rounded-full"></div>
                            </div>
                            <button className="text-[10px] font-bold text-white w-full py-1.5 rounded bg-white/5 hover:bg-white/10 border border-white/5 transition-colors">Upgrade Plan</button>
                        </div>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 flex flex-col bg-slate-950 min-w-0">
                    {/* Topbar */}
                    <div className="h-16 border-b border-white/5 flex items-center justify-between px-6 bg-slate-950/50 backdrop-blur z-10 shrink-0">
                        <h2 className="font-semibold text-lg text-white capitalize">{activeTab}</h2>
                        <div className="flex items-center gap-4">
                            <div className="relative hidden sm:block group">
                                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2 group-hover:text-slate-300 transition-colors" />
                                <input className="pl-9 pr-4 py-1.5 bg-slate-900 border border-white/5 rounded-full text-sm w-48 focus:outline-none focus:ring-1 focus:ring-blue-500/50 focus:bg-slate-900 text-slate-300 transition-all group-hover:bg-slate-800 placeholder:text-slate-600" placeholder="Search..." />
                            </div>
                            <div className="w-px h-6 bg-white/10 hidden sm:block"></div>
                            <button className="relative p-2 rounded-full hover:bg-white/5 transition-colors text-slate-400 hover:text-white">
                                <Bell className="w-4 h-4" />
                                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-blue-500 rounded-full border-2 border-slate-950"></span>
                            </button>
                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 p-[1px]">
                                <div className="w-full h-full rounded-full bg-slate-900 p-0.5">
                                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" className="w-full h-full rounded-full bg-slate-800" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Dashboard Content - Scrollable */}
                    <div className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                        <AnimatePresence mode="wait">
                            {activeTab === 'overview' && (
                                <motion.div
                                    key="overview"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="space-y-6"
                                >
                                    {/* Stats Grid */}
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                        <div className="p-4 rounded-xl border border-white/5 bg-slate-900/40 hover:bg-slate-900/60 transition-colors group">
                                            <div className="flex justify-between items-start mb-4">
                                                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform"><TrendingUp className="w-4 h-4" /></div>
                                                <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded-full">+12.5%</span>
                                            </div>
                                            <div className="text-slate-400 text-xs font-medium mb-1">Total Revenue</div>
                                            <div className="text-2xl font-bold text-white flex items-baseline gap-1">
                                                ${stats.revenue.toLocaleString()}
                                            </div>
                                        </div>
                                        <div className="p-4 rounded-xl border border-white/5 bg-slate-900/40 hover:bg-slate-900/60 transition-colors group">
                                            <div className="flex justify-between items-start mb-4">
                                                <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 group-hover:scale-110 transition-transform"><Users className="w-4 h-4" /></div>
                                                <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded-full">+8.2%</span>
                                            </div>
                                            <div className="text-slate-400 text-xs font-medium mb-1">Active Users</div>
                                            <div className="text-2xl font-bold text-white flex items-baseline gap-1">
                                                {stats.users.toLocaleString()}
                                            </div>
                                        </div>
                                        <div className="p-4 rounded-xl border border-white/5 bg-slate-900/40 hover:bg-slate-900/60 transition-colors group">
                                            <div className="flex justify-between items-start mb-4">
                                                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform"><BarChart3 className="w-4 h-4" /></div>
                                                <span className="flex items-center gap-1 text-[10px] font-bold text-rose-400 bg-rose-400/10 px-1.5 py-0.5 rounded-full text-center">-2.1%</span>
                                            </div>
                                            <div className="text-slate-400 text-xs font-medium mb-1">Growth Rate</div>
                                            <div className="text-2xl font-bold text-white flex items-baseline gap-1">
                                                {stats.growth}%
                                            </div>
                                        </div>
                                    </div>

                                    {/* Main Chart Section */}
                                    <div className="grid lg:grid-cols-3 gap-6 h-80">
                                        <div className="lg:col-span-2 p-5 rounded-xl border border-white/5 bg-slate-900/40 flex flex-col">
                                            <div className="flex justify-between items-center mb-6">
                                                <h3 className="font-semibold text-white text-sm">Revenue Overview</h3>
                                                <button className="p-1 rounded hover:bg-white/5 text-slate-400"><MoreHorizontal className="w-4 h-4" /></button>
                                            </div>
                                            <div className="flex-1 w-full min-h-0">
                                                <ResponsiveContainer width="100%" height="100%">
                                                    <AreaChart data={revenueData}>
                                                        <defs>
                                                            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                                                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                                                                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                                                            </linearGradient>
                                                        </defs>
                                                        <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                                                        <XAxis dataKey="name" stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} />
                                                        <YAxis stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
                                                        <Tooltip
                                                            contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', borderRadius: '8px', color: '#fff' }}
                                                            itemStyle={{ color: '#93c5fd' }}
                                                        />
                                                        <Area type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} fillOpacity={1} fill="url(#colorRevenue)" />
                                                    </AreaChart>
                                                </ResponsiveContainer>
                                            </div>
                                        </div>

                                        <div className="p-5 rounded-xl border border-white/5 bg-slate-900/40 flex flex-col">
                                            <h3 className="font-semibold text-white text-sm mb-6">Traffic Sources</h3>
                                            <div className="flex-1 min-h-0 relative">
                                                <ResponsiveContainer width="100%" height="100%">
                                                    <PieChart>
                                                        <Pie
                                                            data={sourceData}
                                                            cx="50%"
                                                            cy="50%"
                                                            innerRadius={60}
                                                            outerRadius={80}
                                                            paddingAngle={5}
                                                            dataKey="value"
                                                        >
                                                            {sourceData.map((entry, index) => (
                                                                <Cell key={`cell-${index}`} fill={entry.color} stroke="rgba(0,0,0,0)" />
                                                            ))}
                                                        </Pie>
                                                    </PieChart>
                                                </ResponsiveContainer>
                                                {/* Center Text */}
                                                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                                                    <span className="text-2xl font-bold text-white">100%</span>
                                                    <span className="text-[10px] uppercase text-slate-500 font-bold tracking-wider">Total</span>
                                                </div>
                                            </div>
                                            <div className="mt-4 space-y-2">
                                                {sourceData.map((item) => (
                                                    <div key={item.name} className="flex items-center justify-between text-xs">
                                                        <div className="flex items-center gap-2">
                                                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                                                            <span className="text-slate-400">{item.name}</span>
                                                        </div>
                                                        <span className="text-white font-medium">{Math.round((item.value / 1000) * 100)}%</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {activeTab !== 'overview' && (
                                <motion.div
                                    key="placeholder"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    className="flex flex-col items-center justify-center h-full text-center p-8 space-y-4"
                                >
                                    <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-white/5 flex items-center justify-center shadow-lg">
                                        <ArrowUpRight className="w-8 h-8 text-blue-500" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">Interactive Demo</h3>
                                        <p className="text-slate-400 max-w-sm mx-auto">
                                            This is a simulated experience. In the real app, you'd see detailed {activeTab} here.
                                        </p>
                                    </div>
                                    <button onClick={() => setActiveTab('overview')} className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-medium transition-colors">
                                        Back to Overview
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroDashboard;
