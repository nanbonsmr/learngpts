import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <img src={logo} alt="LearnGPT" className="h-10 w-10 rounded-xl object-contain" />
              <span className="font-display font-bold text-lg tracking-tight">
                Learn<span className="gradient-text">GPT</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Learn how to use ChatGPT effectively for work, study, and daily life.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-sm tracking-wide uppercase text-foreground/80">Platform</h4>
            <div className="space-y-2.5">
              <Link to="/categories" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Categories</Link>
              <Link to="/prompts" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Prompt Library</Link>
              <Link to="/resources" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Resources</Link>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-sm tracking-wide uppercase text-foreground/80">Learning</h4>
            <div className="space-y-2.5">
              <Link to="/categories" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Beginner Basics</Link>
              <Link to="/categories" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Prompt Writing</Link>
              <Link to="/categories" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">For Business</Link>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-sm tracking-wide uppercase text-foreground/80">Get Started</h4>
            <div className="space-y-2.5">
              <Link to="/auth?signup=true" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Sign Up Free</Link>
              <Link to="/auth" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Log In</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border/40 mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} LearnGPT. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/60">
            Built with ❤️ for learners everywhere
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
