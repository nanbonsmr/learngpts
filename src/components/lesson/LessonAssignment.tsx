import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import type { Assignment } from "@/data/modules/types";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { ClipboardCheck, Send, CheckCircle, Loader2 } from "lucide-react";
import { toast } from "sonner";

interface LessonAssignmentProps {
  lessonId: string;
  assignment: Assignment;
}

const LessonAssignment = ({ lessonId, assignment }: LessonAssignmentProps) => {
  const { user } = useAuth();
  const [submissionText, setSubmissionText] = useState("");
  const [checklistCompleted, setChecklistCompleted] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  // Load existing submission
  useEffect(() => {
    if (!user?.id) return;
    const load = async () => {
      setIsLoading(true);
      const { data } = await supabase
        .from("user_assignments")
        .select("*")
        .eq("user_id", user.id)
        .eq("lesson_id", lessonId)
        .maybeSingle();

      if (data) {
        setSubmissionText(data.submission_text || "");
        setChecklistCompleted(data.checklist_completed || []);
        setIsSubmitted(data.completed);
      }
      setIsLoading(false);
    };
    load();
  }, [user?.id, lessonId]);

  const toggleChecklist = (itemId: string) => {
    setChecklistCompleted((prev) =>
      prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]
    );
  };

  const allChecklistDone = assignment.checklist.every((item) =>
    checklistCompleted.includes(item.id)
  );
  const hasTextIfRequired = !assignment.textPrompt || submissionText.trim().length > 0;
  const canSubmit = allChecklistDone && hasTextIfRequired;

  const handleSubmit = async () => {
    if (!user?.id || !canSubmit) return;
    setIsSaving(true);

    const payload = {
      user_id: user.id,
      lesson_id: lessonId,
      submission_text: submissionText.trim() || null,
      checklist_completed: checklistCompleted,
      completed: true,
    };

    const { error } = await supabase
      .from("user_assignments")
      .upsert(payload, { onConflict: "user_id,lesson_id" });

    if (error) {
      console.error("Assignment save error:", error);
      toast.error("Failed to save assignment");
    } else {
      setIsSubmitted(true);
      toast.success("Assignment submitted! 🎉");
    }
    setIsSaving(false);
  };

  if (isLoading) {
    return (
      <div className="glass-card rounded-2xl p-6 md:p-8 mb-6 border-2 border-primary/20">
        <div className="flex items-center justify-center py-8">
          <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.42 }}
      className={`glass-card rounded-2xl p-6 md:p-8 mb-6 border-2 ${
        isSubmitted ? "border-accent/30 bg-accent/5" : "border-primary/20"
      }`}
    >
      <div className="flex items-center gap-2 mb-2">
        {isSubmitted ? (
          <CheckCircle className="h-5 w-5 text-accent" />
        ) : (
          <ClipboardCheck className="h-5 w-5 text-primary" />
        )}
        <h2 className="font-display font-semibold text-lg">
          {isSubmitted ? "Assignment Completed ✅" : "📝 Assignment"}
        </h2>
      </div>
      <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
        {assignment.instructions}
      </p>

      {/* Checklist */}
      {assignment.checklist.length > 0 && (
        <div className="space-y-3 mb-6">
          <p className="text-xs font-semibold text-foreground/70 uppercase tracking-wider">Tasks</p>
          {assignment.checklist.map((item) => {
            const checked = checklistCompleted.includes(item.id);
            return (
              <label
                key={item.id}
                className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                  checked
                    ? "border-accent/30 bg-accent/5"
                    : "border-border hover:border-primary/30 hover:bg-secondary/30"
                } ${isSubmitted ? "pointer-events-none opacity-80" : ""}`}
              >
                <Checkbox
                  checked={checked}
                  onCheckedChange={() => toggleChecklist(item.id)}
                  disabled={isSubmitted}
                  className="mt-0.5"
                />
                <span className={`text-sm ${checked ? "line-through text-muted-foreground" : "text-foreground"}`}>
                  {item.label}
                </span>
              </label>
            );
          })}
        </div>
      )}

      {/* Text submission */}
      {assignment.textPrompt && (
        <div className="mb-6">
          <p className="text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-2">
            {assignment.textPrompt}
          </p>
          <Textarea
            value={submissionText}
            onChange={(e) => setSubmissionText(e.target.value)}
            placeholder="Paste your response here..."
            disabled={isSubmitted}
            className="min-h-[120px] rounded-xl resize-y"
          />
        </div>
      )}

      {/* Submit button */}
      {!isSubmitted ? (
        <Button
          onClick={handleSubmit}
          disabled={!canSubmit || isSaving}
          className="gradient-primary border-0 w-full sm:w-auto"
        >
          {isSaving ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Send className="mr-2 h-4 w-4" />
          )}
          {isSaving ? "Submitting..." : "Submit Assignment"}
        </Button>
      ) : (
        <p className="text-sm text-accent font-medium">
          Great work! You've completed this assignment.
        </p>
      )}
    </motion.div>
  );
};

export default LessonAssignment;
