ALTER TABLE public.user_progress
ADD COLUMN saved_resources TEXT[] NOT NULL DEFAULT '{}'::text[];