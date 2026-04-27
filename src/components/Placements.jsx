'use client';

import React, { useState, useEffect, useRef } from 'react';
import API from '@/lib/api';
import '@/styles/Placements.css';

const DEFAULTS = {
  badge: 'PLACEMENT STATISTICS',
  title: 'Record-Breaking Placements',
  subtitle: 'Our students are recruited by top Fortune 500 companies globally, ensuring a massive return on investment.',
  stats: [
    { val: '500+', label: 'Recruiters', icon: '🏢' },
    { val: '95%',  label: 'Placement Rate', icon: '📈' },
    { val: '10 LPA', label: 'Highest Package', icon: '💰' },
    { val: '2000+', label: 'Students Placed', icon: '🎓' },
    { val: '300+', label: 'Internship Partners', icon: '🤝' },
    { val: '50+',  label: 'Industry Collaborations', icon: '🌐' },
    { val: '100+', label: 'Annual Hiring Drives', icon: '📅' },
  ],
  companies: 'Microsoft,Google,Amazon,Cognizant,Capgemini,TCS,Infosys,Wipro,IBM,Accenture',
  companyLogos: [],
};

// Animate number counting up
function useCountUp(target, duration = 1800, active = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    const num = parseFloat(target.replace(/[^0-9.]/g, ''));
    if (!num) return;
    let start = 0;
    const step = num / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= num) { setCount(num); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  const suffix = target.replace(/[0-9.]/g, '');
  return count === 0 && !active ? '0' : `${count}${suffix}`;
}

function StatCard({ stat, index, active }) {
  const display = useCountUp(stat.val, 1600, active);
  return (
    <div className="ps-card" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="ps-card-icon">{stat.icon}</div>
      <div className="ps-card-val">{display}</div>
      <div className="ps-card-label">{stat.label}</div>
      <div className="ps-card-line" />
    </div>
  );
}

const Placements = () => {
  const [d, setD] = useState(DEFAULTS);
  const [active, setActive] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    API.get('/settings/placements')
      .then(({ data }) => { if (data?.content) setD(prev => ({ ...prev, ...data.content })); })
      .catch(() => {});
  }, []);

  // Trigger count-up when section enters viewport
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setActive(true); }, { threshold: 0.2 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const companies = (d.companies || '').split(',').map(c => c.trim()).filter(Boolean);
  const companyLogos = d.companyLogos || [];
  const stats = d.stats || DEFAULTS.stats;

  return (
    <section className="placements-section" ref={sectionRef}>

      {/* ── Hero banner ── */}
      <div className="ps-hero">
        <div className="ps-hero-bg" />
        <div className="container ps-hero-inner">
          <span className="section-badge" style={{ background: 'var(--lpu-orange)', color: 'var(--lpu-black)' }}>{d.badge}</span>
          <h2 className="ps-hero-title">{d.title}</h2>
          <p className="ps-hero-sub">{d.subtitle}</p>
        </div>
      </div>

      {/* ── Stats grid ── */}
      <div className="ps-stats-band">
        <div className="container">
          <div className="ps-stats-grid">
            {stats.map((stat, i) => (
              <StatCard key={i} stat={stat} index={i} active={active} />
            ))}
          </div>
        </div>
      </div>

      {/* ── Placement Process ── */}
      <div className="container">
        <div className="placement-process">
          <div className="pp-header">
            <span className="section-badge">HOW IT WORKS</span>
            <h3 className="placement-process-title">Our Placement Process</h3>
          </div>
          <div className="pp-track">
            {[
              { step: '01', icon: '📋', title: 'Profile Development', desc: 'Resume building, LinkedIn optimisation & portfolio creation' },
              { step: '02', icon: '🎯', title: 'Skill Enhancement', desc: 'Aptitude, technical & communication training workshops' },
              { step: '03', icon: '🎤', title: 'Interview Readiness', desc: 'Mock interviews with expert feedback & GD practice' },
              { step: '04', icon: '🏢', title: 'Campus Drives', desc: 'On-campus recruitment by 500+ top companies' },
              { step: '05', icon: '🏆', title: 'Offer & Onboarding', desc: 'Offer letter, pre-joining support & alumni network' },
            ].map((s, i) => (
              <React.Fragment key={i}>
                <div className="pp-node" style={{ animationDelay: `${i * 0.18}s` }}>
                  <div className="pp-icon-ring">
                    <span className="pp-icon">{s.icon}</span>
                    <span className="pp-step-badge">{s.step}</span>
                  </div>
                  <div className="pp-node-body">
                    <h4>{s.title}</h4>
                    <p>{s.desc}</p>
                  </div>
                </div>
                {i < 4 && <div className="pp-connector" style={{ animationDelay: `${i * 0.18 + 0.12}s` }}><span className="pp-arrow">›</span></div>}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* ── Companies marquee ── */}
        <div className="companies-marquee-wrapper">
          <div className="companies-marquee">
            {companyLogos.length > 0 ? (
              // Show logos if available
              [...companyLogos, ...companyLogos].map((company, i) => (
                <div key={i} className="company-logo-box">
                  {company.logo ? (
                    <img src={company.logo} alt={company.name} className="company-logo-img" />
                  ) : (
                    <div className="text-logo">{company.name}</div>
                  )}
                </div>
              ))
            ) : (
              // Fallback to text-only display
              [...companies, ...companies].map((c, i) => (
                <div key={i} className="company-logo-box text-logo">{c}</div>
              ))
            )}
          </div>
        </div>
      </div>

    </section>
  );
};

export default Placements;
