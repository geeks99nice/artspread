import { supabase, CASE_BUCKET } from './supabase';
import { makeUploadVariants } from './imageCompress';
import type { CaseItem, Category } from '../types';

/** 카테고리별 시공사례 조회 (최신순, limit) */
export async function fetchByCategory(category: Category, limit = 12): Promise<CaseItem[]> {
  const { data, error } = await supabase
    .from('cases')
    .select('*')
    .eq('category', category)
    .order('sort_order', { ascending: false })
    .order('created_at', { ascending: false })
    .limit(limit);
  if (error) throw error;
  return (data ?? []) as CaseItem[];
}

/**
 * 목록 페이지용 페이지네이션 조회.
 * category가 없으면 전체. range로 무한스크롤/더보기 구현.
 */
export async function fetchCases(opts: {
  category?: Category | null;
  from: number;
  to: number;
}): Promise<CaseItem[]> {
  let q = supabase
    .from('cases')
    .select('*')
    .order('sort_order', { ascending: false })
    .order('created_at', { ascending: false })
    .range(opts.from, opts.to);
  if (opts.category) q = q.eq('category', opts.category);
  const { data, error } = await q;
  if (error) throw error;
  return (data ?? []) as CaseItem[];
}

/** 단일 이미지 업로드: full/thumb WebP 생성 → Storage 업로드 → cases insert */
export async function uploadCase(
  file: Blob,
  category: Category,
  opts: { title?: string | null } = {}
): Promise<CaseItem> {
  const { full, thumb } = await makeUploadVariants(file);
  const id = crypto.randomUUID();
  const fullPath = `${category}/${id}-full.webp`;
  const thumbPath = `${category}/${id}-thumb.webp`;

  const up1 = await supabase.storage
    .from(CASE_BUCKET)
    .upload(fullPath, full, { contentType: 'image/webp', upsert: false });
  if (up1.error) throw up1.error;

  const up2 = await supabase.storage
    .from(CASE_BUCKET)
    .upload(thumbPath, thumb, { contentType: 'image/webp', upsert: false });
  if (up2.error) throw up2.error;

  const full_url = supabase.storage.from(CASE_BUCKET).getPublicUrl(fullPath).data.publicUrl;
  const thumb_url = supabase.storage.from(CASE_BUCKET).getPublicUrl(thumbPath).data.publicUrl;

  const { data, error } = await supabase
    .from('cases')
    .insert({ category, full_url, thumb_url, title: opts.title ?? null })
    .select()
    .single();
  if (error) throw error;
  return data as CaseItem;
}

/** public URL에서 버킷 내부 경로 추출 */
function pathFromPublicUrl(url: string): string | null {
  const marker = `/storage/v1/object/public/${CASE_BUCKET}/`;
  const idx = url.indexOf(marker);
  if (idx === -1) return null;
  return decodeURIComponent(url.slice(idx + marker.length));
}

/** 시공사례 삭제: Storage 파일(full/thumb) + DB row 제거 */
export async function deleteCase(item: CaseItem): Promise<void> {
  const paths = [pathFromPublicUrl(item.full_url), pathFromPublicUrl(item.thumb_url)].filter(
    (p): p is string => !!p
  );
  if (paths.length) {
    const { error } = await supabase.storage.from(CASE_BUCKET).remove(paths);
    if (error) throw error;
  }
  const { error } = await supabase.from('cases').delete().eq('id', item.id);
  if (error) throw error;
}

/** 전체 사례 개수(카테고리별/전체) */
export async function countCases(category?: Category | null): Promise<number> {
  let q = supabase.from('cases').select('*', { count: 'exact', head: true });
  if (category) q = q.eq('category', category);
  const { count, error } = await q;
  if (error) throw error;
  return count ?? 0;
}
