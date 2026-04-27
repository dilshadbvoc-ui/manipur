'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import API from '@/lib/api';
import { useEnquiry } from '@/context/EnquiryContext';
import '@/styles/CourseDetail.css';

export default function CourseDetail() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const { openEnquiry } = useEnquiry();

  useEffect(() => {
    if (!id) return;
    API.get(`/courses/${id}`)
      .then(({ data }) => setCourse(data))
      .catch(() => setCourse(null))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="cd-loading">Loading...</div>;
  if (!course) return (
    <div className="cd-loading">
      <p>Course not found.</p>
      <Link href="/information-cell" className="btn btn-orange" style={{ marginTop: '20px', display: 'inline-block' }}>← All Programs</Link>
    </div>
  );

  const schoolSlug = course.school?.toLowerCase().replace(/\s+/g, '-') || 'school-of-commerce';

  return (
    <div className="cd-page">

      {/* Hero */}
      <div className="cd-hero" style={{ backgroundImage: course.coverImage ? `url(${course.coverImage})` : 'linear-gradient(135deg, var(--lpu-black) 0%, #1a2a4a 100%)' }}>
        {course.coverImage && <div className="cd-hero-overlay" />}
        <div className="container cd-hero-content">
          <nav className="cd-breadcrumb">
            <Link href="/">Home</Link> <span>›</span>
            <Link href="/information-cell">Schools</Link> <span>›</span>
            <Link href={`/schools/${schoolSlug}`}>{course.school}</Link> <span>›</span>
            <span>{course.title}</span>
          </nav>
          <div className="cd-hero-icon">{course.icon || '🎓'}</div>
          <h1>{course.title}</h1>
          <p className="cd-hero-sub">{course.description}</p>
          <div className="cd-hero-tags">
            {course.duration && <span>⏱ {course.duration}</span>}
            {course.mode && <span>📋 {course.mode}</span>}
            {course.eligibility && <span>✅ {course.eligibility}</span>}
            {course.seats && <span>🪑 {course.seats} Seats</span>}
          </div>
          <div className="cd-hero-btns">
            <a href="https://admin.miu.edu.in/admission/" target="_blank" rel="noopener noreferrer" className="btn btn-orange">Apply Now</a>
            <button onClick={() => openEnquiry('enquire')} className="btn" style={{ background: 'rgba(255,255,255,0.15)', color: 'white', border: '2px solid rgba(255,255,255,0.4)' }}>Enquire</button>
          </div>
        </div>
      </div>

      <div className="container cd-body">
        <div className="cd-main">

          {/* Overview */}
          {course.overview && (
            <div className="cd-section">
              <h2>Program Overview</h2>
              <p>{course.overview}</p>
            </div>
          )}

          {/* Objectives */}
          {course.objectives?.length > 0 && (
            <div className="cd-section">
              <h2>Learning Objectives</h2>
              <ul className="cd-list">
                {course.objectives.map((obj, i) => <li key={i}><span>✓</span><span>{obj}</span></li>)}
              </ul>
            </div>
          )}

          {/* Syllabus */}
          {course.syllabus && (
            <div className="cd-section">
              <h2>Syllabus</h2>
              <div className="cd-syllabus" dangerouslySetInnerHTML={{ __html: course.syllabus.replace(/\n/g, '<br/>') }} />
            </div>
          )}

          {/* Career Prospects */}
          {course.careerProspects?.length > 0 && (
            <div className="cd-section">
              <h2>Career Prospects</h2>
              <div className="cd-career-grid">
                {course.careerProspects.map((c, i) => (
                  <div key={i} className="cd-career-tag">💼 {c}</div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Sidebar */}
        <aside className="cd-sidebar">
          <div className="cd-info-card">
            <h3>Program Details</h3>
            <ul className="cd-info-list">
              {course.duration && <li><span>Duration</span><strong>{course.duration}</strong></li>}
              {course.eligibility && <li><span>Eligibility</span><strong>{course.eligibility}</strong></li>}
              {course.mode && <li><span>Mode</span><strong>{course.mode}</strong></li>}
              {course.seats && <li><span>Seats</span><strong>{course.seats}</strong></li>}
              {course.fee && <li><span>Fee</span><strong>{course.fee}</strong></li>}
              {course.affiliation && <li><span>Affiliation</span><strong>{course.affiliation}</strong></li>}
              {course.school && <li><span>School</span><strong>{course.school}</strong></li>}
            </ul>
            <a href="https://admin.miu.edu.in/admission/" target="_blank" rel="noopener noreferrer" className="btn btn-orange" style={{ width: '100%', marginTop: '20px', padding: '14px' }}>Apply Now</a>
            <button onClick={() => openEnquiry('enquire')} className="btn btn-black" style={{ width: '100%', marginTop: '10px', padding: '14px' }}>Enquire</button>
          </div>

          {course.highlight && (
            <div className="cd-highlight-card">
              <span>🏆</span>
              <p>{course.highlight}</p>
            </div>
          )}
        </aside>
      </div>

    </div>
  );
}
