import { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import CaseGrid from '../components/CaseGrid';
import Lightbox from '../components/Lightbox';
import { fetchCases } from '../lib/cases';
import { staticFallback, staticFallbackAll } from '../lib/staticCases';
import { CATEGORIES, CATEGORY_LABELS } from '../types';
import type { CaseItem, Category } from '../types';

const PAGE_SIZE = 24;

function FilterTab({ active, label, onClick }: { active: boolean; label: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 md:px-5 py-2 rounded-full text-[13px] md:text-[15px] whitespace-nowrap transition-colors font-['Fahkwang:Regular','Noto_Sans_KR:Regular',sans-serif] ${
        active ? 'bg-[#3b3b3b] text-white' : 'text-[#3b3b3b] border border-[#cfcabf] hover:bg-[#e3dfd6]'
      }`}
      style={{ fontVariationSettings: "'wght' 400" }}
    >
      {label}
    </button>
  );
}

export default function CasesPage() {
  const { category: rawCategory } = useParams();
  const navigate = useNavigate();
  const category: Category | null =
    rawCategory && (CATEGORIES as string[]).includes(rawCategory) ? (rawCategory as Category) : null;

  const [items, setItems] = useState<CaseItem[]>([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(false);
  const [loading, setLoading] = useState(true);
  const [usingFallback, setUsingFallback] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const loadPage = useCallback(
    async (pageIndex: number) => {
      setLoading(true);
      try {
        const from = pageIndex * PAGE_SIZE;
        const to = from + PAGE_SIZE - 1;
        const rows = await fetchCases({ category, from, to });

        if (pageIndex === 0 && rows.length === 0) {
          // 마이그레이션 전: 정적 폴백 표시
          setItems(category ? staticFallback(category) : staticFallbackAll());
          setUsingFallback(true);
          setHasMore(false);
          return;
        }
        setUsingFallback(false);
        setItems((prev) => (pageIndex === 0 ? rows : [...prev, ...rows]));
        setHasMore(rows.length === PAGE_SIZE);
      } catch (e) {
        console.error(e);
        if (pageIndex === 0) {
          setItems(category ? staticFallback(category) : staticFallbackAll());
          setUsingFallback(true);
          setHasMore(false);
        }
      } finally {
        setLoading(false);
      }
    },
    [category]
  );

  // 카테고리 변경 시 처음부터 다시 로드
  useEffect(() => {
    setPage(0);
    setItems([]);
    loadPage(0);
  }, [loadPage]);

  const loadMore = () => {
    const next = page + 1;
    setPage(next);
    loadPage(next);
  };

  return (
    <div className="min-h-screen bg-[#edede9]">
      <PageHeader />

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 pt-8 md:pt-12 pb-20">
        {/* 타이틀 */}
        <div className="flex flex-col items-center gap-3 mb-8 md:mb-10 text-center">
          <p className="font-['Fahkwang:Regular',sans-serif] text-[#4a5565] text-[13px] md:text-[16px]">Best Case</p>
          <h1 className="font-['Fahkwang:Regular','Noto_Sans_KR:Regular',sans-serif] text-[#3b3b3b] text-[26px] md:text-[40px]" style={{ fontVariationSettings: "'wght' 400" }}>
            시공사례
          </h1>
        </div>

        {/* 카테고리 필터 */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-8 md:mb-10">
          <FilterTab active={category === null} label="전체" onClick={() => navigate('/cases')} />
          {CATEGORIES.map((c) => (
            <FilterTab
              key={c}
              active={category === c}
              label={CATEGORY_LABELS[c]}
              onClick={() => navigate(`/cases/${c}`)}
            />
          ))}
        </div>

        {/* 그리드 */}
        {items.length === 0 && loading ? (
          <p className="text-center text-[#777] py-20">불러오는 중...</p>
        ) : items.length === 0 ? (
          <p className="text-center text-[#777] py-20">등록된 시공사례가 없습니다.</p>
        ) : (
          <CaseGrid items={items} onItemClick={setLightboxIndex} />
        )}

        {/* 더보기 */}
        {hasMore && !usingFallback && (
          <div className="flex justify-center mt-10">
            <button
              onClick={loadMore}
              disabled={loading}
              className="border border-[#3b3b3b] rounded-full px-8 py-[10px] text-[#3b3b3b] hover:bg-[#3b3b3b] hover:text-white transition-colors text-[14px] md:text-[16px] disabled:opacity-50 font-['Fahkwang:Regular','Noto_Sans_KR:Regular',sans-serif]"
              style={{ fontVariationSettings: "'wght' 400" }}
            >
              {loading ? '불러오는 중...' : '더보기'}
            </button>
          </div>
        )}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          items={items}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onIndexChange={setLightboxIndex}
        />
      )}
    </div>
  );
}
