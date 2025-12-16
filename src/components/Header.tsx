import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-white/10 shadow-sm supports-[backdrop-filter]:bg-background/60">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-50 pointer-events-none"></div>
      <div className="container mx-auto px-6 py-4 flex items-center justify-between relative">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-lg shadow-primary/20">
            <span className="text-primary-foreground font-bold text-lg">D</span>
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-foreground">DashCraft</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 bg-white/50 px-6 py-2 rounded-full border border-white/20 backdrop-blur-md shadow-sm">
          <a href="#benefits" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Benefits</a>
          <a href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">How it works</a>
          <a href="#dashboards" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Dashboards</a>
          <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="default" size="sm" className="font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow">Buy Template</Button>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-4 shadow-lg animate-in slide-in-from-top-2">
          <nav className="flex flex-col gap-4">
            <a href="#benefits" className="text-sm font-medium text-muted-foreground hover:text-foreground" onClick={() => setIsMobileMenuOpen(false)}>Benefits</a>
            <a href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground" onClick={() => setIsMobileMenuOpen(false)}>How it works</a>
            <a href="#dashboards" className="text-sm font-medium text-muted-foreground hover:text-foreground" onClick={() => setIsMobileMenuOpen(false)}>Dashboards</a>
            <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground" onClick={() => setIsMobileMenuOpen(false)}>Pricing</a>
            <div className="pt-2">
              <Button variant="default" size="sm" className="w-full font-semibold">Buy Template</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
