'use client';

import React, { useState, useEffect } from 'react';
import API from '@/lib/api';
import { useEnquiry } from '@/context/EnquiryContext';
import '@/styles/Hero.css';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { openEnquiry } = useEnquiry();
  const [heroData, setHeroData] = useState({
    title: 'Shaping The Leaders of Tomorrow',
    subtitle: "An institution committed to intellectual rigor, industry integration, and transformative learning experiences that shape global professionals.",
    images: []
  });
  const [pageContent, setPageContent] = useState({
    stat1Value: '2019', stat1Label: 'Year Established',
    stat2Value: '100+',  stat2Label: 'Receive Multiyear Fellowships',
    stat3Value: '50+',   stat3Label: 'Academic Programs',
    stat4Value: '10',    stat4Label: 'Research Centers',
  });

  useEffect(() => {
    API.get('/settings/hero').then(({ data }) => { if (data?.content) setHeroData(data.content); }).catch(() => {});
    API.get('/settings/page-home').then(({ data }) => { if (data?.content) setPageContent(prev => ({ ...prev, ...data.content })); }).catch(() => {});
  }, []);

  const { title, subtitle, images } = heroData;
  const displayImages = images.length > 0 ? images : [
    'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1920',
    'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1920',
    'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&q=80&w=1920',
  ];

  useEffect(() => {
    if (displayImages.length > 0) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % displayImages.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [displayImages.length]);

  return (
    <section className="lpu-hero-container">
      {displayImages.map((img, index) => (
        <div 
          key={index}
          className={`lpu-hero-background ${index === currentImageIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url('${img}')` }}
        ></div>
      ))}
      <div className="lpu-hero-overlay"></div>
      
      <div className="container hero-layout">
        <div className="hero-typography">
          <h1 className="hero-main-title" dangerouslySetInnerHTML={{ __html: title }} />
          <p className="hero-subtext">{subtitle}</p>
          <div className="hero-buttons">
            <a href="https://admin.miu.edu.in/admission/" target="_blank" rel="noopener noreferrer" className="btn btn-orange">Admissions 2026</a>
          </div>
          
          <div className="hero-trust-badges">
            <div className="trust-item">
              <span className="big-num">{pageContent.stat1Value}</span>
              <span className="small-txt">{pageContent.stat1Label}</span>
            </div>
            <div className="trust-item">
              <span className="big-num">{pageContent.stat2Value}</span>
              <span className="small-txt">{pageContent.stat2Label}</span>
            </div>
            <div className="trust-item">
              <span className="big-num">{pageContent.stat3Value}</span>
              <span className="small-txt">{pageContent.stat3Label}</span>
            </div>
            <div className="trust-item">
              <span className="big-num">{pageContent.stat4Value}</span>
              <span className="small-txt">{pageContent.stat4Label}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
