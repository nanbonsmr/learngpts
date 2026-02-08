import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { categories } from "@/data/content";
import { useAppStore } from "@/store/useAppStore";
import { Progress } from "@/components/ui/progress";
import { ArrowRight } from "lucide-react";

const Categories = () => {
  const { user } = useAppStore();

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Learning Categories"
        description="Browse 7 practical ChatGPT learning modules covering prompt engineering, business, coding, freelancing, and more."
        canonical="/categories"
      />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Learning Categories
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose a category and start learning with practical lessons and real-world prompts.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => {
              const catCompleted = cat.lessons.filter((l) => user.completedLessons.includes(l.id)).length;
              const catProgress = cat.lessons.length > 0 ? Math.round((catCompleted / cat.lessons.length) * 100) : 0;

              return (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={`/category/${cat.id}`}
                    className="group block glass-card rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="h-40 overflow-hidden">
                      <img
                        src={cat.image}
                        alt={cat.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div
                          className="h-10 w-10 rounded-xl flex items-center justify-center shrink-0"
                          style={{ background: `${cat.color}20` }}
                        >
                          <cat.icon className="h-5 w-5" style={{ color: cat.color }} />
                        </div>
                        <div className="min-w-0">
                          <h3 className="font-display font-semibold text-base group-hover:text-primary transition-colors truncate">
                            {cat.title}
                          </h3>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-muted-foreground">{cat.lessons.length} lessons</span>
                            <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">{cat.level}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{cat.description}</p>
                      <Progress value={catProgress} className="h-2 mb-2" />
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">{catCompleted}/{cat.lessons.length} completed</span>
                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Categories;
