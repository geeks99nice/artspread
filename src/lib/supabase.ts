import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(url && anonKey);

if (!isSupabaseConfigured) {
  // 환경변수가 없으면 createClient가 예외를 던져 앱 전체가 흰 화면이 되므로,
  // 더미 값으로 클라이언트를 만들어 앱이 죽지 않게 하고(정적 폴백 표시) 경고만 남긴다.
  console.warn(
    'Supabase 환경변수(VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY)가 없습니다. ' +
      'Vercel 환경변수를 설정한 뒤 재배포(Redeploy)하세요.'
  );
}

export const supabase = createClient(
  url || 'https://placeholder.supabase.co',
  anonKey || 'placeholder-anon-key'
);

export const CASE_BUCKET = 'case-images';
