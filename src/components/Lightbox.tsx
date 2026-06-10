import { useEffect, useCallback } from 'react';
import type { CaseItem } from '../types';

interface LightboxProps {
  items: CaseItem[];
  index: number;
  onClose: () => void;
  onIndexChange: (next: number) => void;
}

export default function Lightbox({ items, index, onClose, onIndexChange }: LightboxProps) {
  const item = items[index];

  const prev = useCallback(() => {
    onIndexChange((index - 1 + items.length) % items.length);
  }, [index, items.length, onIndexChange]);

  const next = useCallback(() => {
    onIndexChange((index + 1) % items.length);
  }, [index, items.length, onIndexChange]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    // 라이트박스 열려있는 동안 배경 스크롤 잠금
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose, prev, next]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center select-none"
      onClick={onClose}
    >
      {/* 닫기 */}
      <button
        className="absolute top-4 right-4 md:top-6 md:right-6 text-white/80 hover:text-white text-[34px] leading-none w-11 h-11 flex items-center justify-center"
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        aria-label="닫기"
      >
        ×
      </button>

      {/* 이전 */}
      {items.length > 1 && (
        <button
          className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-[40px] w-12 h-12 flex items-center justify-center"
          onClick={(e) => { e.stopPropagation(); prev(); }}
          aria-label="이전"
        >
          ‹
        </button>
      )}

      {/* 이미지 */}
      <img
        src={item.full_url}
        alt={item.title ?? ''}
        className="max-w-[92vw] max-h-[88vh] object-contain"
        decoding="async"
        onClick={(e) => e.stopPropagation()}
      />

      {/* 다음 */}
      {items.length > 1 && (
        <button
          className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-[40px] w-12 h-12 flex items-center justify-center"
          onClick={(e) => { e.stopPropagation(); next(); }}
          aria-label="다음"
        >
          ›
        </button>
      )}

      {/* 인덱스 */}
      {items.length > 1 && (
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/70 text-[13px] font-['Fahkwang:Regular',sans-serif]">
          {index + 1} / {items.length}
        </div>
      )}
    </div>
  );
}
