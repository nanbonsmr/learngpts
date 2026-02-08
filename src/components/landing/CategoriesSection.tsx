import { motion } from "framer-motion";
import { categories } from "@/data/content";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CategoriesSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            What You'll Learn
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore practical, hands-on categories with real examples and prompts you can use immediately.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                to={`/category/${cat.id}`}
                className="group block glass-card rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className="h-12 w-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${cat.color}20` }}
                >
                  <cat.icon className="h-6 w-6" style={{ color: cat.color }} />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {cat.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {cat.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    {cat.lessons.length} lessons
                  </span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
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
