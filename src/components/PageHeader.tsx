import { Link } from 'react-router-dom';
import svgPaths from '../svg-tw6tdu7yjv';

/** 시공사례/관리자 등 내부 페이지 상단 헤더 (로고 클릭 시 홈으로) */
export default function PageHeader({ right }: { right?: React.ReactNode }) {
  return (
    <div className="sticky top-0 z-40 bg-[#edede9] h-[64px] md:h-[78px] flex items-center justify-between px-4 md:px-8 w-full border-b border-neutral-200">
      <Link to="/" aria-label="홈으로" className="block">
        <div className="h-[15px] md:h-[17.28px] w-[145px] md:w-[167.229px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 168 18">
            <g>
              <path d={svgPaths.p17a83d00} fill="#3B3B3B" />
              <path d={svgPaths.p3848b380} fill="#3B3B3B" />
              <path d={svgPaths.pa893a00} fill="#3B3B3B" />
              <path d={svgPaths.pde8bf80} fill="#3B3B3B" />
              <path d={svgPaths.p1ab5a900} fill="#3B3B3B" />
              <path d={svgPaths.p1322f900} fill="#3B3B3B" />
              <path d={svgPaths.p327d8280} fill="#3B3B3B" />
              <path d={svgPaths.p276359f0} fill="#3B3B3B" />
              <path d={svgPaths.p2ebd4700} fill="#3B3B3B" />
            </g>
          </svg>
        </div>
      </Link>
      {right}
    </div>
  );
}
