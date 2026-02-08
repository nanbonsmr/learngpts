import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { userGoals, userLevels } from "@/data/content";
import { useAppStore } from "@/store/useAppStore";
import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";

const Onboarding = () => {
  const [step, setStep] = useState(1);
  const { setGoal, setLevel, completeOnboarding, user } = useAppStore();
  const navigate = useNavigate();
  const [selectedGoal, setSelectedGoal] = useState(user.goal || "");
  const [selectedLevel, setSelectedLevel] = useState(user.level || "");

  const handleFinish = () => {
    if (selectedGoal) setGoal(selectedGoal);
    if (selectedLevel) setLevel(selectedLevel);
    completeOnboarding();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-2xl"
      >
        {/* Progress */}
        <div className="flex items-center gap-2 mb-8 justify-center">
          {[1, 2].map((s) => (
            <div
              key={s}
              className={`h-2 rounded-full transition-all duration-300 ${
                s <= step ? "w-16 gradient-primary" : "w-8 bg-muted"
              }`}
            />
          ))}
        </div>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="glass-card rounded-3xl p-8 md:p-12"
            >
              <div className="text-center mb-8">
                <h1 className="font-display text-3xl font-bold mb-2">Welcome! 👋</h1>
                <p className="text-muted-foreground">What do you want to use ChatGPT for?</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {userGoals.map((goal) => (
                  <button
                    key={goal.id}
                    onClick={() => setSelectedGoal(goal.categoryId)}
                    className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all text-left ${
                      selectedGoal === goal.categoryId
                        ? "border-primary bg-primary/5 shadow-md"
                        : "border-border hover:border-primary/30 hover:bg-secondary/50"
                    }`}
                  >
                    <div className={`h-10 w-10 rounded-lg flex items-center justify-center shrink-0 ${
                      selectedGoal === goal.categoryId ? "gradient-primary" : "bg-secondary"
                    }`}>
                      <goal.icon className={`h-5 w-5 ${selectedGoal === goal.categoryId ? "text-primary-foreground" : "text-muted-foreground"}`} />
                    </div>
                    <span className="font-medium text-sm">{goal.label}</span>
                    {selectedGoal === goal.categoryId && (
                      <CheckCircle className="h-5 w-5 text-primary ml-auto" />
                    )}
                  </button>
                ))}
              </div>

              <div className="flex justify-end mt-8">
                <Button
                  onClick={() => setStep(2)}
                  disabled={!selectedGoal}
                  className="gradient-primary border-0 px-6"
                >
                  Next
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="glass-card rounded-3xl p-8 md:p-12"
            >
              <div className="text-center mb-8">
                <h1 className="font-display text-3xl font-bold mb-2">Your Experience Level</h1>
                <p className="text-muted-foreground">This helps us personalize your learning path.</p>
              </div>

              <div className="space-y-3">
                {userLevels.map((level) => (
                  <button
                    key={level.id}
                    onClick={() => setSelectedLevel(level.id)}
                    className={`w-full flex items-center gap-4 p-5 rounded-xl border-2 transition-all text-left ${
                      selectedLevel === level.id
                        ? "border-primary bg-primary/5 shadow-md"
                        : "border-border hover:border-primary/30 hover:bg-secondary/50"
                    }`}
                  >
                    <div className={`h-12 w-12 rounded-xl flex items-center justify-center shrink-0 ${
                      selectedLevel === level.id ? "gradient-primary" : "bg-secondary"
                    }`}>
                      <span className={`font-bold text-lg ${selectedLevel === level.id ? "text-primary-foreground" : "text-muted-foreground"}`}>
                        {level.id === "beginner" ? "1" : level.id === "intermediate" ? "2" : "3"}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-display font-semibold">{level.label}</h3>
                      <p className="text-sm text-muted-foreground">{level.description}</p>
                    </div>
                    {selectedLevel === level.id && (
                      <CheckCircle className="h-5 w-5 text-primary ml-auto" />
                    )}
                  </button>
                ))}
              </div>

              <div className="flex justify-between mt-8">
                <Button variant="ghost" onClick={() => setStep(1)}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
                <Button
                  onClick={handleFinish}
                  disabled={!selectedLevel}
                  className="gradient-primary border-0 px-6"
                >
                  Start Learning
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Onboarding;
