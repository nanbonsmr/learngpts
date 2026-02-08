import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, LogOut } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    setMobileOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg gradient-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">AI</span>
          </div>
          <span className="font-display font-bold text-lg text-foreground">LearnGPT</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/dashboard" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Dashboard</Link>
          <Link to="/categories" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Categories</Link>
          <Link to="/prompts" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Prompt Library</Link>
          <Link to="/resources" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Resources</Link>
        </div>

        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <>
              <span className="text-sm text-muted-foreground truncate max-w-[160px]">
                {user.email}
              </span>
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
          <div className="flex gap-2 pt-2">
            {user ? (
              <Button variant="outline" className="flex-1" onClick={handleSignOut}>
                <LogOut className="h-4 w-4 mr-1" />
                Log Out
              </Button>
            ) : (
              <>
                <Button variant="outline" asChild className="flex-1">
                  <Link to="/auth" onClick={() => setMobileOpen(false)}>Log In</Link>
                </Button>
                <Button asChild className="flex-1 gradient-primary border-0">
                  <Link to="/auth?signup=true" onClick={() => setMobileOpen(false)}>Sign Up</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
