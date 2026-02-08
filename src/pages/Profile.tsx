import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { useAppStore } from "@/store/useAppStore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Save, User, Mail, Calendar, BookOpen, Target } from "lucide-react";
import { toast } from "@/components/ui/sonner";
import { categories } from "@/data/content";

const displayNameSchema = z
  .string()
  .trim()
  .max(100, "Display name must be less than 100 characters");

const Profile = () => {
  const { user } = useAuth();
  const { user: appUser } = useAppStore();
  const [displayName, setDisplayName] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | undefined>();

  useEffect(() => {
    if (!user) return;

    const fetchProfile = async () => {
      const { data, error } = await supabase
        .from("profiles" as any)
        .select("display_name")
        .eq("user_id", user.id)
        .maybeSingle();

      if (error) {
        console.error("Failed to fetch profile:", error.message);
      } else if (data) {
        setDisplayName((data as any).display_name || "");
      }
      setLoading(false);
    };

    fetchProfile();
  }, [user]);

  const handleSave = async () => {
    const result = displayNameSchema.safeParse(displayName);
    if (!result.success) {
      setError(result.error.errors[0].message);
      return;
    }
    setError(undefined);

    if (!user) return;
    setSaving(true);

    const { error: updateError } = await supabase
      .from("profiles" as any)
      .update({ display_name: result.data } as any)
      .eq("user_id", user.id);

    if (updateError) {
      toast.error("Failed to update profile. Please try again.");
    } else {
      toast.success("Profile updated successfully!");
    }
    setSaving(false);
  };

  const selectedCategory = categories.find((c) => c.id === appUser.goal);
  const totalCompleted = appUser.completedLessons.length;
  const totalLessons = categories.reduce((acc, c) => acc + c.lessons.length, 0);
  const joinedDate = user?.created_at
    ? new Date(user.created_at).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "—";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">
              Your Profile
            </h1>
            <p className="text-muted-foreground">
              Manage your account information
            </p>
          </motion.div>

          {/* Profile Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="font-display text-xl flex items-center gap-2">
                  <User className="h-5 w-5 text-primary" />
                  Account Details
                </CardTitle>
                <CardDescription>
                  Update your display name and view your account info
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                {/* Display Name */}
                <div className="space-y-2">
                  <Label htmlFor="displayName">Display Name</Label>
                  {loading ? (
                    <div className="h-10 rounded-md bg-muted animate-pulse" />
                  ) : (
                    <Input
                      id="displayName"
                      placeholder="Enter your display name"
                      value={displayName}
                      onChange={(e) => {
                        setDisplayName(e.target.value);
                        if (error) setError(undefined);
                      }}
                      maxLength={100}
                    />
                  )}
                  {error && <p className="text-sm text-destructive">{error}</p>}
                </div>

                {/* Email (read-only) */}
                <div className="space-y-2">
                  <Label>Email</Label>
                  <div className="flex items-center gap-2 h-10 px-3 rounded-md border border-input bg-muted/50 text-sm">
                    <Mail className="h-4 w-4 text-muted-foreground shrink-0" />
                    <span className="truncate">{user?.email || "—"}</span>
                  </div>
                </div>

                {/* Joined */}
                <div className="space-y-2">
                  <Label>Member Since</Label>
                  <div className="flex items-center gap-2 h-10 px-3 rounded-md border border-input bg-muted/50 text-sm">
                    <Calendar className="h-4 w-4 text-muted-foreground shrink-0" />
                    <span>{joinedDate}</span>
                  </div>
                </div>

                <Button
                  onClick={handleSave}
                  disabled={saving || loading}
                  className="gradient-primary border-0"
                >
                  {saving ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save className="h-4 w-4" />
                      Save Changes
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Learning Stats Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="font-display text-xl flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Learning Stats
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="rounded-xl border border-border p-4 text-center">
                    <p className="text-2xl font-display font-bold gradient-text">
                      {totalCompleted}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Lessons Completed
                    </p>
                  </div>
                  <div className="rounded-xl border border-border p-4 text-center">
                    <p className="text-2xl font-display font-bold gradient-text">
                      {totalLessons > 0
                        ? Math.round((totalCompleted / totalLessons) * 100)
                        : 0}
                      %
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Overall Progress
                    </p>
                  </div>
                  <div className="rounded-xl border border-border p-4 text-center">
                    <div className="flex items-center justify-center gap-1">
                      <Target className="h-5 w-5 text-primary" />
                      <p className="text-sm font-medium truncate">
                        {selectedCategory?.title || "Not set"}
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Learning Goal
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
