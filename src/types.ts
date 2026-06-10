export type Category =
  | 'interior'
  | 'special'
  | 'europe'
  | 'stone'
  | 'stucco'
  | 'pebble'
  | 'epoxy';

export interface CaseItem {
  id: string;
  category: Category;
  full_url: string;
  thumb_url: string;
  title: string | null;
  description: string | null;
  sort_order: number;
  created_at: string;
}

export const CATEGORY_LABELS: Record<Category, string> = {
  interior: '인테리어페인트',
  special: '스페셜페인트',
  europe: '유럽미장',
  stone: '스톤미장',
  stucco: '스타코',
  pebble: '콩자갈',
  epoxy: '에폭시·우레탄',
};

export const CATEGORIES: Category[] = [
  'interior',
  'special',
  'europe',
  'stone',
  'stucco',
  'pebble',
  'epoxy',
];
