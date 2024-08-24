import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tstethfhoovfiqxykjko.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRzdGV0aGZob292ZmlxeHlramtvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY3OTExNTgsImV4cCI6MjAzMjM2NzE1OH0.OPhOLAy8vfrSZgVuLj8dsmojyxU0_X0QpoujHdxQnSI';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
