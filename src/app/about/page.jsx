'use client';

import React from 'react';
import Link from 'next/link';
import '@/styles/SimplePage.css';
import '@/styles/About.css';

const paragraphs = [
  'Located in the region famous for the Sangai deer, the peaceful Loktak Lake, and the graceful Manipuri dancing, Manipur International University is inspired by its surrounding area and the local people. The university combines the unique culture and natural wealth of its geographical environment in its educational activities.',
  'Education in the Manipur International University is deeply rooted in the geographical and cultural reality of the region yet remains consistent with the best international traditions of quality and excellence. The university aims at bringing world-class education straight to its students who can enjoy top-notch studies and research opportunities without the need to move elsewhere in search for a good school.',
  'MIU creates an educational atmosphere that goes far beyond purely academic training. Critical thinking, values-based education, and intercultural awareness become an essential part of MIU curriculum. Students get not just the necessary theoretical knowledge but also learn to think, to be responsible and proactive individuals with goals and visions.',
  'Being strategically positioned in Manipur, the gateway to Southeast Asia, MIU is ideally suited to serve its role as a regional university and a center for academic exchange between India and Southeast Asia.',
  'Consistent with the tradition of the traditional Indian educational system while at the same time incorporating modern ideas of international universities, MIU encourages interdisciplinarity and intercultural exchange.',
  'At the heart of MIU lies the belief in the value of knowledge, culture, and individuality.',
];

export default function AboutPage() {
  return (
    <div className="simple-page">
      {/* Hero */}
      <div className="simple-hero">
        <div className="container">
          <nav className="simple-breadcrumb">
            <span><Link href="/">Home</Link></span>
            <span className="bc-sep">›</span>
            <span>About Us</span>
          </nav>
          <span className="simple-badge">ABOUT MIU</span>
          <h1>About Manipur International University</h1>
          <p className="simple-subtitle">Established under the Manipur International University Act, 2018, MIU is committed to academic excellence, research, and holistic development.</p>
        </div>
      </div>

      {/* Intro block */}
      <div className="about-intro-block">
        <div className="container">
          <h2 className="about-intro-title">About the Manipur International University</h2>
          {paragraphs.map((p, i) => (
            <p key={i} className="about-intro-para">{p}</p>
          ))}
          <p className="about-intro-cta">Start your educational journey with Manipur International University!</p>
        </div>
      </div>
    </div>
  );
}
