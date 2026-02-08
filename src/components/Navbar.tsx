import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, LogOut, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { useAuth } from "@/hooks/useAuth";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, signOut, displayName } = useAuth();
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  const handleSignOut = async () => {
    await signOut();
    setMobileOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/dashboard", label: "Dashboard" },
    { to: "/categories", label: "Categories" },
    { to: "/prompts", label: "Prompts" },
    { to: "/resources", label: "Resources" },
    { to: "/certificate", label: "Certificate" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass-navbar shadow-lg shadow-primary/5" : "bg-transparent"}`}>
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2.5 group">
          <img
            src={logo}
            alt="LearnGPT"
            className="h-10 w-10 rounded-xl object-contain transition-transform duration-300 group-hover:scale-110"
          />
          <span className="font-display font-bold text-lg tracking-tight text-foreground">
            Learn<span className="gradient-text">GPT</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm px-3.5 py-2 rounded-lg transition-all duration-200 ${
                isActive(link.to)
                  ? "text-primary font-medium bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-lg"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
          {user ? (
            <>
              <Button variant="ghost" size="sm" asChild className="rounded-lg">
                <Link to="/profile" className="truncate max-w-[160px]">
                  {displayName || user.email?.split("@")[0] || "Profile"}
                </Link>
              </Button>
              <Button variant="ghost" size="sm" onClick={handleSignOut} className="rounded-lg">
                <LogOut className="h-4 w-4 mr-1" />
                Log Out
              </Button>
            </>
          ) : (
            <>
              <Button variant="ghost" asChild className="rounded-lg">
                <Link to="/auth">Log In</Link>
              </Button>
              <Button asChild className="gradient-primary border-0 rounded-lg shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 transition-all">
                <Link to="/auth?signup=true">Sign Up Free</Link>
              </Button>
            </>
          )}
        </div>

        {/* Mobile toggle */}
        <Button variant="ghost" size="icon" className="md:hidden rounded-lg" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border/30 bg-background/95 backdrop-blur-xl p-4 space-y-1 animate-fade-in">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`block text-sm py-2.5 px-3 rounded-lg transition-colors ${
                isActive(link.to)
                  ? "text-primary font-medium bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center justify-between pt-3 border-t border-border/30 mt-3">
            <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme" className="rounded-lg">
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
            <div className="flex gap-2">
              {user ? (
                <Button variant="outline" onClick={handleSignOut} className="rounded-lg">
                  <LogOut className="h-4 w-4 mr-1" />
                  Log Out
                </Button>
              ) : (
                <>
                  <Button variant="outline" asChild className="rounded-lg">
                    <Link to="/auth" onClick={() => setMobileOpen(false)}>Log In</Link>
                  </Button>
                  <Button asChild className="gradient-primary border-0 rounded-lg">
                    <Link to="/auth?signup=true" onClick={() => setMobileOpen(false)}>Sign Up</Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
