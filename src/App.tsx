import { useState, useEffect, useRef } from "react";
import svgPaths from "./svg-tw6tdu7yjv";

// 이미지 경로 - 이미지가 없어도 빌드가 되도록 문자열로 처리
const imgKV = "/images/KVimg.png";
const imgImg = "/images/54d68b18c1b63f9c8456cb00cd5868cdb04fe963.png";
const imgImg1 = "/images/becc429958d279e6672203322f7801c2104c7cb7.png";
const imgImg2 = "/images/36736eaa0e8deb6e7a161d9b3cd9c3bb7092e592.png";
const imgContainer = "/images/ce796b1a5e0c977d91cf91edac792b00bc918e1b.png";

// 이미지 세트 정의
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
    <div className="absolute bg-[#edede9] h-[28px] left-[522.5px] rounded-[500px] top-0 w-[44px]" data-name="Background">
      <div className="absolute border border-[#edede9] border-solid inset-0 rounded-[500px]" data-name="Border" />
      <Svg />
    </div>
  );
}

function NavbarRight() {
  return (
    <div className="absolute h-[28px] left-[1321.5px] overflow-clip right-[32px] top-1/2 translate-y-[-50%]" data-name="Navbar Right">
      <Background />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute h-[17.28px] left-[calc(50%-0.39px)] top-[calc(50%-0.36px)] translate-x-[-50%] translate-y-[-50%] w-[167.229px]">
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
    <div className="bg-[#edede9] h-[78px] relative shrink-0 w-full" data-name="Nav - Desktop">
      <NavbarRight />
      <Frame6 />
    </div>
  );
}

function Header() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 content-stretch flex flex-col gap-[10px] items-start w-full" data-name="Header">
      <NavDesktop />
    </div>
  );
}

function Frame7({ isVisible, onAnimationEnd }: { isVisible: boolean; onAnimationEnd: () => void }) {
  useEffect(() => {
    if (isVisible) {
      // 3초 후 사라지기 시작
      const timer = setTimeout(() => {
        onAnimationEnd();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onAnimationEnd]);

  return (
    <div 
      className={`box-border content-stretch flex flex-col gap-[20px] h-[860px] items-center justify-center leading-[0] pb-[100px] pt-0 px-0 absolute inset-0 text-[#3b3b3b] text-center w-full transition-opacity duration-1000 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      style={{
        zIndex: isVisible ? 10 : 0,
      }}
    >
      <div className="flex flex-col font-['Fahkwang:Medium','Noto_Sans_KR:Medium',sans-serif] h-[72px] justify-center relative shrink-0 text-[36px] w-[1053px]" style={{ fontVariationSettings: "'wght' 500" }}>
        <p className="leading-[78px]">벽을 넘어 공간 전체를 디자인합니다</p>
      </div>
      <div className="flex flex-col font-['Fahkwang:Regular','Noto_Sans_KR:Regular',sans-serif] justify-center leading-[32px] relative shrink-0 text-[20px] w-[621.181px]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="mb-0">Art Spread는 색과 질감으로 공간의 감성을 완성시키는</p>
        <p>인테리어페인트 전문 회사입니다.</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-[#edede9] h-[1080px] overflow-hidden relative shrink-0 w-[1880px]">
      <div className="absolute h-[1080px] left-1/2 top-0 translate-x-[-50%] w-[1880px]" data-name="1741087663179 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-0 max-w-none top-0 w-full object-cover" src={imgKV} onError={(e) => { e.currentTarget.style.display = 'none'; }} />
        </div>
      </div>
    </div>
  );
}

function Grid() {
  return (
    <div className="absolute h-[348.75px] left-0 right-0 text-[#3b3b3b] top-0" data-name="Grid">
      <p className="absolute font-['Fahkwang:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[29.25px] left-0 text-[18px] top-[80px] w-[704px]" style={{ fontVariationSettings: "'wght' 400" }}>
        색채, 질감, 빛의 조화를 통해 공간이 가진 본연의 매력을 드러내고, 감각적이면서도 안정감 있는 분위기를 만들어 벽 하나에도 감성이 담기도록 Art Spread의 터치는 공간을 새롭게 만듭니다.
      </p>
      <div className="absolute font-['Fahkwang:Medium','Noto_Sans_KR:Medium',sans-serif] leading-[32px] left-0 text-[24px] text-nowrap top-0 whitespace-pre" style={{ fontVariationSettings: "'wght' 500" }}>
        <p className="mb-0">Art Spread는 ‘디자인 컬러 스튜디오’로서 단순히 도장하는 것이 아닌,</p>
        <p>공간의 무드를 디자인 하는 작업을 합니다.</p>
      </div>
    </div>
  );
}

function LinkDefault() {
  return <div className="absolute h-[15px] left-0 top-[396.75px] w-[115.78px]" data-name="Link - Default" />;
}

function Grid1() {
  return (
    <div className="h-[411.75px] relative shrink-0 w-[832px]" data-name="Grid">
      <Grid />
      <LinkDefault />
    </div>
  );
}

function SectionSectionAboutContainer() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[1728.33px]" data-name="Section - Section About → Container">
      <div className="flex flex-col font-['Fahkwang:Light',sans-serif] justify-center leading-[70.4px] not-italic relative shrink-0 text-[#3b3b3b] text-[62.6px] w-[788px]">
        <p className="mb-0">Where Color, Texture and</p>
        <p>Light Redefine Space</p>
      </div>
      <Grid1 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="bg-[#edede9] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip p-[10px] relative shrink-0 w-[1920px]">
      <SectionSectionAboutContainer />
    </div>
  );
}

function Section() {
  return (
    <div className="bg-[#edede9] content-stretch flex flex-col gap-[102px] items-center justify-center overflow-clip relative shrink-0 w-[1920px]" data-name="Section 1">
      <Frame8 />
      <Frame21 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[28px] relative shrink-0 w-[1152px]" data-name="Paragraph">
      <p className="absolute font-['Fahkwang:Regular',sans-serif] leading-[28px] left-[576.19px] not-italic text-[#3b3b3b] text-[18px] text-center text-nowrap top-[-0.6px] translate-x-[-50%] whitespace-pre">Color, Texture, Space</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[48px] relative shrink-0 w-[1152px]" data-name="Heading 2">
      <p className="absolute font-['Fahkwang:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[48px] left-[576px] text-[#3b3b3b] text-[48px] text-center text-nowrap top-[-5px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
        서비스 안내
      </p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[28px] relative shrink-0 w-[1152px]" data-name="Paragraph">
      <p className="absolute font-['Fahkwang:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[28px] left-[576.25px] text-[#3b3b3b] text-[20px] text-center text-nowrap top-[-2.2px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
        색과 질감으로 공간의 개성을 완성합니다.
      </p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-[1440px]" data-name="Container">
      <Paragraph />
      <Heading />
      <Paragraph1 />
      <div className="h-0 relative shrink-0 w-[96px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 96 1">
            <line id="Line 1" stroke="var(--stroke-0, #3B3B3B)" x2="96" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute bg-[rgba(237,237,233,0)] box-border content-stretch flex flex-col font-['Pretendard:Bold',sans-serif] gap-[20px] items-start left-[5px] not-italic overflow-clip px-[25px] py-0 top-[56px] w-[603px]">
      <p className="leading-[36px] relative shrink-0 text-[36px] text-white w-full">일반도장 시공</p>
      <div className="leading-[26px] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.8)] w-full">
        <p className="mb-0">가장 기본이지만, 가장 중요합니다</p>
        <p>균일하고 깨끗한 마감, 친환경 페인트 사용으로 안전하고 건강한 공간을 제공합니다</p>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="absolute bg-gradient-to-t from-[rgba(255,255,255,0)] h-[673px] left-0 overflow-clip to-[80.769%] to-[rgba(0,0,0,0.4)] top-0 via-[40.385%] via-[rgba(128,128,128,0.2)] w-[613px]">
      <Frame11 />
    </div>
  );
}

function Img() {
  return (
    <div className="h-[679px] overflow-clip relative shrink-0 w-full" data-name="img">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImg} onError={(e) => { e.currentTarget.style.display = 'none'; }} />
      <Frame22 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="bg-[rgba(214,204,194,0.3)] box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[15px] py-[6px] relative rounded-[5px] shrink-0">
      <p className="font-['Pretendard:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#364153] text-[16px] text-nowrap whitespace-pre">친환경 페인트</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="bg-[rgba(214,204,194,0.3)] box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[15px] py-[6px] relative rounded-[5px] shrink-0">
      <p className="font-['Pretendard:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#364153] text-[16px] text-nowrap whitespace-pre">내오염성/유지관리 용이</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="bg-[rgba(214,204,194,0.3)] box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[15px] py-[6px] relative rounded-[5px] shrink-0">
      <p className="font-['Pretendard:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#364153] text-[16px] text-nowrap whitespace-pre">주거·상업공간 모두 적용</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-start flex flex-wrap gap-[10px] items-start relative shrink-0 w-full">
      <Frame23 />
      <Frame24 />
      <Frame25 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="basis-0 bg-[#edede9] box-border content-stretch flex flex-col gap-[10px] grow h-[857px] items-start min-h-px min-w-px overflow-clip pb-[5px] pt-0 px-0 relative shrink-0">
      <Img />
      <Frame13 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute bg-[rgba(237,237,233,0)] box-border content-stretch flex flex-col font-['Pretendard:Bold',sans-serif] gap-[20px] items-start left-[5px] not-italic overflow-clip px-[25px] py-0 top-[56px] w-[603px]">
      <p className="leading-[36px] relative shrink-0 text-[36px] text-white w-full">스페셜 도장</p>
      <p className="leading-[26px] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.8)] w-full">색보다 깊이있는 ‘질감’으로 공간을 표현합니다</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="absolute bg-gradient-to-t from-[rgba(255,255,255,0)] h-[673px] left-0 overflow-clip to-[80.769%] to-[rgba(0,0,0,0.4)] top-0 via-[40.385%] via-[rgba(128,128,128,0.2)] w-[613px]">
      <Frame12 />
    </div>
  );
}

function Img1() {
  return (
    <div className="h-[679px] overflow-clip relative shrink-0 w-full" data-name="img">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImg1} onError={(e) => { e.currentTarget.style.display = 'none'; }} />
      <Frame28 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="bg-[rgba(214,204,194,0.3)] box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[15px] py-[6px] relative rounded-[5px] shrink-0">
      <p className="font-['Pretendard:Medium',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#364153] text-[16px] text-nowrap whitespace-pre">고객 맞춤 질감 표현</p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="bg-[rgba(214,204,194,0.3)] box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[15px] py-[6px] relative rounded-[5px] shrink-0">
      <p className="font-['Pretendard:Medium',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#364153] text-[16px] text-nowrap whitespace-pre">깨끗한 마감·고급스러운 텍스쳐</p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-start flex flex-wrap gap-[10px] items-start relative shrink-0 w-full">
      <Frame29 />
      <Frame30 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="basis-0 bg-[#edede9] box-border content-stretch flex flex-col gap-[10px] grow h-[857px] items-start min-h-px min-w-px overflow-clip pb-[5px] pt-0 px-0 relative shrink-0">
      <Img1 />
      <Frame31 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="absolute bg-[rgba(237,237,233,0)] box-border content-stretch flex flex-col font-['Pretendard:Bold',sans-serif] gap-[20px] items-start left-[5px] not-italic overflow-clip px-[25px] py-0 top-[56px] w-[603px]">
      <p className="leading-[36px] relative shrink-0 text-[36px] text-white w-full">컬러 컨설팅</p>
      <p className="leading-[26px] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.8)] w-full">공간의 분위기는 색에서 시작됩니다</p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="absolute bg-gradient-to-t from-[rgba(255,255,255,0)] h-[673px] left-0 overflow-clip to-[80.769%] to-[rgba(0,0,0,0.4)] top-0 via-[40.385%] via-[rgba(128,128,128,0.2)] w-[613px]">
      <Frame32 />
    </div>
  );
}

function Img2() {
  return (
    <div className="h-[679px] overflow-clip relative shrink-0 w-full" data-name="img">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImg2} onError={(e) => { e.currentTarget.style.display = 'none'; }} />
      <Frame33 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="bg-[rgba(214,204,194,0.3)] box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[15px] py-[6px] relative rounded-[5px] shrink-0">
      <p className="font-['Pretendard:Medium',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#364153] text-[16px] text-nowrap whitespace-pre">전문가의 빛, 가구 재질 맞춤 컬러 제안</p>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-start flex flex-wrap gap-[10px] items-start relative shrink-0 w-full">
      <Frame34 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="basis-0 bg-[#edede9] box-border content-stretch flex flex-col gap-[10px] grow h-[857px] items-start min-h-px min-w-px overflow-clip pb-[5px] pt-0 px-0 relative shrink-0">
      <Img2 />
      <Frame35 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="bg-[#edede9] content-stretch flex gap-[32px] items-center overflow-clip relative shrink-0 w-[1728px]">
      <Frame14 />
      <Frame15 />
      <Frame16 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[35px] h-[1080px] items-center relative shrink-0 w-[1880px]">
      <Container />
      <Frame36 />
    </div>
  );
}

function Section3() {
  return (
    <div className="bg-[#edede9] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip pb-0 pt-[100px] px-0 relative shrink-0 w-full" data-name="Section 5">
      <Frame2 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[28px] relative shrink-0 w-[1152px]" data-name="Paragraph">
      <p className="absolute font-['Fahkwang:Regular',sans-serif] leading-[28px] left-[576.19px] not-italic text-[#4a5565] text-[18px] text-center text-nowrap top-[-0.6px] translate-x-[-50%] whitespace-pre">Best Case</p>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[48px] relative shrink-0 w-[1152px]" data-name="Heading 2">
      <p className="absolute font-['Fahkwang:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[48px] left-[576.5px] text-[#3b3b3b] text-[48px] text-center text-nowrap top-[-5px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
        시공사례
      </p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[28px] relative shrink-0 w-[1152px]" data-name="Paragraph">
      <p className="absolute font-['Fahkwang:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[28px] left-[576.25px] text-[#364153] text-[20px] text-center text-nowrap top-[-2.2px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
        색과 질감으로 공간의 개성을 완성합니다.
      </p>
    </div>
  );
}

type TabType = 'interior' | 'special' | 'europe';

function PrimitiveButton({ isActive, onClick, children }: { isActive: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <div 
      className={`box-border content-stretch flex gap-[6px] h-[29px] items-center justify-center px-[8.8px] py-[4.8px] relative rounded-[14px] shrink-0 w-[152.4px] cursor-pointer transition-all ${
        isActive ? 'bg-[#3b3b3b]' : ''
      }`}
      data-name="Primitive.button"
      onClick={onClick}
    >
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <p 
        className={`font-['Fahkwang:${isActive ? 'Medium' : 'Regular'}','Noto_Sans_KR:${isActive ? 'Medium' : 'Regular'}',sans-serif] leading-[20px] relative shrink-0 text-[16px] text-nowrap whitespace-pre ${
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
        <div className="box-border content-stretch flex gap-[15px] items-center justify-center px-[3px] py-[4px] relative w-full">
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

function Container1({ activeTab, onTabChange }: { activeTab: TabType; onTabChange: (tab: TabType) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[240px] items-center relative shrink-0 w-[1440px]" data-name="Container">
      <Paragraph2 />
      <Heading1 />
      <Paragraph3 />
      <div className="h-0 relative shrink-0 w-[96px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 96 1">
            <line id="Line 1" stroke="var(--stroke-0, #3B3B3B)" x2="96" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <TabList activeTab={activeTab} onTabChange={onTabChange} />
    </div>
  );
}

function Frame37({ imageSrc }: { imageSrc: string }) {
  return (
    <div className="[grid-area:1_/_1] relative self-stretch shrink-0 w-[562.667px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[108.73%] left-0 max-w-none top-[-4.36%] w-full" src={imageSrc} onError={(e) => { e.currentTarget.style.display = 'none'; }} />
      </div>
    </div>
  );
}

function Frame38({ imageSrc }: { imageSrc: string }) {
  return (
    <div className="[grid-area:1_/_2] place-self-stretch relative shrink-0">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imageSrc} onError={(e) => { e.currentTarget.style.display = 'none'; }} />
    </div>
  );
}

function Frame17({ imageSrc }: { imageSrc: string }) {
  return (
    <div className="[grid-area:1_/_3] place-self-stretch relative shrink-0">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imageSrc} onError={(e) => { e.currentTarget.style.display = 'none'; }} />
    </div>
  );
}

function Frame18({ imageSrc }: { imageSrc: string }) {
  return (
    <div className="[grid-area:1_/_4] place-self-stretch relative shrink-0">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imageSrc} onError={(e) => { e.currentTarget.style.display = 'none'; }} />
    </div>
  );
}

function Frame19({ imageSrc }: { imageSrc: string }) {
  return (
    <div className="[grid-area:1_/_5] place-self-stretch relative shrink-0">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imageSrc} onError={(e) => { e.currentTarget.style.display = 'none'; }} />
    </div>
  );
}

function Frame20({ imageSrc }: { imageSrc: string }) {
  return (
    <div className="[grid-area:1_/_6] place-self-stretch relative shrink-0">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imageSrc} onError={(e) => { e.currentTarget.style.display = 'none'; }} />
    </div>
  );
}

function Frame({ images }: { images: string[] }) {
  return (
    <div className="bg-[#edede9] gap-[20px] grid grid-cols-[repeat(6,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[690px] overflow-clip relative shrink-0 w-[3476px]">
      <Frame37 imageSrc={images[0]} />
      <Frame38 imageSrc={images[1]} />
      <Frame17 imageSrc={images[2]} />
      <Frame18 imageSrc={images[3]} />
      <Frame19 imageSrc={images[4]} />
      <Frame20 imageSrc={images[5]} />
    </div>
  );
}

function Frame26({ images }: { images: string[] }) {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // 이미지가 변경될 때(탭 전환 시) 스크롤을 가장 왼쪽으로 초기화
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
    const walk = (x - startX) * 1; // 스크롤 속도 조절
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // 터치 이벤트 지원
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return;
    const x = e.touches[0].pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div 
      ref={containerRef}
      className={`bg-white content-stretch flex gap-[10px] items-start overflow-x-auto overflow-y-hidden shrink-0 sticky top-0 w-full select-none hide-scrollbar ${
        isDragging ? 'cursor-grabbing' : 'cursor-grab'
      }`}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{
        WebkitOverflowScrolling: 'touch',
      }}
    >
      <Frame images={images} />
    </div>
  );
}

function Frame1() {
  const [activeTab, setActiveTab] = useState<TabType>('interior');
  
  const currentImages = imageSets[activeTab];

  return (
    <div className="box-border content-stretch flex flex-col gap-[35px] items-center justify-center pb-0 pt-[100px] px-0 relative shrink-0 w-[1880px]">
      <Container1 activeTab={activeTab} onTabChange={setActiveTab} />
      <Frame26 images={currentImages} />
    </div>
  );
}

function Section1() {
  return (
    <div className="bg-[#edede9] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip pb-0 pt-[100px] px-0 relative shrink-0 w-full" data-name="Section3">
      <Frame1 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[28px] relative shrink-0 w-[1152px]" data-name="Paragraph">
      <p className="absolute font-['Fahkwang:Regular',sans-serif] leading-[28px] left-[576.19px] not-italic text-[18px] text-center text-nowrap text-white top-[-0.6px] translate-x-[-50%] whitespace-pre">CONTACT US</p>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[48px] relative shrink-0 w-[1152px]" data-name="Heading 2">
      <p className="absolute font-['Fahkwang:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[48px] left-[576.5px] text-[48px] text-center text-nowrap text-white top-[-5px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
        고객문의
      </p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[1152px]" data-name="Paragraph">
      <div className="absolute font-['Arial:Regular','Noto_Sans_KR:Regular','Noto_Sans:Regular',sans-serif] leading-[36px] left-[575.75px] text-[20px] text-center text-nowrap text-white top-[-2.2px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="mb-0">{`당신의 공간, 어떤 느낌으로 완성하고 싶으신가요? `}</p>
        <p>Art Spread가 함께 상상합니다</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[240px] items-center relative shrink-0 w-[1440px]" data-name="Container">
      <Paragraph4 />
      <Heading2 />
      <Paragraph5 />
      <div className="h-0 relative shrink-0 w-[96px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 96 1">
            <line id="Line 1" stroke="var(--stroke-0, black)" x2="96" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[20px] left-0 overflow-clip right-0 top-[16.5px]" data-name="Container">
      <div className="absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-0 text-[14px] text-[rgba(255,255,255,0.8)] top-[10px] tracking-[-0.14px] translate-y-[-50%] w-[105.9px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">성함을 입력하세요</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="absolute border-[0px_0px_2px] border-[rgba(255,255,255,0.1)] border-solid h-[55px] left-0 overflow-clip right-0 top-[30px]" data-name="Input">
      <Container3 />
    </div>
  );
}

function Item() {
  return (
    <div className="absolute bottom-[511px] left-0 right-0 top-[15px]" data-name="Item">
      <div className="absolute flex flex-col font-['SF_Pro:Medium',sans-serif] font-[510] justify-center leading-[0] left-0 text-[17px] text-nowrap text-white top-[15.5px] tracking-[-0.935px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[17px] whitespace-pre">성함</p>
      </div>
      <div className="absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal h-[37px] justify-center leading-[0] left-[32.42px] text-[#a59266] text-[25px] top-[12.5px] tracking-[-0.935px] translate-y-[-50%] w-[10.95px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[25px]">*</p>
      </div>
      <Input />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[20px] left-0 overflow-clip right-0 top-[16.5px]" data-name="Container">
      <div className="absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[14px] text-[rgba(255,255,255,0.8)] text-nowrap top-[10.5px] tracking-[-0.14px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre">이메일을 입력하세요</p>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="absolute border-[0px_0px_2px] border-[rgba(255,255,255,0.1)] border-solid h-[55px] left-0 overflow-clip right-0 top-[30px]" data-name="Input">
      <Container4 />
    </div>
  );
}

function Item1() {
  return (
    <div className="absolute bottom-[396px] left-0 right-0 top-[130px]" data-name="Item">
      <div className="absolute flex flex-col font-['SF_Pro:Medium',sans-serif] font-[510] justify-center leading-[0] left-0 text-[17px] text-nowrap text-white top-[15.5px] tracking-[-0.935px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[17px] whitespace-pre">이메일</p>
      </div>
      <div className="absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal h-[37px] justify-center leading-[0] left-[47.13px] text-[#a59266] text-[25px] top-[12.5px] tracking-[-0.935px] translate-y-[-50%] w-[10.95px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[25px]">*</p>
      </div>
      <Input1 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute h-[20px] left-0 overflow-clip right-0 top-[16.5px]" data-name="Container">
      <div className="absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[14px] text-[rgba(255,255,255,0.8)] text-nowrap top-[10.5px] tracking-[-0.14px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre">연락처를 입력하세요 (ex : 01012345678)</p>
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className="absolute border-[0px_0px_2px] border-[rgba(255,255,255,0.1)] border-solid h-[55px] left-0 overflow-clip right-0 top-[30px]" data-name="Input">
      <Container5 />
    </div>
  );
}

function Item2() {
  return (
    <div className="absolute bottom-[281px] left-0 right-0 top-[245px]" data-name="Item">
      <div className="absolute flex flex-col font-['SF_Pro:Medium',sans-serif] font-[510] justify-center leading-[0] left-0 text-[17px] text-nowrap text-white top-[15.5px] tracking-[-0.935px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[17px] whitespace-pre">연락처</p>
      </div>
      <div className="absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal h-[37px] justify-center leading-[0] left-[47.13px] text-[#a59266] text-[25px] top-[12.5px] tracking-[-0.935px] translate-y-[-50%] w-[10.95px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[25px]">*</p>
      </div>
      <Input2 />
    </div>
  );
}

function Textarea() {
  return (
    <div className="absolute border-2 border-[rgba(255,255,255,0.1)] border-solid h-[196px] left-0 overflow-auto right-0 top-[40px]" data-name="Textarea">
      <div className="absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[25px] text-[14px] text-[rgba(255,255,255,0.8)] top-[35px] tracking-[-0.14px] translate-y-[-50%] w-[131.39px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[21px]">문의내용을 입력하세요</p>
      </div>
    </div>
  );
}

function Item3() {
  return (
    <div className="absolute bottom-[15px] left-0 right-0 top-[360px]" data-name="Item">
      <div className="absolute flex flex-col font-['SF_Pro:Medium',sans-serif] font-[510] justify-center leading-[0] left-0 text-[17px] text-nowrap text-white top-[15.5px] tracking-[-0.935px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[17px] whitespace-pre">상담내용</p>
      </div>
      <div className="absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal h-[37px] justify-center leading-[0] left-[61.83px] text-[#a59266] text-[25px] top-[12.5px] tracking-[-0.935px] translate-y-[-50%] w-[10.95px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[25px]">*</p>
      </div>
      <Textarea />
    </div>
  );
}

function List() {
  return (
    <div className="absolute h-[611px] left-0 right-0 top-0" data-name="List">
      <Item />
      <Item1 />
      <Item2 />
      <Item3 />
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

function Label() {
  return (
    <div className="absolute h-[30px] left-0 top-[calc(50%+308px)] translate-y-[-50%] w-[205.75px]" data-name="Label">
      <div className="absolute flex h-[22px] items-center justify-center left-0 top-[4px] w-[21.31px]">
        <div className="flex-none scale-y-[-100%]">
          <Icon />
        </div>
      </div>
      <div className="absolute flex flex-col font-['SF_Pro:Medium',sans-serif] font-[510] justify-center leading-[0] left-[32px] text-[14px] text-[rgba(255,255,255,0.55)] text-nowrap top-[15px] tracking-[-0.7px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[30px] whitespace-pre">개인정보처리방침에 동의합니다</p>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center left-0 top-[8px]">
      <div className="flex flex-col font-['SF_Pro:Medium',sans-serif] font-[510] h-[20px] justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.55)] tracking-[-0.63px] w-[77px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[36px]">{`약관확인하기 `}</p>
      </div>
      <div className="h-[8.381px] relative shrink-0 w-[10.138px]" data-name="→">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 9">
          <path d={svgPaths.p27f5d300} fill="var(--fill-0, white)" id="â" />
        </svg>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="absolute h-[40px] left-[872.75px] top-[calc(50%+308px)] translate-y-[-50%] w-[105.17px]" data-name="Link">
      <Frame27 />
    </div>
  );
}

function Form() {
  return (
    <div className="h-[656px] relative shrink-0 w-[980px]" data-name="Form">
      <List />
      <Label />
      <Link />
    </div>
  );
}

function Container6() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[30px] h-[1080px] items-center justify-center px-0 py-[50px] relative shrink-0 w-[1920px]" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover opacity-80 pointer-events-none size-full" src={imgContainer} onError={(e) => { e.currentTarget.style.display = 'none'; }} />
      <Container2 />
      <Form />
    </div>
  );
}

function Section2() {
  return (
    <div className="bg-[#edede9] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip pb-0 pt-[100px] px-0 relative shrink-0 w-full" data-name="Section4">
      <Container6 />
    </div>
  );
}

function List1() {
  return <div className="absolute h-[18px] left-[60px] right-[60px] top-[129px]" data-name="List" />;
}

function Frame4() {
  return (
    <div className="basis-0 content-stretch flex gap-[307px] grow items-center min-h-px min-w-px relative shrink-0 text-[16px] text-[rgba(59,59,59,0.8)] text-nowrap">
      <p className="font-['Fahkwang:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 whitespace-pre">artspread7@gmail.com</p>
      <div className="flex flex-col font-['Fahkwang:Regular','Noto_Sans_KR:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-center tracking-[-0.27px]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[16px] text-nowrap whitespace-pre">개인정보 처리방침</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="box-border content-stretch flex gap-[137px] items-start overflow-clip px-0 py-[13px] relative shrink-0 w-[1568px]">
      <Frame4 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Paragraph">
      <p className="font-['Fahkwang:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[24px] relative shrink-0 text-[#3b3b3b] text-[16px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
        디자인 컬러 스튜디오
      </p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="content-stretch flex font-['Fahkwang:Regular','Noto_Sans_KR:Regular',sans-serif] gap-[5px] items-start leading-[26px] relative shrink-0 text-[#3b3b3b] text-[16px] text-nowrap w-full whitespace-pre" data-name="Paragraph">
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wght' 400" }}>
        색은 공간의 온도입니다.
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wght' 400" }}>
        그 온도를 가장 잘 표현할 수 있는 방법을,
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wght' 400" }}>
        Art Spread가 함께 찾아드리겠습니다.
      </p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[16px] items-center pb-[80px] pt-0 px-0 relative shrink-0 w-[695px]">
      <div className="h-[17.28px] relative shrink-0 w-[167.229px]" data-name="ART SPREAD">
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
      <Paragraph6 />
      <Paragraph7 />
      <p className="font-['Fahkwang:Regular',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[#3b3b3b] text-[14px] text-center w-[min-content]">© 2024 Art Spread. All rights reserved.</p>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#edede9] box-border content-stretch flex flex-col gap-[126px] items-center pb-[35px] pt-[62px] px-[101px] relative shrink-0 w-[1920px]" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[1px_0px] border-neutral-200 border-solid inset-0 pointer-events-none" />
      <List1 />
      <Frame3 />
      <Frame5 />
    </div>
  );
}

export default function Frame9() {
  const [showIntro, setShowIntro] = useState(false);
  const [introVisible, setIntroVisible] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // 페이지 로드 시 인트로 fade in
    setShowIntro(true);
    // 약간의 지연 후 opacity를 100으로 만들어 fade in 효과
    const fadeInTimer = setTimeout(() => {
      setIntroVisible(true);
    }, 100);
    
    // 3초 후 인트로 fade out 시작
    const fadeOutTimer = setTimeout(() => {
      setIntroVisible(false);
    }, 3100);
    
    // 인트로가 완전히 사라진 후 콘텐츠 표시
    const contentTimer = setTimeout(() => {
      setShowIntro(false);
      setShowContent(true);
    }, 4100); // 인트로 표시(3초) + 페이드아웃(1초) 후

    return () => {
      clearTimeout(fadeInTimer);
      clearTimeout(fadeOutTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  const handleIntroEnd = () => {
    // 이 함수는 더 이상 사용하지 않지만 호환성을 위해 유지
  };

  return (
    <div className="bg-[#edede9] content-stretch flex flex-col items-center relative size-full">
      <Header />
      {showIntro && (
        <Frame7 isVisible={introVisible} onAnimationEnd={handleIntroEnd} />
      )}
      <div 
        className={`w-full transition-opacity duration-1000 ease-in-out flex flex-col gap-[102px] items-center ${
          showContent ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="pt-[78px]">
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