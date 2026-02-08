import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { resources } from "@/data/content";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ExternalLink, Search, X } from "lucide-react";

const allResourceCategories = ["All", ...Array.from(new Set(resources.map((r) => r.category)))];

const Resources = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = useMemo(() => {
    let result = activeCategory === "All"
      ? resources
      : resources.filter((r) => r.category === activeCategory);

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (r) =>
          r.title.toLowerCase().includes(q) ||
          r.description.toLowerCase().includes(q) ||
          r.category.toLowerCase().includes(q)
      );
    }
    return result;
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Resources
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Useful AI tools, extensions, workflows, and tips to supercharge your ChatGPT experience.
            </p>
          </motion.div>

          <div className="max-w-md mx-auto mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search tools, extensions, courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 pr-9 rounded-full bg-secondary/50 border-border/50 focus-visible:ring-primary"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {allResourceCategories.map((cat) => (
              <Badge
                key={cat}
                variant={activeCategory === cat ? "default" : "outline"}
                className={`cursor-pointer transition-all ${
                  activeCategory === cat ? "gradient-primary border-0 text-primary-foreground" : "hover:bg-secondary"
                }`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </Badge>
            ))}
          </div>

          {filtered.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <Search className="h-10 w-10 text-muted-foreground/40 mx-auto mb-3" />
              <p className="text-muted-foreground text-lg">No resources found for "{searchQuery}"</p>
              <button
                onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
                className="mt-2 text-sm text-primary hover:underline"
              >
                Clear filters
              </button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map((resource, i) => (
                <motion.a
                  key={resource.title}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.03 }}
                  className="group glass-card rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="text-xs">{resource.category}</Badge>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="font-display font-semibold mb-2 group-hover:text-primary transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{resource.description}</p>
                </motion.a>
              ))}
            </div>
          )}

          {filtered.length > 0 && (
            <p className="text-center text-sm text-muted-foreground mt-6">
              Showing {filtered.length} resource{filtered.length !== 1 ? "s" : ""}
            </p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
