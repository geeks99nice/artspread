// 브라우저 Canvas 기반 이미지 리사이즈 + WebP 변환 유틸 (외부 의존성 없음)

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

/**
 * File/Blob을 최대 너비(maxW)로 축소하여 WebP Blob으로 변환한다.
 * 원본이 maxW보다 작으면 확대하지 않는다.
 */
export async function toWebp(file: Blob, maxW: number, quality = 0.82): Promise<Blob> {
  const objectUrl = URL.createObjectURL(file);
  try {
    const img = await loadImage(objectUrl);
    const scale = Math.min(1, maxW / img.naturalWidth);
    const w = Math.max(1, Math.round(img.naturalWidth * scale));
    const h = Math.max(1, Math.round(img.naturalHeight * scale));

    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('canvas context를 만들 수 없습니다.');
    ctx.drawImage(img, 0, 0, w, h);

    const blob = await new Promise<Blob | null>((res) =>
      canvas.toBlob(res, 'image/webp', quality)
    );
    if (!blob) throw new Error('WebP 변환에 실패했습니다.');
    return blob;
  } finally {
    URL.revokeObjectURL(objectUrl);
  }
}

/** 업로드용 풀사이즈(1600px) + 썸네일(600px) 두 종을 생성 */
export async function makeUploadVariants(file: Blob) {
  const full = await toWebp(file, 1600, 0.82);
  const thumb = await toWebp(file, 600, 0.8);
  return { full, thumb };
}
