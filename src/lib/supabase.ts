import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!url || !anonKey) {
  // 빌드/배포 시 환경변수 누락을 빠르게 알아채기 위함
  console.warn('Supabase 환경변수(VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY)가 설정되지 않았습니다.');
}

export const supabase = createClient(url, anonKey);

export const CASE_BUCKET = 'case-images';
