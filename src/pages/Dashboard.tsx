import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAppStore } from "@/store/useAppStore";
import { categories } from "@/data/content";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, CheckCircle, Star, Trophy, Award } from "lucide-react";
import { useCertificateStatus } from "@/hooks/useCertificateStatus";

const Dashboard = () => {
  const { user } = useAppStore();
  const { hasCertificate } = useCertificateStatus();

  const selectedCategory = categories.find((c) => c.id === user.goal);
  const beginnerCategory = categories.find((c) => c.id === "beginner-basics");
  const promptCategory = categories.find((c) => c.id === "prompt-writing");

  // Recommended categories based on goal
  const recommendedCategories = [
    beginnerCategory,
    promptCategory,
    selectedCategory,
  ].filter((c, i, arr) => c && arr.findIndex((x) => x?.id === c.id) === i);

  const totalLessons = categories.reduce((acc, c) => acc + c.lessons.length, 0);
  const completedCount = user.completedLessons.length;
  const overallProgress = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

  // Find next uncompleted lesson
  const getNextLesson = () => {
    for (const cat of recommendedCategories) {
      if (!cat) continue;
      const next = cat.lessons.find((l) => !user.completedLessons.includes(l.id));
      if (next) return { lesson: next, category: cat };
    }
    return null;
  };
  const nextLesson = getNextLesson();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Welcome */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">
              Welcome back! 👋
            </h1>
            <p className="text-muted-foreground">
              {user.goal
                ? `Your learning path: ${selectedCategory?.title || "General"} • ${user.level || "Beginner"} level`
                : "Start by choosing your learning path."}
            </p>
          </motion.div>

          {/* Progress Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-card rounded-2xl p-6 md:p-8 mb-8"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Trophy className="h-5 w-5 text-primary" />
                  <h2 className="font-display font-semibold text-lg">Your Progress</h2>
                </div>
                <p className="text-sm text-muted-foreground">
                  {completedCount} of {totalLessons} lessons completed
                </p>
              </div>
              <span className="text-3xl font-display font-bold gradient-text">{overallProgress}%</span>
            </div>
            <Progress value={overallProgress} className="h-3" />

            {nextLesson && (
              <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10">
                <div>
                  <p className="text-xs text-primary font-medium mb-1">Continue Learning</p>
                  <p className="font-medium text-sm">{nextLesson.lesson.title}</p>
                  <p className="text-xs text-muted-foreground">{nextLesson.category.title}</p>
                </div>
                <Button asChild className="gradient-primary border-0 shrink-0">
                  <Link to={`/lesson/${nextLesson.category.id}/${nextLesson.lesson.id}`}>
                    Continue
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            )}

            {/* Certificate Badge */}
            {hasCertificate ? (
              <Link
                to="/certificate"
                className="mt-6 flex items-center gap-3 p-4 rounded-xl bg-accent/10 border border-accent/20 hover:bg-accent/15 transition-colors"
              >
                <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                  <Award className="h-5 w-5 text-accent" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-sm text-accent">🎓 Certified ChatGPT Master</p>
                  <p className="text-xs text-muted-foreground">You've earned your certificate! Click to view or download.</p>
                </div>
                <ArrowRight className="h-4 w-4 text-accent shrink-0" />
              </Link>
            ) : overallProgress === 100 ? (
              <Link
                to="/certificate"
                className="mt-6 flex items-center gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10 hover:bg-primary/10 transition-colors"
              >
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-sm">All lessons completed!</p>
                  <p className="text-xs text-muted-foreground">Get your certificate for just $5</p>
                </div>
                <ArrowRight className="h-4 w-4 text-primary shrink-0" />
              </Link>
            ) : null}
          </motion.div>

          {/* Recommended Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <h2 className="font-display text-xl font-semibold mb-4">Recommended For You</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {recommendedCategories.map((cat) => {
                if (!cat) return null;
                const catCompleted = cat.lessons.filter((l) => user.completedLessons.includes(l.id)).length;
                const catProgress = cat.lessons.length > 0 ? Math.round((catCompleted / cat.lessons.length) * 100) : 0;

                return (
                  <Link
                    key={cat.id}
                    to={`/category/${cat.id}`}
                    className="glass-card rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="h-10 w-10 rounded-xl flex items-center justify-center"
                        style={{ background: `${cat.color}20` }}
                      >
                        <cat.icon className="h-5 w-5" style={{ color: cat.color }} />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-sm">{cat.title}</h3>
                        <p className="text-xs text-muted-foreground">{cat.lessons.length} lessons</p>
                      </div>
                    </div>
                    <Progress value={catProgress} className="h-2 mb-2" />
                    <p className="text-xs text-muted-foreground">{catCompleted}/{cat.lessons.length} completed</p>
                  </Link>
                );
              })}
            </div>
          </motion.div>

          {/* All Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-display text-xl font-semibold">All Categories</h2>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/categories">View All <ArrowRight className="ml-1 h-3 w-3" /></Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {categories.map((cat) => {
                const catCompleted = cat.lessons.filter((l) => user.completedLessons.includes(l.id)).length;
                return (
                  <Link
                    key={cat.id}
                    to={`/category/${cat.id}`}
                    className="flex items-center gap-3 p-4 rounded-xl border border-border hover:bg-secondary/50 transition-colors"
                  >
                    <div
                      className="h-8 w-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: `${cat.color}20` }}
                    >
                      <cat.icon className="h-4 w-4" style={{ color: cat.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium truncate">{cat.title}</h4>
                      <p className="text-xs text-muted-foreground">{catCompleted}/{cat.lessons.length}</p>
                    </div>
                    {catCompleted === cat.lessons.length && cat.lessons.length > 0 && (
                      <CheckCircle className="h-4 w-4 text-accent shrink-0" />
                    )}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
