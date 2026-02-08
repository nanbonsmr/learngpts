import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Sparkles, Clock, BookOpen } from "lucide-react";
import module8Image from "@/assets/module-8-website-building.jpg";

const FeaturedCourseSection = () => {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-[hsl(190,80%,45%)]/8 blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[hsl(190,80%,45%)]/10 border border-[hsl(190,80%,45%)]/20 mb-5 text-xs font-semibold tracking-widest uppercase text-[hsl(190,80%,45%)]">
            <Sparkles className="h-3.5 w-3.5" />
            New Course
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-balance">
            Build a Website with AI
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Go from idea to live website — no coding required. Use ChatGPT for content and Lovable AI to build.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <Link
            to="/category/website-building"
            className="group block max-w-5xl mx-auto glass-card rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-[hsl(190,80%,45%)]/10 transition-all duration-500"
          >
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image side */}
              <div className="relative h-64 md:h-auto overflow-hidden">
                <img
                  src={module8Image}
                  alt="Build a Website with ChatGPT and Lovable AI"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-background/80" />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-xs font-semibold text-foreground">
                    <Globe className="h-3.5 w-3.5 text-[hsl(190,80%,45%)]" />
                    Module 8
                  </span>
                </div>
              </div>

              {/* Content side */}
              <div className="p-5 sm:p-8 md:p-10 flex flex-col justify-center">
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 group-hover:text-[hsl(190,80%,45%)] transition-colors duration-300">
                  Build a Website with ChatGPT & Lovable
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Learn the complete workflow: plan your site with ChatGPT, build it with Lovable AI in minutes, 
                  then deploy and optimize for search engines. Zero coding experience needed.
                </p>

                {/* Lesson list */}
                <div className="space-y-3 mb-8">
                  {[
                    { num: "8.1", title: "Planning Your Website with ChatGPT", time: "12 min" },
                    { num: "8.2", title: "Building with Lovable AI", time: "15 min" },
                    { num: "8.3", title: "Deploy, Optimize & Grow", time: "10 min" },
                  ].map((lesson) => (
                    <div key={lesson.num} className="flex items-center gap-3">
                      <span className="flex items-center justify-center h-7 w-7 rounded-lg bg-[hsl(190,80%,45%)]/10 text-[hsl(190,80%,45%)] text-xs font-bold shrink-0">
                        {lesson.num}
                      </span>
                      <span className="text-sm font-medium text-foreground/90">{lesson.title}</span>
                      <span className="ml-auto flex items-center gap-1 text-xs text-muted-foreground shrink-0">
                        <Clock className="h-3 w-3" />
                        {lesson.time}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Stats row */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-5 mb-6">
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <BookOpen className="h-4 w-4" />
                    <span>3 lessons</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>~37 min</span>
                  </div>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-[hsl(190,80%,45%)]/10 text-[hsl(190,80%,45%)] font-semibold">
                    Beginner
                  </span>
                </div>

                <Button
                  className="w-full sm:w-auto bg-[hsl(190,80%,45%)] hover:bg-[hsl(190,80%,50%)] text-white rounded-xl h-12 px-6 text-sm font-semibold shadow-lg shadow-[hsl(190,80%,45%)]/20 group-hover:shadow-xl group-hover:shadow-[hsl(190,80%,45%)]/30 transition-all duration-300"
                >
                  Start Building
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedCourseSection;
