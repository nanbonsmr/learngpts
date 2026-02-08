import { motion } from "framer-motion";
import { categories } from "@/data/content";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CategoriesSection = () => {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-accent/5 blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold text-primary tracking-widest uppercase mb-4">Curriculum</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-balance">
            What You'll Learn
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore practical, hands-on categories with real examples and prompts you can use immediately.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
            >
              <Link
                to={`/category/${cat.id}`}
                className="group block glass-card rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 h-full"
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="h-12 w-12 rounded-2xl flex items-center justify-center shrink-0"
                    style={{ background: `${cat.color}15` }}
                  >
                    <cat.icon className="h-6 w-6" style={{ color: cat.color }} />
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground/50 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300 mt-1" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-200">
                  {cat.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
                  {cat.description}
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-muted-foreground bg-muted/60 px-2.5 py-1 rounded-full">
                    {cat.lessons.length} lessons
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
