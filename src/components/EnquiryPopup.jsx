'use client';

import React, { useState } from 'react';
import { useEnquiry } from '@/context/EnquiryContext';
import '@/styles/EnquiryPopup.css';

const QUALIFICATIONS = ['10th Pass', '12th Pass', 'Diploma', 'Graduate', 'Post Graduate', 'Other'];

const EnquiryPopup = () => {
  const { isOpen, mode, closeEnquiry } = useEnquiry();
  const [form, setForm] = useState({ name: '', phone: '', email: '', qualification: '' });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    try {
      await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setDone(true);
      setForm({ name: '', phone: '', email: '', qualification: '' });
      setTimeout(() => { setDone(false); closeEnquiry(); }, 2500);
    } catch {
      setError('Something went wrong. Please try again.');
    }
    setSubmitting(false);
  };

  const isApply = mode === 'apply';

  return (
    <div className="eq-overlay" onClick={e => e.target === e.currentTarget && closeEnquiry()}>
      <div className="eq-modal">
        <button className="eq-close" onClick={closeEnquiry} aria-label="Close">✕</button>

        {done ? (
          <div className="eq-success">
            <div className="eq-success-icon">✓</div>
            <h3>Thank You!</h3>
            <p>We'll get back to you shortly.</p>
          </div>
        ) : (
          <>
            <div className="eq-header">
              <div className="eq-header-badge">{isApply ? '🎓 Apply Now' : '💬 Enquire'}</div>
              <h2>{isApply ? 'Start Your Journey at MIU' : 'Have a Question?'}</h2>
              <p>{isApply ? 'Fill in your details and our admissions team will reach out to you.' : 'Send us your query and we\'ll get back to you soon.'}</p>
            </div>

            <form onSubmit={handleSubmit} className="eq-form">
              <div className="eq-row">
                <div className="eq-field">
                  <label>Full Name *</label>
                  <input name="name" value={form.name} onChange={handleChange} required placeholder="Your full name" />
                </div>
                <div className="eq-field">
                  <label>Phone Number *</label>
                  <input name="phone" type="tel" value={form.phone} onChange={handleChange} required placeholder="+91 XXXXX XXXXX" />
                </div>
              </div>
              <div className="eq-row">
                <div className="eq-field">
                  <label>Email Address *</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="you@email.com" />
                </div>
                <div className="eq-field">
                  <label>Highest Qualification *</label>
                  <select name="qualification" value={form.qualification} onChange={handleChange} required>
                    <option value="">Select qualification</option>
                    {QUALIFICATIONS.map(q => <option key={q}>{q}</option>)}
                  </select>
                </div>
              </div>
              {error && <p className="eq-error">{error}</p>}
              <button type="submit" disabled={submitting} className={`eq-submit ${isApply ? 'eq-submit-apply' : 'eq-submit-enquire'}`}>
                {submitting ? 'Submitting...' : isApply ? 'Submit Application' : 'Send Enquiry'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default EnquiryPopup;
