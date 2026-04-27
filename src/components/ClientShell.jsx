'use client';

import React, { useState, useEffect } from 'react';
import { AuthProvider } from '@/context/AuthContext';
import { EnquiryProvider, useEnquiry } from '@/context/EnquiryContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MobileBottomNav from '@/components/MobileBottomNav';
import AdminTopBar from '@/components/AdminTopBar';
import EnquiryPopup from '@/components/EnquiryPopup';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function ClientShell({ children }) {
  const [mounted, setMounted] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [fadeSplash, setFadeSplash] = useState(false);

  // Only run splash after mount to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setFadeSplash(true);
      setTimeout(() => setShowSplash(false), 500);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AuthProvider>
      <EnquiryProvider>
        <AdminTopBar />
        <div className="app-container">
          {mounted && showSplash && (
            <div className={`splash-screen ${fadeSplash ? 'fade-out' : ''}`}>
              <div className="splash-content">
                <img src="/emblem.png" alt="MIU Logo" className="splash-logo" />
                <div className="splash-miu-blocks">
                  <span>M</span>
                  <span>I</span>
                  <span>U</span>
                </div>
              </div>
            </div>
          )}
          <Navbar />
          <WhatsAppButton />
          <EnquiryPopup />
          <main>{children}</main>
          <Footer />
          <MobileBottomNav />
        </div>
      </EnquiryProvider>
    </AuthProvider>
  );
}
