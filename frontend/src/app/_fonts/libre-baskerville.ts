import { Libre_Baskerville as LibreBaskervilleFont } from 'next/font/google';

export const LibreBaskerville = LibreBaskervilleFont({
  weight: ['400'],
  subsets: ['latin', 'latin-ext'],
  style: ['normal', 'italic'],
  adjustFontFallback: true,
  variable: '--font-baskerville',
});
