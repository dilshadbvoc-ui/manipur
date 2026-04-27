import React from 'react';
import NewsSlider from '@/components/NewsSlider';

export const metadata = {
  title: 'News & Events | Manipur International University',
  description: 'Stay updated with the latest happenings, research breakthroughs, and campus highlights at Manipur International University.',
  alternates: {
    canonical: 'https://miu.edu.in/news-events',
  },
};

export default function NewsEvents() {
  return (
    <div className="page-container" style={{paddingTop: 'clamp(70px, 12vw, 120px)'}}>
      <header className="page-hero" style={{padding: 'clamp(30px, 6vw, 60px) 20px', textAlign: 'center', background: 'var(--lpu-black)', color: '#fff'}}>
        <h1 style={{fontSize: 'clamp(1.8rem, 5vw, 3rem)', fontWeight: '900'}}>HAPPENINGS @ MIU</h1>
        <p style={{fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', opacity: '0.8'}}>Latest updates from our vibrant campus.</p>
      </header>
      <div style={{padding: '40px 0'}}>
        <NewsSlider />
      </div>
    </div>
  );
}
