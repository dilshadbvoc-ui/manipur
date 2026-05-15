'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function AdvisoryPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show popup once per session
    const dismissed = sessionStorage.getItem('advisory_dismissed');
    if (!dismissed) {
      // Small delay so it appears after the splash screen
      const timer = setTimeout(() => setVisible(true), 2200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    sessionStorage.setItem('advisory_dismissed', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="advisory-overlay" onClick={handleClose}>
      <div
        className="advisory-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Office Order / Student Advisory"
      >
        {/* Close button */}
        <button
          className="advisory-close"
          onClick={handleClose}
          aria-label="Close advisory"
        >
          &times;
        </button>

        {/* Advisory image */}
        <div className="advisory-image-wrapper">
          <Image
            src="/advisory.jpg"
            alt="Office Order / Student Advisory – Unauthorized Fee Collection Warning"
            width={720}
            height={1020}
            style={{ width: '100%', height: 'auto' }}
            priority
          />
        </div>

        <div className="advisory-footer">
          <button className="advisory-btn" onClick={handleClose}>
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
}
