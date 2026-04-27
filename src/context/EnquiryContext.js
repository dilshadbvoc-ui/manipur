'use client';

import React, { createContext, useContext, useState } from 'react';

export const EnquiryContext = createContext();

export const EnquiryProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState('apply'); // 'apply' | 'enquire'

  const openEnquiry = (m = 'apply') => { setMode(m); setIsOpen(true); };
  const closeEnquiry = () => setIsOpen(false);

  return (
    <EnquiryContext.Provider value={{ isOpen, mode, openEnquiry, closeEnquiry }}>
      {children}
    </EnquiryContext.Provider>
  );
};

export const useEnquiry = () => useContext(EnquiryContext);
