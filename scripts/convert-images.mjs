// public/images 의 PNG 사진을 WebP로 변환(리사이즈 포함)합니다.
// 원본 PNG는 그대로 두고 같은 이름의 .webp 를 생성합니다.
//   node scripts/convert-images.mjs
import sharp from 'sharp';
import { readdir, stat } from 'node:fs/promises';
import path from 'node:path';

const DIR = path.resolve('public/images');
// 파일별 최대 너비(px). 지정 없으면 DEFAULT 적용.
const MAX_WIDTH = { 'KVimg.png': 2400 };
const DEFAULT_WIDTH = 1600;
const QUALITY = 80;

const files = (await readdir(DIR)).filter((f) => /\.png$/i.test(f));
let before = 0;
let after = 0;

for (const file of files) {
  const src = path.join(DIR, file);
  const out = path.join(DIR, file.replace(/\.png$/i, '.webp'));
  const { size: srcSize } = await stat(src);
  if (srcSize === 0) {
    console.log(`skip (empty): ${file}`);
    continue;
  }
  const maxW = MAX_WIDTH[file] ?? DEFAULT_WIDTH;
  await sharp(src)
    .resize({ width: maxW, withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(out);
  const { size: outSize } = await stat(out);
  before += srcSize;
  after += outSize;
  console.log(
    `${file}: ${(srcSize / 1024).toFixed(0)}KB -> ${(outSize / 1024).toFixed(0)}KB`
  );
}

console.log(
  `\nTOTAL: ${(before / 1024 / 1024).toFixed(2)}MB -> ${(after / 1024 / 1024).toFixed(2)}MB ` +
    `(${(100 - (after / before) * 100).toFixed(0)}% 감소)`
);
