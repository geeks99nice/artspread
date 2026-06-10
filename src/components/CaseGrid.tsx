import type { CaseItem } from '../types';

interface CaseGridProps {
  items: CaseItem[];
  onItemClick: (index: number) => void;
}

/** 인스타 피드형 정방형 그리드 (모바일 2열 → 태블릿 3열 → PC 4열) */
export default function CaseGrid({ items, onItemClick }: CaseGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[6px] md:gap-[10px] w-full">
      {items.map((item, i) => (
        <button
          key={item.id}
          className="relative aspect-square overflow-hidden bg-[#e0ddd6] group"
          onClick={() => onItemClick(i)}
        >
          <img
            src={item.thumb_url}
            alt={item.title ?? ''}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 size-full object-cover transition-transform duration-300 group-hover:scale-105"
            onError={(e) => { e.currentTarget.style.visibility = 'hidden'; }}
          />
        </button>
      ))}
    </div>
  );
}
