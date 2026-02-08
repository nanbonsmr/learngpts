-- Drop the overly permissive update policy
DROP POLICY "Service role can update certificates" ON public.certificates;

-- Create a restrictive update policy - only allow updating own record
-- The webhook will use service_role key which bypasses RLS entirely
CREATE POLICY "Users can update own certificate"
ON public.certificates FOR UPDATE
USING (auth.uid() = user_id);