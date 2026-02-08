-- Create certificates table
CREATE TABLE public.certificates (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  payment_id TEXT,
  payment_status TEXT NOT NULL DEFAULT 'pending',
  certificate_name TEXT,
  issued_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(user_id)
);

-- Enable RLS
ALTER TABLE public.certificates ENABLE ROW LEVEL SECURITY;

-- Users can view their own certificate
CREATE POLICY "Users can view own certificate"
ON public.certificates FOR SELECT
USING (auth.uid() = user_id);

-- Users can insert their own certificate request
CREATE POLICY "Users can create own certificate"
ON public.certificates FOR INSERT
WITH CHECK (auth.uid() = user_id);

-- Service role can update (for webhook)
CREATE POLICY "Service role can update certificates"
ON public.certificates FOR UPDATE
USING (true);

-- Trigger for updated_at
CREATE TRIGGER update_certificates_updated_at
BEFORE UPDATE ON public.certificates
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();