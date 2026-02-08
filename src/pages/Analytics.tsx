import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useAppStore } from "@/store/useAppStore";
import { categories } from "@/data/content";
import { Progress } from "@/components/ui/progress";
import { BarChart3, BookOpen, Trophy, Target, TrendingUp, CheckCircle, PieChart } from "lucide-react";

const Analytics = () => {
  const { user } = useAppStore();

  const totalLessons = categories.reduce((acc, c) => acc + c.lessons.length, 0);
  const completedLessons = user.completedLessons.length;
  const overallProgress = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

  const totalQuizzes = categories.filter((c) => c.quiz && c.quiz.length > 0).length;
  const completedQuizzes = user.completedQuizzes?.length || 0;

  // Per-category breakdown
  const categoryStats = categories.map((cat) => {
    const total = cat.lessons.length;
    const completed = cat.lessons.filter((l) => user.completedLessons.includes(l.id)).length;
    const progress = total > 0 ? Math.round((completed / total) * 100) : 0;
    const quizCompleted = user.completedQuizzes?.includes(cat.id) || false;
    return { ...cat, total, completed, progress, quizCompleted };
  });

  const completedCategories = categoryStats.filter((c) => c.progress === 100).length;

  // Estimated study time (avg ~8min per lesson)
  const estimatedMinutes = completedLessons * 8;
  const hours = Math.floor(estimatedMinutes / 60);
  const minutes = estimatedMinutes % 60;

  return (
    <div className="min-h-screen bg-background">
      <SEO title="Progress Analytics" description="View your detailed learning progress and statistics." />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">
              Progress Analytics 📊
            </h1>
            <p className="text-muted-foreground">Your detailed learning journey at a glance.</p>
          </motion.div>

          {/* Summary Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8">
            {[
              { icon: BookOpen, label: "Lessons Done", value: `${completedLessons}/${totalLessons}`, color: "text-primary" },
              { icon: Trophy, label: "Quizzes Passed", value: `${completedQuizzes}/${totalQuizzes}`, color: "text-accent" },
              { icon: Target, label: "Modules Complete", value: `${completedCategories}/${categories.length}`, color: "text-primary" },
              { icon: TrendingUp, label: "Study Time", value: hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`, color: "text-accent" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="glass-card rounded-2xl p-4 sm:p-5 text-center"
              >
                <stat.icon className={`h-5 w-5 sm:h-6 sm:w-6 ${stat.color} mx-auto mb-2`} />
                <p className="font-display text-lg sm:text-2xl font-bold">{stat.value}</p>
                <p className="text-[10px] sm:text-xs text-muted-foreground mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Overall Progress */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card rounded-2xl p-6 md:p-8 mb-8"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <PieChart className="h-5 w-5 text-primary" />
                <h2 className="font-display font-semibold text-lg">Overall Completion</h2>
              </div>
              <span className="font-display text-2xl font-bold gradient-text">{overallProgress}%</span>
            </div>
            <Progress value={overallProgress} className="h-4 mb-2" />
            <p className="text-xs text-muted-foreground">
              {completedLessons === totalLessons
                ? "🎉 Congratulations! You've completed all lessons!"
                : `${totalLessons - completedLessons} lessons remaining to finish the course.`}
            </p>
          </motion.div>

          {/* Category Breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-2 mb-5">
              <BarChart3 className="h-5 w-5 text-primary" />
              <h2 className="font-display font-semibold text-lg">Module Breakdown</h2>
            </div>
            <div className="space-y-3">
              {categoryStats.map((cat, i) => (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.04 }}
                  className="glass-card rounded-xl p-4 md:p-5"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="h-10 w-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: `${cat.color}20` }}
                    >
                      <cat.icon className="h-5 w-5" style={{ color: cat.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium text-sm truncate">{cat.title}</h3>
                        <span className="text-sm font-semibold ml-2 shrink-0" style={{ color: cat.color }}>
                          {cat.progress}%
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {cat.completed}/{cat.total} lessons
                        {cat.quizCompleted && " • Quiz passed ✅"}
                      </p>
                    </div>
                  </div>
                  <Progress value={cat.progress} className="h-2" />

                  {/* Lesson dots */}
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {cat.lessons.map((lesson) => {
                      const done = user.completedLessons.includes(lesson.id);
                      return (
                        <div
                          key={lesson.id}
                          title={lesson.title}
                          className={`h-3 w-3 rounded-full transition-colors ${
                            done ? "bg-accent" : "bg-muted"
                          }`}
                        />
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8"
          >
            <div className="flex items-center gap-2 mb-5">
              <CheckCircle className="h-5 w-5 text-accent" />
              <h2 className="font-display font-semibold text-lg">Achievements</h2>
            </div>
            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { title: "First Steps", desc: "Complete your first lesson", unlocked: completedLessons >= 1 },
                { title: "Getting Serious", desc: "Complete 5 lessons", unlocked: completedLessons >= 5 },
                { title: "Dedicated Learner", desc: "Complete 10 lessons", unlocked: completedLessons >= 10 },
                { title: "Halfway There", desc: "Reach 50% overall progress", unlocked: overallProgress >= 50 },
                { title: "Quiz Whiz", desc: "Pass your first quiz", unlocked: completedQuizzes >= 1 },
                { title: "Module Master", desc: "Complete an entire module", unlocked: completedCategories >= 1 },
                { title: "Prompt Pro", desc: "Save 5 favorite prompts", unlocked: (user.favoritePrompts?.length || 0) >= 5 },
                { title: "Bookworm", desc: "Complete 20 lessons", unlocked: completedLessons >= 20 },
                { title: "Graduate", desc: "Complete all lessons", unlocked: completedLessons === totalLessons && totalLessons > 0 },
              ].map((a, i) => (
                <div
                  key={i}
                  className={`rounded-xl p-4 border transition-colors ${
                    a.unlocked
                      ? "border-accent/30 bg-accent/5"
                      : "border-border bg-muted/30 opacity-50"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">{a.unlocked ? "🏆" : "🔒"}</span>
                    <h4 className="font-medium text-sm">{a.title}</h4>
                  </div>
                  <p className="text-xs text-muted-foreground">{a.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Analytics;
