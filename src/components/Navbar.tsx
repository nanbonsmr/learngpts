import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, LogOut, Moon, Sun } from "lucide-react";
import { useState } from "react";
import { useTheme } from "next-themes";
import { useAuth } from "@/hooks/useAuth";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user, signOut } = useAuth();
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  const handleSignOut = async () => {
    await signOut();
    setMobileOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="LearnGPT" className="h-8 w-8 rounded-lg object-contain" />
          <span className="font-display font-bold text-lg text-foreground">LearnGPT</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/dashboard" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Dashboard</Link>
          <Link to="/categories" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Categories</Link>
          <Link to="/prompts" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Prompt Library</Link>
          <Link to="/resources" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Resources</Link>
        </div>

        <div className="hidden md:flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
          {user ? (
            <>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/profile" className="truncate max-w-[160px]">
                  {user.email}
                </Link>
              </Button>
              <Button variant="ghost" size="sm" onClick={handleSignOut}>
                <LogOut className="h-4 w-4 mr-1" />
                Log Out
              </Button>
            </>
          ) : (
            <>
              <Button variant="ghost" asChild>
                <Link to="/auth">Log In</Link>
              </Button>
              <Button asChild className="gradient-primary border-0">
                <Link to="/auth?signup=true">Sign Up Free</Link>
              </Button>
            </>
          )}
        </div>

        {/* Mobile toggle */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-card p-4 space-y-3">
          <Link to="/dashboard" className="block text-sm py-2 text-muted-foreground hover:text-foreground" onClick={() => setMobileOpen(false)}>Dashboard</Link>
          <Link to="/categories" className="block text-sm py-2 text-muted-foreground hover:text-foreground" onClick={() => setMobileOpen(false)}>Categories</Link>
          <Link to="/prompts" className="block text-sm py-2 text-muted-foreground hover:text-foreground" onClick={() => setMobileOpen(false)}>Prompt Library</Link>
          <Link to="/resources" className="block text-sm py-2 text-muted-foreground hover:text-foreground" onClick={() => setMobileOpen(false)}>Resources</Link>
          <div className="flex items-center justify-between pt-2">
            <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
            <div className="flex gap-2">
              {user ? (
                <Button variant="outline" onClick={handleSignOut}>
                  <LogOut className="h-4 w-4 mr-1" />
                  Log Out
                </Button>
              ) : (
                <>
                  <Button variant="outline" asChild>
                    <Link to="/auth" onClick={() => setMobileOpen(false)}>Log In</Link>
                  </Button>
                  <Button asChild className="gradient-primary border-0">
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
