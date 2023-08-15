import localFont from 'next/font/local';

export const Gilroy = localFont({
  src: [
    {
      path: '../../assets/fonts/Gilroy/gilroy-medium-webfont.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/Gilroy/gilroy-medium-webfont.woff',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/Gilroy/gilroy-bold-webfont.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/Gilroy/gilroy-bold-webfont.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/Gilroy/gilroy-extrabold-webfont.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/Gilroy/gilroy-extrabold-webfont.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/Gilroy/gilroy-heavy-webfont.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/Gilroy/gilroy-heavy-webfont.woff',
      weight: '900',
      style: 'normal',
    },
  ],
  adjustFontFallback: 'Arial',
  variable: '--font-gilroy',
});
