import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">AI</span>
              </div>
              <span className="font-display font-bold text-lg">LearnGPT</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Learn how to use ChatGPT effectively for work, study, and daily life.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Platform</h4>
            <div className="space-y-2">
              <Link to="/categories" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Categories</Link>
              <Link to="/prompts" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Prompt Library</Link>
              <Link to="/resources" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Resources</Link>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Learning</h4>
            <div className="space-y-2">
              <Link to="/categories" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Beginner Basics</Link>
              <Link to="/categories" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Prompt Writing</Link>
              <Link to="/categories" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">For Business</Link>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Get Started</h4>
            <div className="space-y-2">
              <Link to="/auth?signup=true" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Sign Up Free</Link>
              <Link to="/auth" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Log In</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} LearnGPT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
