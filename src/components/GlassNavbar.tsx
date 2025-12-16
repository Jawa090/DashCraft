import { Button } from "@/components/ui/button";
import { Menu, X, Home, Info, Briefcase, Mail, Settings } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const GlassNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/about", label: "About", icon: Info },
    { path: "/dashboards", label: "Dashboards", icon: Briefcase },
  ];

  const isActive = (path: string) => location.pathname === path;



  return (
    <>


      {/* 3D Glass Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 pt-4 pointer-events-none">
        {/* Separate Logo - Top Left (Viewport Relative) */}
        <div className="absolute top-1/2 -translate-y-1/2 left-8 pointer-events-auto z-50">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative p-2 rounded-xl backdrop-blur-xl border border-white/10 group-hover:scale-110 transition-transform duration-300 bg-slate-900/50">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20">
                <span className="text-white font-bold text-lg">D</span>
              </div>
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-white/90 hidden md:block">
              DashCraft
            </span>
          </Link>
        </div>

        <div className="container mx-auto px-6 relative flex justify-center">

          <nav className="glass-navbar rounded-full px-8 py-3 mx-auto max-w-fit pointer-events-auto flex items-center gap-8">
            <div className="flex items-center gap-2">
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-1">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`glass-button px-4 py-2 flex items-center gap-2 text-sm font-medium transition-all duration-300 hover-lift rounded-full ${isActive(item.path)
                        ? "bg-white/10 text-white border-white/20"
                        : "text-slate-400 hover:text-white hover:bg-white/5"
                        }`}
                    >
                      <Icon size={16} />
                      {item.label}
                    </Link>
                  );
                })}
              </div>

              {/* Mobile Menu Button - Moved inside nav for compact mobile view */}
              <button
                className="md:hidden glass-button p-2 text-slate-300 hover:text-white rounded-full"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center">
              <Link to="/get-started">
                <Button
                  variant="default"
                  size="sm"
                  className="glass-button font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white border-0 shadow-lg shadow-blue-900/20 hover:shadow-blue-900/40 transition-all duration-300 transform hover:-translate-y-0.5 rounded-full px-6"
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Dropdown - Absolute positioning relative to container */}
          {isMobileMenuOpen && (
            <div className="absolute top-full mt-4 left-6 right-6 border border-white/10 backdrop-blur-xl bg-slate-900/90 rounded-2xl p-4 space-y-2 pointer-events-auto md:hidden shadow-2xl z-50">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`glass-button w-full px-4 py-3 flex items-center gap-3 text-sm font-medium transition-all duration-300 rounded-xl ${isActive(item.path)
                      ? "bg-white/10 text-white border-white/20"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                      }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Icon size={18} />
                    {item.label}
                  </Link>
                );
              })}
              <div className="pt-2">
                <Link to="/get-started" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button
                    variant="default"
                    size="sm"
                    className="w-full glass-button font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white border-0 py-6 text-base rounded-xl"
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default GlassNavbar;