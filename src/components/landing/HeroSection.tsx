import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Play } from "lucide-react";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 sm:pt-16">
      {/* Ambient background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main gradient orbs */}
        <div className="absolute top-1/4 -right-20 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] rounded-full bg-primary/15 blur-[100px] animate-float" />
        <div className="absolute bottom-1/4 -left-20 w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] rounded-full bg-accent/15 blur-[100px] animate-float-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] sm:w-[800px] sm:h-[800px] rounded-full gradient-glow opacity-60" />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/8 border border-primary/15 mb-10 backdrop-blur-sm"
          >
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Free AI Learning Platform</span>
          </motion.div>

          {/* Heading */}
          <h1 className="font-display text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 text-balance leading-[1.1]">
            Master ChatGPT{" "}
            <br className="hidden sm:block" />
            <span className="gradient-text">the Smart Way</span>
          </h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed px-2"
          >
            Practical lessons, real prompts, and hands-on exercises for business, 
            study, content creation, coding, and daily productivity.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              asChild
              className="gradient-primary border-0 text-base sm:text-lg px-6 sm:px-8 h-12 sm:h-14 rounded-2xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 hover:scale-[1.02] transition-all duration-300 w-full sm:w-auto"
            >
              <Link to="/auth?signup=true">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-base sm:text-lg px-6 sm:px-8 h-12 sm:h-14 rounded-2xl border-border/60 hover:bg-muted/50 transition-all duration-300 w-full sm:w-auto"
            >
              <Link to="/categories">
                <Play className="mr-2 h-4 w-4" />
                Browse Lessons
              </Link>
            </Button>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[
                  "bg-primary/80",
                  "bg-accent/80",
                  "gradient-primary",
                  "bg-primary/60",
                ].map((bg, i) => (
                  <div
                    key={i}
                    className={`h-8 w-8 rounded-full ${bg} border-2 border-background flex items-center justify-center`}
                  >
                    <span className="text-[10px] font-bold text-primary-foreground">
                      {["J", "A", "M", "K"][i]}
                    </span>
                  </div>
                ))}
              </div>
              <span className="font-medium">10,000+ learners</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-border" />
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="font-medium ml-1">4.9/5 rating</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
