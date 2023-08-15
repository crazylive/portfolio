import React from 'react';
import { ParallaxProvider } from 'components/parallax-provider';
import { SplashScreen } from 'app/_components/splash-screen';
import { Banner } from 'app/_components/banner';
import { About } from 'app/_components/about';
import { resolvers } from 'resolvers';
import { HomePageModel } from '@models/home-page';
import { Experiences } from 'app/_components/experiences';
import { Certification } from 'app/_components/certification';
import { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Shishmarev Ilia',
  description: 'I am a full-stack developer building accessible, scalable products providing modern and aesthetic solutions',
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no',
  icons: [
    { rel: 'apple-touch-icon', sizes: '180x180', url: '/apple-touch-icon.png' },
    {
      rel: 'icon', type: 'image/png', sizes: '32x32', url: '/favicon-32x32.png',
    },
    {
      rel: 'icon', type: 'image/png', sizes: '16x16', url: '/favicon-16x16.png',
    },
    {
      rel: 'icon', type: 'image/png', url: '/favicon.ico',
    },
  ],
  manifest: '/site.webmanifest',
};

export default async function Home() {
  const { homepage } = resolvers;

  const data = await homepage.find(['homepage']);
  const {
    welcomeTitle,
    welcomeMessages,
    banner,
    aboutTitle,
    aboutPhoto,
    aboutContent,
    socialMedia,
  } = HomePageModel.toModel(data);

  return (
    <main className={styles.main}>
      <ParallaxProvider>
        <SplashScreen data={{ welcomeTitle, welcomeMessages }} />
        <Banner data={banner} />
        <About
          data={{
            aboutTitle, aboutContent, aboutPhoto, socialMedia,
          }}
        />
        <Certification plainData={data.data.attributes.certificates} />
        <Experiences plainData={data.data.attributes.experience} />
      </ParallaxProvider>
    </main>
  );
}
