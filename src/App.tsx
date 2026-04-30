import { useState, useEffect, useRef } from "react";
import emailjs from '@emailjs/browser';
import svgPaths from "./svg-tw6tdu7yjv";

const imgKV = "/images/KVimg.png";
const imgImg = "/images/54d68b18c1b63f9c8456cb00cd5868cdb04fe963.png";
const imgImg1 = "/images/becc429958d279e6672203322f7801c2104c7cb7.png";
const imgImg2 = "/images/36736eaa0e8deb6e7a161d9b3cd9c3bb7092e592.png";
const imgContainer = "/images/ce796b1a5e0c977d91cf91edac792b00bc918e1b.png";

const imageSets = {
  interior: [
    "/images/1f1f3e5ee19407f120bf1eb79fb1d98689ac7d47.png",
    "/images/3b4f898982cfb679e0f207c6b4cb86fcdad01cde.png",
    "/images/218a62c839d7956f51ec383fef3419a2b52d88f8.png",
    "/images/2a9404edefebcf246c9f901c7a127ddf350ec7dd.png",
    "/images/0ce7b511e4072a9a4d8b1e812b98f76d8fdf7070.png",
    "/images/ea3f597768cc6ab6bec32f03139ae3d0df14339c.png",
  ],
  special: [
    "/images/speacial1.png",
    "/images/speacial2.png",
    "/images/speacial3.png",
    "/images/speacial4.png",
    "/images/speacial5.png",
    "/images/speacial6.png",
  ],
  europe: [
    "/images/uerope1.png",
    "/images/uerope2.png",
    "/images/uerope3.png",
    "/images/uerope4.png",
    "/images/uerope5.png",
    "/images/uerope6.png",
  ],
};

function Svg() {
  return (
    <div className="absolute left-[calc(50%-8px)] size-[14px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="SVG">
          <g id="Vector"></g>
          <path d={svgPaths.p3c3d0b90} fill="var(--fill-0, #0E1011)" id="Vector_2" />
          <path d={svgPaths.p29b3d400} fill="var(--fill-0, #0E1011)" id="Vector_3" />
          <path d={svgPaths.p1247d00} fill="var(--fill-0, #0E1011)" id="Vector_4" />
          <path d={svgPaths.p6d1fe80} fill="var(--fill-0, #0E1011)" id="Vector_5" />
          <path d={svgPaths.p781ac00} fill="var(--fill-0, #0E1011)" id="Vector_6" />
          <path d={svgPaths.p3d0dd700} fill="var(--fill-0, #0E1011)" id="Vector_7" />
          <path d={svgPaths.p39aa1980} fill="var(--fill-0, #0E1011)" id="Vector_8" />
          <path d={svgPaths.p18122300} fill="var(--fill-0, #0E1011)" id="Vector_9" />
          <path d={svgPaths.p29287900} fill="var(--fill-0, #0E1011)" id="Vector_10" />
        </g>
      </svg>
    </div>
  );
}

function Background() {
  return (
    <div className="relative bg-[#edede9] h-[28px] rounded-[500px] w-[44px]" data-name="Background">
      <div className="absolute border border-[#edede9] border-solid inset-0 rounded-[500px]" data-name="Border" />
      <Svg />
    </div>
  );
}

function Frame6() {
  return (
    <div className="h-[17.28px] relative w-[167.229px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 168 18">
        <g id="Frame 37">
          <g id="ART SPREAD">
            <path d={svgPaths.p17a83d00} fill="var(--fill-0, #3B3B3B)" />
            <path d={svgPaths.p3848b380} fill="var(--fill-0, #3B3B3B)" />
            <path d={svgPaths.pa893a00} fill="var(--fill-0, #3B3B3B)" />
            <path d={svgPaths.pde8bf80} fill="var(--fill-0, #3B3B3B)" />
            <path d={svgPaths.p1ab5a900} fill="var(--fill-0, #3B3B3B)" />
            <path d={svgPaths.p1322f900} fill="var(--fill-0, #3B3B3B)" />
            <path d={svgPaths.p327d8280} fill="var(--fill-0, #3B3B3B)" />
            <path d={svgPaths.p276359f0} fill="var(--fill-0, #3B3B3B)" />
            <path d={svgPaths.p2ebd4700} fill="var(--fill-0, #3B3B3B)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NavDesktop() {
  return (
    <div className="bg-[#edede9] h-[78px] flex items-center justify-between px-4 md:px-8 relative w-full" data-name="Nav - Desktop">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <Frame6 />
      </div>
      <div className="ml-auto">
        <Background />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-col w-full" data-name="Header">
      <NavDesktop />
    </div>
  );
}

function Frame7({ isVisible, onAnimationEnd }: { isVisible: boolean; onAnimationEnd: () => void }) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onAnimationEnd();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onAnimationEnd]);

  return (
    <div
      className={`flex flex-col gap-5 items-center justify-center pb-[50px] md:pb-[100px] absolute inset-0 text-[#3b3b3b] text-center transition-opacity duration-1000 ease-in-out px-4 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      style={{ zIndex: isVisible ? 10 : 0 }}
    >
      <div className="font-['Fahkwang:Medium','Noto_Sans_KR:Medium',sans-serif] text-[22px] md:text-[36px] leading-tight md:leading-[78px] w-full max-w-[1053px]" style={{ fontVariationSettings: "'wght' 500" }}>
        <p>벽을 넘어 공간 전체를 디자인합니다</p>
      </div>
      <div className="font-['Fahkwang:Regular','Noto_Sans_KR:Regular',sans-serif] text-[15px] md:text-[20px] leading-relaxed md:leading-[32px] w-full max-w-[621px]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="mb-0">Art Spread는 색과 질감으로 공간의 감성을 완성시키는</p>
        <p>인테리어페인트 전문 회사입니다.</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-[#edede9] h-[50vh] md:h-[70vh] lg:h-[1080px] overflow-hidden relative shrink-0 w-full">
      <img
        alt=""
        className="absolute inset-0 size-full object-cover max-w-none"
        src={imgKV}
        onError={(e) => { e.currentTarget.style.display = 'none'; }}
      />
    </div>
  );
}

function Grid() {
  return (
    <div className="text-[#3b3b3b] text-center md:text-left">
      <p className="font-['Fahkwang:Medium','Noto_Sans_KR:Medium',sans-serif] text-[18px] md:text-[24px] leading-[1.7] md:leading-[1.7] mb-5 md:mb-6" style={{ fontVariationSettings: "'wght' 500" }}>
        Art Spread는 '디자인 컬러 스튜디오'로서<br />
        단순히 도장하는 것이 아닌,<br />
        공간의 무드를 디자인 하는 작업을 합니다.
      </p>
      <p className="font-['Fahkwang:Regular','Noto_Sans_KR:Regular',sans-serif] text-[14px] md:text-[18px] leading-[1.9] text-[#555]" style={{ fontVariationSettings: "'wght' 400" }}>
        색채, 질감, 빛의 조화를 통해 공간이 가진 본연의 매력을 드러내고,<br />
        감각적이면서도 안정감 있는 분위기를 만들어<br />
        벽 하나에도 감성이 담기도록<br />
        Art Spread의 터치는 공간을 새롭게 만듭니다.
      </p>
    </div>
  );
}

function Grid1() {
  return (
    <div className="w-full md:w-[832px] shrink-0">
      <Grid />
    </div>
  );
}

function SectionSectionAboutContainer() {
  return (
    <div className="flex flex-col md:flex-row items-start justify-between relative shrink-0 w-full px-4 md:px-10 max-w-[1728px] gap-4 md:gap-8">
      <div className="font-['Fahkwang:Light',sans-serif] text-[28px] md:text-[48px] lg:text-[62.6px] leading-tight md:leading-[70.4px] text-[#3b3b3b] shrink-0 text-center md:text-left w-full md:w-auto">
        <p className="mb-0">Where Color, Texture and</p>
        <p>Light Redefine Space</p>
      </div>
      <Grid1 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="bg-[#edede9] flex flex-col items-center w-full py-5 md:py-[10px]">
      <SectionSectionAboutContainer />
    </div>
  );
}

function Section() {
  return (
    <div className="bg-[#edede9] flex flex-col gap-[40px] md:gap-[102px] items-center justify-center overflow-clip relative shrink-0 w-full">
      <Frame8 />
      <Frame21 />
    </div>
  );
}

function SectionHeading({ label, title, description, white }: { label: string; title: string; description: string; white?: boolean }) {
  const color = white ? 'text-white' : 'text-[#3b3b3b]';
  const labelColor = white ? 'text-white' : 'text-[#4a5565]';
  const descColor = white ? 'text-white' : 'text-[#364153]';
  const lineColor = white ? 'black' : '#3B3B3B';

  return (
    <div className="flex flex-col gap-[16px] md:gap-[24px] items-center relative shrink-0 w-full max-w-[1440px] px-4">
      <p className={`font-['Fahkwang:Regular',sans-serif] ${labelColor} text-[14px] md:text-[18px] text-center`} style={{ fontVariationSettings: "'wght' 400" }}>{label}</p>
      <p className={`font-['Fahkwang:Regular','Noto_Sans_KR:Regular',sans-serif] ${color} text-[28px] md:text-[48px] text-center`} style={{ fontVariationSettings: "'wght' 400" }}>{title}</p>
      <p className={`font-['Fahkwang:Regular','Noto_Sans_KR:Regular',sans-serif] ${descColor} text-[14px] md:text-[20px] text-center`} style={{ fontVariationSettings: "'wght' 400" }}>{description}</p>
      <div className="h-0 relative shrink-0 w-[96px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 96 1">
            <line stroke={`var(--stroke-0, ${lineColor})`} x2="96" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ServiceCardOverlay({ title, description }: { title: string; description: React.ReactNode }) {
  return (
    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.4)] via-[rgba(128,128,128,0.2)] to-[rgba(255,255,255,0)]">
      <div className="absolute flex flex-col font-['Pretendard:Bold',sans-serif] gap-4 items-start left-[5px] overflow-clip px-[25px] py-0 top-[40px] md:top-[56px] w-[calc(100%-5px)]">
        <p className="leading-tight shrink-0 text-[22px] md:text-[36px] text-white w-full">{title}</p>
        <div className="leading-[26px] shrink-0 text-[13px] md:text-[16px] text-[rgba(255,255,255,0.8)] w-full">
          {description}
        </div>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="bg-[rgba(214,204,194,0.3)] flex gap-[10px] items-center justify-center overflow-clip px-[15px] py-[6px] relative rounded-[5px] shrink-0">
      <p className="font-['Pretendard:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#364153] text-[13px] md:text-[16px] text-nowrap whitespace-pre">친환경 페인트</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="bg-[rgba(214,204,194,0.3)] flex gap-[10px] items-center justify-center overflow-clip px-[15px] py-[6px] relative rounded-[5px] shrink-0">
      <p className="font-['Pretendard:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#364153] text-[13px] md:text-[16px] text-nowrap whitespace-pre">내오염성/유지관리 용이</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="bg-[rgba(214,204,194,0.3)] flex gap-[10px] items-center justify-center overflow-clip px-[15px] py-[6px] relative rounded-[5px] shrink-0">
      <p className="font-['Pretendard:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#364153] text-[13px] md:text-[16px] text-nowrap whitespace-pre">주거·상업공간 모두 적용</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-[#edede9] flex flex-col gap-[10px] w-full overflow-clip relative shrink-0 md:flex-1">
      <div className="h-[240px] md:h-[500px] lg:h-[679px] overflow-clip relative shrink-0 w-full">
        <img alt="" className="absolute inset-0 size-full object-cover pointer-events-none" src={imgImg} onError={(e) => { e.currentTarget.style.display = 'none'; }} />
        <ServiceCardOverlay
          title="일반도장 시공"
          description={
            <>
              <p className="mb-0">가장 기본이지만, 가장 중요합니다</p>
              <p className="mb-0">균일하고 깨끗한 마감, 친환경 페인트 사용으로 안전하고</p>
              <p>건강한 공간을 제공합니다</p>
            </>
          }
        />
      </div>
      <div className="flex flex-wrap gap-[10px] items-start relative shrink-0 w-full px-1">
        <Frame23 />
        <Frame24 />
        <Frame25 />
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="bg-[rgba(214,204,194,0.3)] flex gap-[10px] items-center justify-center overflow-clip px-[15px] py-[6px] relative rounded-[5px] shrink-0">
      <p className="font-['Pretendard:Medium',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#364153] text-[13px] md:text-[16px] text-nowrap whitespace-pre">고객 맞춤 질감 표현</p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="bg-[rgba(214,204,194,0.3)] flex gap-[10px] items-center justify-center overflow-clip px-[15px] py-[6px] relative rounded-[5px] shrink-0">
      <p className="font-['Pretendard:Medium',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#364153] text-[13px] md:text-[16px] text-nowrap whitespace-pre">깨끗한 마감·고급스러운 텍스쳐</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-[#edede9] flex flex-col gap-[10px] w-full overflow-clip relative shrink-0 md:flex-1">
      <div className="h-[240px] md:h-[500px] lg:h-[679px] overflow-clip relative shrink-0 w-full">
        <img alt="" className="absolute inset-0 size-full object-cover pointer-events-none" src={imgImg1} onError={(e) => { e.currentTarget.style.display = 'none'; }} />
        <ServiceCardOverlay
          title="스페셜 도장"
          description={<p>색보다 깊이있는 '질감'으로 공간을 표현합니다</p>}
        />
      </div>
      <div className="flex flex-wrap gap-[10px] items-start relative shrink-0 w-full px-1">
        <Frame29 />
        <Frame30 />
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="bg-[rgba(214,204,194,0.3)] flex gap-[10px] items-center justify-center overflow-clip px-[15px] py-[6px] relative rounded-[5px] shrink-0">
      <p className="font-['Pretendard:Medium',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#364153] text-[13px] md:text-[16px] text-nowrap whitespace-pre">전문가의 빛, 가구 재질 맞춤 컬러 제안</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-[#edede9] flex flex-col gap-[10px] w-full overflow-clip relative shrink-0 md:flex-1">
      <div className="h-[240px] md:h-[500px] lg:h-[679px] overflow-clip relative shrink-0 w-full">
        <img alt="" className="absolute inset-0 size-full object-cover pointer-events-none" src={imgImg2} onError={(e) => { e.currentTarget.style.display = 'none'; }} />
        <ServiceCardOverlay
          title="컬러 컨설팅"
          description={<p>공간의 분위기는 색에서 시작됩니다</p>}
        />
      </div>
      <div className="flex flex-wrap gap-[10px] items-start relative shrink-0 w-full px-1">
        <Frame34 />
      </div>
    </div>
  );
}

function Section3() {
  return (
    <div className="bg-[#edede9] flex flex-col gap-[30px] md:gap-[35px] items-center overflow-clip pb-0 pt-[60px] md:pt-[100px] relative shrink-0 w-full" data-name="Section 5">
      <SectionHeading
        label="Color, Texture, Space"
        title="서비스 안내"
        description="색과 질감으로 공간의 개성을 완성합니다."
      />
      <div className="flex flex-col md:flex-row gap-[20px] md:gap-[32px] items-stretch overflow-clip relative shrink-0 w-full px-4 md:px-8 max-w-[1728px]">
        <Frame14 />
        <Frame15 />
        <Frame16 />
      </div>
    </div>
  );
}

type TabType = 'interior' | 'special' | 'europe';

function PrimitiveButton({ isActive, onClick, children }: { isActive: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <div
      className={`flex gap-[6px] items-center justify-center px-3 md:px-[8.8px] py-[4.8px] relative rounded-[14px] shrink-0 cursor-pointer transition-all ${
        isActive ? 'bg-[#3b3b3b]' : ''
      }`}
      data-name="Primitive.button"
      onClick={onClick}
    >
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <p
        className={`font-['Fahkwang:${isActive ? 'Medium' : 'Regular'}','Noto_Sans_KR:${isActive ? 'Medium' : 'Regular'}',sans-serif] leading-[20px] relative shrink-0 text-[13px] md:text-[16px] ${
          isActive ? 'text-white' : 'text-[#3b3b3b]'
        }`}
        style={{ fontVariationSettings: `'wght' ${isActive ? 500 : 400}` }}
      >
        {children}
      </p>
    </div>
  );
}

function TabList({ activeTab, onTabChange }: { activeTab: TabType; onTabChange: (tab: TabType) => void }) {
  return (
    <div className="relative rounded-[14px] shrink-0 w-full" data-name="Tab List">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="flex gap-[10px] md:gap-[15px] items-center justify-center px-[3px] py-[4px] relative w-full">
          <PrimitiveButton isActive={activeTab === 'interior'} onClick={() => onTabChange('interior')}>
            인테리어페인트
          </PrimitiveButton>
          <PrimitiveButton isActive={activeTab === 'special'} onClick={() => onTabChange('special')}>
            스페셜페인트
          </PrimitiveButton>
          <PrimitiveButton isActive={activeTab === 'europe'} onClick={() => onTabChange('europe')}>
            유럽미장
          </PrimitiveButton>
        </div>
      </div>
    </div>
  );
}

function Frame({ images }: { images: string[] }) {
  return (
    <div className="flex flex-row gap-[10px] md:gap-[20px] shrink-0 md:w-[2400px] lg:w-[3476px] md:h-[450px] lg:h-[690px]">
      {images.map((src, i) => (
        <div
          key={i}
          className="relative flex-none overflow-hidden w-[80vw] aspect-[4/5] [scroll-snap-align:start] md:[scroll-snap-align:none] md:flex-1 md:w-auto md:aspect-auto md:h-full"
        >
          <img alt="" className="absolute inset-0 size-full object-cover pointer-events-none" src={src} onError={(e) => { e.currentTarget.style.display = 'none'; }} />
        </div>
      ))}
    </div>
  );
}

function Frame26({ images }: { images: string[] }) {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollLeft = 0;
    }
  }, [images]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    containerRef.current.scrollLeft = scrollLeft - (x - startX);
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);

  return (
    <div
      ref={containerRef}
      className={`flex gap-[10px] md:gap-[20px] items-start overflow-x-auto overflow-y-hidden shrink-0 w-full select-none hide-scrollbar
        [scroll-snap-type:x_mandatory] md:[scroll-snap-type:none]
        px-[10vw] md:px-0
        ${isDragging ? 'cursor-grabbing' : 'md:cursor-grab'}`}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      style={{ WebkitOverflowScrolling: 'touch' }}
    >
      <Frame images={images} />
    </div>
  );
}

function Section1() {
  const [activeTab, setActiveTab] = useState<TabType>('interior');
  const currentImages = imageSets[activeTab];

  return (
    <div className="bg-[#edede9] flex flex-col gap-[30px] md:gap-[35px] items-center justify-center overflow-clip pb-0 pt-[60px] md:pt-[100px] relative shrink-0 w-full" data-name="Section3">
      <SectionHeading
        label="Best Case"
        title="시공사례"
        description="색과 질감으로 공간의 개성을 완성합니다."
      />
      <TabList activeTab={activeTab} onTabChange={setActiveTab} />
      <Frame26 images={currentImages} />
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[22px] relative w-[21.31px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Icon">
          <path d={svgPaths.p3c309680} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [privacyAgreed, setPrivacyAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setSubmitMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setSubmitMessage({ type: 'error', text: '모든 필드를 입력해주세요.' });
      return;
    }

    if (!privacyAgreed) {
      setSubmitMessage({ type: 'error', text: '개인정보처리방침에 동의해주세요.' });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitMessage({ type: 'error', text: '올바른 이메일 형식을 입력해주세요.' });
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const serviceId = 'service_1lvdtio';
      const templateId = 'template_ljn5wxj';
      const publicKey = 'WCWGQOFdiuHkHOaxN';

      await emailjs.send(
        serviceId,
        templateId,
        {
          to_email: 'artspread7@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        publicKey
      );

      setSubmitMessage({ type: 'success', text: '문의가 성공적으로 전송되었습니다.' });
      setFormData({ name: '', email: '', phone: '', message: '' });
      setPrivacyAgreed(false);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitMessage({ type: 'error', text: '문의 전송에 실패했습니다. 다시 시도해주세요.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldClass = "w-full bg-transparent text-white placeholder:text-[rgba(255,255,255,0.8)] text-[14px] py-2 focus:outline-none font-['SF_Pro:Regular',sans-serif]";
  const labelClass = "font-['SF_Pro:Medium',sans-serif] font-[510] text-[15px] md:text-[17px] text-white tracking-[-0.935px]";

  return (
    <form onSubmit={handleSubmit} className="relative shrink-0 w-full max-w-[980px] px-4 md:px-0">
      <div className="flex flex-col">
        {/* 성함 */}
        <div className="border-b border-[rgba(255,255,255,0.1)] py-4">
          <div className="flex items-center gap-1 mb-2">
            <span className={labelClass} style={{ fontVariationSettings: "'wdth' 100" }}>성함</span>
            <span className="text-[#a59266] text-[20px] leading-none">*</span>
          </div>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            placeholder="성함을 입력하세요"
            className={fieldClass}
            style={{ fontVariationSettings: "'wdth' 100" }}
          />
        </div>

        {/* 이메일 */}
        <div className="border-b border-[rgba(255,255,255,0.1)] py-4">
          <div className="flex items-center gap-1 mb-2">
            <span className={labelClass} style={{ fontVariationSettings: "'wdth' 100" }}>이메일</span>
            <span className="text-[#a59266] text-[20px] leading-none">*</span>
          </div>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            placeholder="이메일을 입력하세요"
            className={fieldClass}
            style={{ fontVariationSettings: "'wdth' 100" }}
          />
        </div>

        {/* 연락처 */}
        <div className="border-b border-[rgba(255,255,255,0.1)] py-4">
          <div className="flex items-center gap-1 mb-2">
            <span className={labelClass} style={{ fontVariationSettings: "'wdth' 100" }}>연락처</span>
            <span className="text-[#a59266] text-[20px] leading-none">*</span>
          </div>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            placeholder="연락처를 입력하세요 (ex : 01012345678)"
            className={fieldClass}
            style={{ fontVariationSettings: "'wdth' 100" }}
          />
        </div>

        {/* 상담내용 */}
        <div className="border border-[rgba(255,255,255,0.1)] mt-4 rounded">
          <div className="flex items-center gap-1 px-4 pt-4 pb-2">
            <span className={labelClass} style={{ fontVariationSettings: "'wdth' 100" }}>상담내용</span>
            <span className="text-[#a59266] text-[20px] leading-none">*</span>
          </div>
          <textarea
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            placeholder="문의내용을 입력하세요"
            className="w-full bg-transparent text-white placeholder:text-[rgba(255,255,255,0.8)] text-[14px] resize-none focus:outline-none h-[160px] md:h-[196px] px-4 pb-4 font-['SF_Pro:Regular',sans-serif]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          />
        </div>
      </div>

      {/* 개인정보 동의 + 약관 */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-6 gap-3">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={privacyAgreed}
            onChange={(e) => setPrivacyAgreed(e.target.checked)}
            className="opacity-0 absolute"
          />
          <div className={`w-[22px] h-[22px] flex-none flex items-center justify-center scale-y-[-100%] ${privacyAgreed ? 'opacity-100' : 'opacity-50'}`}>
            <Icon />
          </div>
          <span className="font-['SF_Pro:Medium',sans-serif] font-[510] text-[13px] md:text-[14px] text-[rgba(255,255,255,0.55)] tracking-[-0.7px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            개인정보처리방침에 동의합니다
          </span>
        </label>
        <div className="flex items-center gap-[6px] cursor-pointer">
          <span className="font-['SF_Pro:Medium',sans-serif] font-[510] text-[13px] md:text-[14px] text-[rgba(255,255,255,0.55)] tracking-[-0.63px]" style={{ fontVariationSettings: "'wdth' 100" }}>약관확인하기</span>
          <div className="h-[8.381px] w-[10.138px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 9">
              <path d={svgPaths.p27f5d300} fill="var(--fill-0, white)" id="â" />
            </svg>
          </div>
        </div>
      </div>

      {/* 제출 버튼 */}
      <div className="flex justify-center mt-6">
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-[#a59266] text-white px-[40px] py-[12px] rounded-[5px] font-['SF_Pro:Medium',sans-serif] text-[16px] hover:bg-[#8b7a55] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          {isSubmitting ? '전송 중...' : '문의하기'}
        </button>
      </div>

      {submitMessage && (
        <div className={`mt-4 text-center px-[20px] py-[10px] rounded-[5px] text-white text-[14px] font-['SF_Pro:Regular',sans-serif] ${
          submitMessage.type === 'success' ? 'bg-green-600' : 'bg-red-600'
        }`}>
          {submitMessage.text}
        </div>
      )}
    </form>
  );
}

function Section2() {
  return (
    <div className="bg-[#edede9] flex flex-col gap-[10px] items-center justify-center overflow-clip pb-0 pt-[60px] md:pt-[100px] relative shrink-0 w-full" data-name="Section4">
      <div className="flex flex-col gap-[30px] items-center justify-center px-0 py-[50px] md:py-[80px] relative shrink-0 w-full min-h-[600px] md:min-h-[800px]">
        <img
          alt=""
          className="absolute inset-0 size-full object-cover opacity-80 pointer-events-none max-w-none"
          src={imgContainer}
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
        <div className="relative z-10 flex flex-col gap-[30px] items-center w-full">
          <SectionHeading
            label="CONTACT US"
            title="고객문의"
            description="당신의 공간, 어떤 느낌으로 완성하고 싶으신가요?"
            white
          />
          <Form />
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#edede9] flex flex-col gap-[40px] md:gap-[80px] items-center pb-[35px] pt-[62px] px-4 md:px-[101px] relative shrink-0 w-full border-t border-neutral-200" data-name="Footer">
      {/* 이메일 + 개인정보 */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full max-w-[1568px] gap-2 py-[13px]">
        <p className="font-['Fahkwang:Regular',sans-serif] text-[rgba(59,59,59,0.8)] text-[13px] md:text-[16px]">artspread7@gmail.com</p>
        <p className="font-['Fahkwang:Regular','Noto_Sans_KR:Regular',sans-serif] text-[rgba(59,59,59,0.8)] text-[13px] md:text-[16px] tracking-[-0.27px]" style={{ fontVariationSettings: "'wght' 400" }}>개인정보 처리방침</p>
      </div>

      {/* 로고 + 슬로건 */}
      <div className="flex flex-col gap-[16px] items-center pb-[40px] md:pb-[80px] w-full max-w-[695px] text-center">
        <div className="h-[17.28px] relative shrink-0 w-[167.229px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 168 18">
            <g id="ART SPREAD">
              <path d={svgPaths.p17a83d00} fill="var(--fill-0, #3B3B3B)" />
              <path d={svgPaths.p3848b380} fill="var(--fill-0, #3B3B3B)" />
              <path d={svgPaths.pa893a00} fill="var(--fill-0, #3B3B3B)" />
              <path d={svgPaths.pde8bf80} fill="var(--fill-0, #3B3B3B)" />
              <path d={svgPaths.p1ab5a900} fill="var(--fill-0, #3B3B3B)" />
              <path d={svgPaths.p1322f900} fill="var(--fill-0, #3B3B3B)" />
              <path d={svgPaths.p327d8280} fill="var(--fill-0, #3B3B3B)" />
              <path d={svgPaths.p276359f0} fill="var(--fill-0, #3B3B3B)" />
              <path d={svgPaths.p2ebd4700} fill="var(--fill-0, #3B3B3B)" />
            </g>
          </svg>
        </div>
        <p className="font-['Fahkwang:Regular','Noto_Sans_KR:Regular',sans-serif] text-[#3b3b3b] text-[14px] md:text-[16px] text-center" style={{ fontVariationSettings: "'wght' 400" }}>
          디자인 컬러 스튜디오
        </p>
        <div className="flex flex-wrap justify-center font-['Fahkwang:Regular','Noto_Sans_KR:Regular',sans-serif] gap-x-[5px] gap-y-1 text-[#3b3b3b] text-[13px] md:text-[16px] text-center w-full">
          <p style={{ fontVariationSettings: "'wght' 400" }}>색은 공간의 온도입니다.</p>
          <p style={{ fontVariationSettings: "'wght' 400" }}>그 온도를 가장 잘 표현할 수 있는 방법을,</p>
          <p style={{ fontVariationSettings: "'wght' 400" }}>Art Spread가 함께 찾아드리겠습니다.</p>
        </div>
        <p className="font-['Fahkwang:Regular',sans-serif] text-[#3b3b3b] text-[12px] md:text-[14px] text-center">© 2024 Art Spread. All rights reserved.</p>
      </div>
    </div>
  );
}

export default function Frame9() {
  const [showIntro, setShowIntro] = useState(false);
  const [introVisible, setIntroVisible] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowIntro(true);
    const fadeInTimer = setTimeout(() => {
      setIntroVisible(true);
    }, 100);

    const fadeOutTimer = setTimeout(() => {
      setIntroVisible(false);
    }, 3100);

    const contentTimer = setTimeout(() => {
      setShowIntro(false);
      setShowContent(true);
    }, 4100);

    return () => {
      clearTimeout(fadeInTimer);
      clearTimeout(fadeOutTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  const handleIntroEnd = () => {};

  return (
    <div className="bg-[#edede9] flex flex-col items-center relative w-full min-h-screen">
      <Header />
      {showIntro && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-[#edede9]">
          <Frame7 isVisible={introVisible} onAnimationEnd={handleIntroEnd} />
        </div>
      )}
      <div
        className={`w-full transition-opacity duration-1000 ease-in-out flex flex-col gap-[60px] md:gap-[102px] items-center ${
          showContent ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="pt-[78px] w-full">
          <Section />
        </div>
        <Section3 />
        <Section1 />
        <Section2 />
        <Footer />
      </div>
    </div>
  );
}
