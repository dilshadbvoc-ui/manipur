import React from 'react';
import Hero from '@/components/Hero';
import Programs from '@/components/Programs';
import Accreditations from '@/components/Accreditations';
import Spotlight from '@/components/Spotlight';
import CampusLife from '@/components/CampusLife';
import Placements from '@/components/Placements';
import Ecosystem from '@/components/Ecosystem';
import NewsSlider from '@/components/NewsSlider';
import StructuredData from '@/components/StructuredData';

export const metadata = {
  title: 'Manipur International University | MIU Imphal | Top University in Manipur',
  description: 'Manipur International University (MIU) - Premier university in Imphal, Manipur offering undergraduate, postgraduate & doctoral programs. UGC recognized. Admissions open 2026.',
  keywords: 'Manipur International University, MIU Imphal, university in Manipur, MIU India, engineering college Manipur, management college Imphal',
  alternates: {
    canonical: 'https://miu.edu.in/',
  },
  openGraph: {
    title: 'Manipur International University | MIU Imphal',
    description: 'Premier university in Imphal, Manipur offering quality higher education',
    url: 'https://miu.edu.in/',
    siteName: 'Manipur International University',
    type: 'website',
  },
};

export default function Home() {
  return (
    <main>
      <StructuredData />
      <Hero />
      <Accreditations />
      <Spotlight />
      <Programs />
      <CampusLife />
      <Placements />
      <Ecosystem />
      <NewsSlider />
    </main>
  );
}
