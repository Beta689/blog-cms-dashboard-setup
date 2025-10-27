
import { createClient } from '@supabase/supabase-js';
import { Database } from '@/types/database';

const supabaseUrl = 'https://tnaeyoplblfyqfhowggt.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRuYWV5b3BsYmxmeXFmaG93Z2d0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAzNzE1NjEsImV4cCI6MjA0NTk0NzU2MX0.Nt8Ej2Zt9Ej2Zt9Ej2Zt9Ej2Zt9Ej2Zt9Ej2Zt9E';

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);