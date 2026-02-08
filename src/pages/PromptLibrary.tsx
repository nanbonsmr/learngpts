import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { promptLibrary } from "@/data/content";
import { useAppStore } from "@/store/useAppStore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Copy, Heart, Search } from "lucide-react";
import { toast } from "sonner";

const allCategories = ["All", ...Array.from(new Set(promptLibrary.map((p) => p.category)))];

const PromptLibrary = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const { user, toggleFavoritePrompt } = useAppStore();

  const filtered = promptLibrary.filter((p) => {
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    const matchesSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.prompt.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const copyPrompt = (prompt: string) => {
    navigator.clipboard.writeText(prompt);
    toast.success("Prompt copied!");
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Prompt Library"
        description="Browse 60+ ready-to-use ChatGPT prompts for business, coding, marketing, freelancing, and productivity. Copy and paste instantly."
        canonical="/prompts"
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
              Prompt Library
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ready-to-use prompts you can copy and paste into ChatGPT.
            </p>
          </motion.div>

          {/* Search & Filter */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search prompts..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 h-12 rounded-xl"
              />
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {allCategories.map((cat) => (
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
          </div>

          {/* Prompt Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((prompt, i) => {
              const isFav = user.favoritePrompts.includes(prompt.id);
              return (
                <motion.div
                  key={prompt.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.03 }}
                  className="glass-card rounded-2xl p-5 flex flex-col"
                >
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="text-xs">{prompt.category}</Badge>
                    <button
                      onClick={() => toggleFavoritePrompt(prompt.id)}
                      className="text-muted-foreground hover:text-destructive transition-colors"
                    >
                      <Heart className={`h-4 w-4 ${isFav ? "fill-destructive text-destructive" : ""}`} />
                    </button>
                  </div>
                  <h3 className="font-display font-semibold text-sm mb-2">{prompt.title}</h3>
                  <p className="text-xs text-muted-foreground flex-1 mb-4 font-mono bg-secondary/50 rounded-lg p-3 leading-relaxed">
                    {prompt.prompt}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyPrompt(prompt.prompt)}
                    className="w-full"
                  >
                    <Copy className="mr-2 h-3 w-3" />
                    Copy Prompt
                  </Button>
                </motion.div>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No prompts found. Try a different search or category.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PromptLibrary;
