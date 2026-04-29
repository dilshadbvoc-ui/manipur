'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import '@/styles/SimplePage.css';

/**
 * DynamicPage — fetches content from /api/settings/[settingsKey]
 * Falls back to `defaultSections` if nothing saved yet.
 * Admin can edit via /admin/pages (Page Content Manager).
 */
export default function DynamicPage({ settingsKey, badge, title, subtitle, breadcrumb, defaultSections }) {
  const [sections, setSections] = useState(defaultSections || []);
  const [pageTitle, setPageTitle] = useState(title);
  const [pageSubtitle, setPageSubtitle] = useState(subtitle);
  const [pageBadge, setPageBadge] = useState(badge);
  const [heroImage, setHeroImage] = useState('');

  useEffect(() => {
    if (!settingsKey) return;
    fetch(`/api/settings/${settingsKey}`)
      .then(r => r.json())
      .then(data => {
        if (!data?.content) return;
        const c = data.content;
        if (c.title) setPageTitle(c.title);
        if (c.subtitle || c.heroSubtitle) setPageSubtitle(c.subtitle || c.heroSubtitle);
        if (c.badge) setPageBadge(c.badge);
        if (c.heroImage) setHeroImage(c.heroImage);
        if (c.heroTitle) setPageTitle(c.heroTitle);
        if (c.sections?.length) setSections(c.sections);
        // Support sections saved as JSON string from admin
        if (typeof c.sections === 'string' && c.sections.trim()) {
          try { const parsed = JSON.parse(c.sections); if (parsed?.length) setSections(parsed); } catch {}
        }
      })
      .catch(() => {});
  }, [settingsKey]);

  return (
    <div className="simple-page">
      <div className="simple-hero" style={heroImage ? { backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}>
        {heroImage && <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.55)', zIndex: 0 }} />}
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          {breadcrumb && (
            <nav className="simple-breadcrumb">
              {breadcrumb.map((b, i) => (
                <span key={i}>
                  {b.href ? <Link href={b.href}>{b.label}</Link> : <span>{b.label}</span>}
                  {i < breadcrumb.length - 1 && <span className="bc-sep">›</span>}
                </span>
              ))}
            </nav>
          )}
          {pageBadge && <span className="simple-badge">{pageBadge}</span>}
          <h1>{pageTitle}</h1>
          {pageSubtitle && <p className="simple-subtitle">{pageSubtitle}</p>}
        </div>
      </div>

      <div className="container simple-body">
        {sections.map((sec, i) => (
          <div key={i} className="simple-section">
            {sec.title && <h2 className="simple-sec-title">{sec.title}</h2>}
            {sec.content && <p className="simple-sec-content" style={{ whiteSpace: 'pre-line' }}>{sec.content}</p>}
            {sec.items && (
              <ul className="simple-list">
                {sec.items.map((item, j) => (
                  <li key={j}>
                    {item.icon && <span>{item.icon}</span>}
                    <div>
                      {item.title && <strong>{item.title}</strong>}
                      {item.desc && <p>{item.desc}</p>}
                      {typeof item === 'string' && item}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
