// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://knmyodorblrvysqtkijm.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtubXlvZG9yYmxydnlzcXRraWptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg4NDg5ODEsImV4cCI6MjA2NDQyNDk4MX0.Y7vRDz9n3EP72k9byQb7fvArzsoXe0peaYW-RHUfmds";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);