import { Lato as LatoFont } from 'next/font/google';

export const Lato = LatoFont({
  weight: ['300', '400', '700'],
  subsets: ['latin', 'latin-ext'],
  style: ['normal', 'italic'],
  adjustFontFallback: true,
  variable: '--font-lato',
});
