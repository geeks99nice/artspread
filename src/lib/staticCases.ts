import { CATEGORIES } from '../types';
import type { CaseItem, Category } from '../types';

// 마이그레이션 전 폴백용 정적 이미지 세트 (기존 하드코딩 이미지)
// 새 카테고리는 정적 이미지가 없어 빈 배열 → Supabase 등록분만 표시됨
export const imageSets: Record<Category, string[]> = {
  interior: [
    '/images/1f1f3e5ee19407f120bf1eb79fb1d98689ac7d47.webp',
    '/images/3b4f898982cfb679e0f207c6b4cb86fcdad01cde.webp',
    '/images/218a62c839d7956f51ec383fef3419a2b52d88f8.webp',
    '/images/2a9404edefebcf246c9f901c7a127ddf350ec7dd.webp',
    '/images/0ce7b511e4072a9a4d8b1e812b98f76d8fdf7070.webp',
    '/images/ea3f597768cc6ab6bec32f03139ae3d0df14339c.webp',
  ],
  special: [
    '/images/speacial1.webp',
    '/images/speacial2.webp',
    '/images/speacial3.webp',
    '/images/speacial4.webp',
    '/images/speacial5.webp',
    '/images/speacial6.webp',
  ],
  europe: [
    '/images/uerope1.webp',
    '/images/uerope2.webp',
    '/images/uerope3.webp',
    '/images/uerope4.webp',
    '/images/uerope5.webp',
    '/images/uerope6.webp',
  ],
  stone: [],
  stucco: [],
  pebble: [],
  epoxy: [],
};

export function staticFallback(category: Category): CaseItem[] {
  return imageSets[category].map((url, i) => ({
    id: `static-${category}-${i}`,
    category,
    full_url: url,
    thumb_url: url,
    title: null,
    description: null,
    sort_order: 0,
    created_at: '',
  }));
}

export function staticFallbackAll(): CaseItem[] {
  return CATEGORIES.flatMap(staticFallback);
}
