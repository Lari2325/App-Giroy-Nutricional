import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://dqvnjdfhiqevdyvlhxhs.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxdm5qZGZoaXFldmR5dmxoeGhzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk5NTEwNjgsImV4cCI6MjAzNTUyNzA2OH0.lWmKjNbMLSgeOLH2YfWqIhxduQP0mclC_4-GKJurDUQ';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);