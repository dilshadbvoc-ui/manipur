'use client';

import React from 'react';
import Link from 'next/link';
import '@/styles/AcademicCouncil.css';
import '@/styles/IQAC.css';

const SECTIONS = [
  {
    icon: '🏛️',
    title: 'Institutional Information',
    items: [
      'Name of the University: Manipur International University (MIU)',
      'Establishment: Established under the Manipur International University Act, 2018 by the Government of Manipur',
      'Recognition: Recognised by the University Grants Commission (UGC) under Sections 2(f) and 22 of the UGC Act, 1956',
      'Type: State Private University',
    ],
  },
  {
    icon: '⚖️',
    title: 'Governance and Administration',
    intro: 'MIU follows a structured governance framework to ensure efficient decision-making and academic excellence. Key bodies include:',
    items: [
      'Board of Governors',
      'Academic Council',
      'Finance Committee',
      'Internal Quality Assurance Cell (IQAC)',
    ],
    note: 'These bodies function in accordance with statutory provisions and institutional policies.',
  },
  {
    icon: '🎓',
    title: 'Academic Information',
    intro: 'The University offers a wide range of:',
    items: [
      'Undergraduate Programs',
      'Postgraduate Programs',
      'Diploma and Certificate Courses',
      'Doctoral (Ph.D.) Programs',
      'Skill and Vocational Programs',
    ],
    note: 'Details regarding program structure, eligibility, curriculum, and academic regulations are available on the website.',
  },
  {
    icon: '📋',
    title: 'Admission and Fee Information',
    items: [
      'Admission procedures are conducted as per University norms and regulatory guidelines',
      'Eligibility criteria vary by program and are clearly defined',
      'Fee structure for all programs is published and updated regularly',
      'Scholarship schemes and financial assistance options are available for eligible students',
    ],
  },
  {
    icon: '👨‍🏫',
    title: 'Faculty Information',
    intro: 'MIU has qualified and experienced faculty members across disciplines. Information regarding faculty qualifications, experience, and departmental affiliations is made available for transparency.',
    items: [],
  },
  {
    icon: '🏢',
    title: 'Infrastructure and Facilities',
    intro: 'The University provides:',
    items: [
      'Classrooms and laboratories',
      'Library and digital learning resources',
      'IT-enabled learning facilities',
      'Research and innovation support',
      'Student support services and campus amenities',
    ],
  },
  {
    icon: '📝',
    title: 'Examinations and Evaluation',
    items: [
      'Transparent and systematic examination processes',
      'Continuous internal assessment and semester-end examinations',
      'Timely declaration of results',
      'Issuance of mark sheets, degrees, and certificates with appropriate security features',
    ],
  },
  {
    icon: '✅',
    title: 'Quality Assurance',
    intro: 'MIU has established an Internal Quality Assurance Cell (IQAC) in accordance with NAAC guidelines to ensure continuous quality improvement in teaching, learning, research, and administration.',
    items: [],
  },
  {
    icon: '📜',
    title: 'Policies and Regulations',
    intro: 'The University publishes key policies, including:',
    items: [
      'Admission Policy',
      'Examination Policy',
      'Refund Policy',
      'Scholarship Policy',
      'Anti-Ragging Policy',
      'Grievance Redressal Mechanism',
    ],
  },
  {
    icon: '🤝',
    title: 'Student Support and Grievance Redressal',
    intro: 'MIU ensures student welfare through:',
    items: [
      'Academic counseling and mentoring',
      'Career guidance and placement support',
      'Grievance redressal system for students and staff',
      'Anti-ragging and disciplinary committees',
    ],
  },
  {
    icon: '🏅',
    title: 'Statutory Compliance',
    intro: 'The University complies with all applicable regulations of statutory bodies and ensures adherence to national education policies and quality standards.',
    items: [],
  },
];

export default function PublicSelfDisclosurePage() {
  return (
    <div className="ac-page">
      {/* Hero */}
      <div className="ac-hero">
        <div className="container">
          <nav className="ac-breadcrumb">
            <Link href="/">Home</Link><span>›</span>
            <Link href="/about">About Us</Link><span>›</span>
            <span>Public Self Disclosure</span>
          </nav>
          <span className="section-badge">TRANSPARENCY</span>
          <h1>Public Self-Disclosure</h1>
          <p>Manipur International University — Committed to Transparency & Accountability</p>
        </div>
      </div>

      <div className="container ac-body">

        {/* Overview */}
        <div className="ac-intro-card">
          <span className="section-badge" style={{ marginBottom: '12px', display: 'inline-block' }}>OVERVIEW</span>
          <p className="ac-intro-text">
            Manipur International University (MIU) is committed to maintaining transparency, accountability, and good governance in all its academic and administrative functions. In line with the guidelines of regulatory authorities and best practices in higher education, the University provides comprehensive and up-to-date information in the public domain for the benefit of students, parents, faculty, and other stakeholders.
          </p>
          <p className="ac-intro-text" style={{ marginTop: '12px' }}>
            This Public Self-Disclosure section aims to ensure easy access to key institutional information, enabling informed decision-making and promoting trust among stakeholders.
          </p>
        </div>

        {/* Sections Grid */}
        <div className="psd-grid">
          {SECTIONS.map((sec, i) => (
            <div key={i} className="iqac-list-card">
              <h3>{sec.icon} {sec.title}</h3>
              {sec.intro && <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: '#555', fontWeight: 400, textTransform: 'none', marginBottom: '10px', lineHeight: 1.6 }}>{sec.intro}</p>}
              {sec.items.length > 0 && (
                <ul>
                  {sec.items.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
              )}
              {sec.note && <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: '#888', fontWeight: 400, textTransform: 'none', marginTop: '10px', fontStyle: 'italic' }}>{sec.note}</p>}
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="iqac-contact-card" style={{ marginTop: '32px' }}>
          <h3>📬 Contact Information</h3>
          <p>For further details or clarifications, please contact:</p>
          <p>
            <strong>Manipur International University (MIU)</strong><br />
            Website: <a href="https://www.miu.edu.in" target="_blank" rel="noopener noreferrer">www.miu.edu.in</a>
          </p>
        </div>

      </div>
    </div>
  );
}
