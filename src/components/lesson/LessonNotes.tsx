import { useState, useEffect, useCallback } from "react";
import { StickyNote, Save, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";
import { motion } from "framer-motion";

interface LessonNotesProps {
  lessonId: string;
}

const LessonNotes = ({ lessonId }: LessonNotesProps) => {
  const { session } = useAuth();
  const [note, setNote] = useState("");
  const [savedNote, setSavedNote] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!session?.user?.id) return;
    setLoading(true);
    supabase
      .from("lesson_notes")
      .select("note_text")
      .eq("user_id", session.user.id)
      .eq("lesson_id", lessonId)
      .maybeSingle()
      .then(({ data }) => {
        const text = data?.note_text ?? "";
        setNote(text);
        setSavedNote(text);
        setLoading(false);
      });
  }, [session?.user?.id, lessonId]);

  const saveNote = useCallback(async () => {
    if (!session?.user?.id) {
      toast.error("Sign in to save notes");
      return;
    }
    setSaving(true);
    const { error } = await supabase.from("lesson_notes").upsert(
      {
        user_id: session.user.id,
        lesson_id: lessonId,
        note_text: note,
      },
      { onConflict: "user_id,lesson_id" }
    );
    setSaving(false);
    if (error) {
      toast.error("Failed to save note");
    } else {
      setSavedNote(note);
      toast.success("Note saved!");
    }
  }, [session?.user?.id, lessonId, note]);

  const hasChanges = note !== savedNote;

  if (!session) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.45 }}
      className="glass-card rounded-2xl p-6 md:p-8 mb-6 border-2 border-primary/10"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <StickyNote className="h-5 w-5 text-primary" />
          <h2 className="font-display font-semibold text-lg">Your Notes</h2>
        </div>
        <Button
          variant={hasChanges ? "default" : "outline"}
          size="sm"
          onClick={saveNote}
          disabled={saving || !hasChanges}
          className={hasChanges ? "gradient-primary border-0" : ""}
        >
          {saving ? (
            <Loader2 className="h-3 w-3 mr-1 animate-spin" />
          ) : (
            <Save className="h-3 w-3 mr-1" />
          )}
          {saving ? "Saving..." : hasChanges ? "Save" : "Saved"}
        </Button>
      </div>
      {loading ? (
        <div className="flex items-center justify-center py-8">
          <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
        </div>
      ) : (
        <Textarea
          placeholder="Write your notes, key takeaways, or ideas for this lesson..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="min-h-[120px] resize-y bg-secondary/50 border-border/50"
        />
      )}
      {hasChanges && (
        <p className="text-xs text-muted-foreground mt-2">Unsaved changes</p>
      )}
    </motion.div>
  );
};

export default LessonNotes;
