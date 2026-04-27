'use client';

import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/navigation';
import API from '@/lib/api';
import { AuthContext } from '@/context/AuthContext';
import '@/styles/AdminCalendar.css';

export default function AdminAcademicCalendar() {
  const router = useRouter();
  const { user, loading: authLoading } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');
  
  const [academicYear, setAcademicYear] = useState('2025-26');
  const [semesters, setSemesters] = useState([
    {
      title: 'Odd Semester',
      period: 'July – November',
      icon: '📚',
      color: 'orange',
      events: [
        { label: 'Classes Commence', date: 'July 2025', icon: '🎓' },
        { label: 'Mid-term Exams', date: 'September 2025', icon: '📝' },
        { label: 'End-term Exams', date: 'November 2025', icon: '✍️' },
      ]
    },
    {
      title: 'Even Semester',
      period: 'January – May',
      icon: '📖',
      color: 'blue',
      events: [
        { label: 'Classes Commence', date: 'January 2026', icon: '🎓' },
        { label: 'Mid-term Exams', date: 'March 2026', icon: '📝' },
        { label: 'End-term Exams', date: 'May 2026', icon: '✍️' },
      ]
    }
  ]);
  
  const [note, setNote] = useState('The academic calendar is subject to revision. Students are advised to check the official notice board for the latest updates.');

  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/admin/login');
      return;
    }
    if (!user) return;

    API.get('/settings/academic-calendar')
      .then(({ data }) => {
        if (data?.content) {
          const content = data.content;
          if (content.academicYear) setAcademicYear(content.academicYear);
          if (content.semesters) setSemesters(content.semesters);
          if (content.note) setNote(content.note);
        }
      })
      .catch(err => console.error('Error loading calendar:', err))
      .finally(() => setLoading(false));
  }, [user, authLoading, router]);

  const handleSave = async () => {
    setSaving(true);
    setMessage('');
    
    try {
      const content = {
        academicYear,
        semesters,
        note
      };
      
      await API.post('/settings/academic-calendar', { content });
      setMessage('Academic calendar saved successfully!');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      setMessage('Error saving calendar: ' + (error.response?.data?.message || error.message));
    } finally {
      setSaving(false);
    }
  };

  const addSemesterEvent = (semIndex) => {
    const newSemesters = [...semesters];
    newSemesters[semIndex].events.push({ label: '', date: '', icon: '📅' });
    setSemesters(newSemesters);
  };

  const removeSemesterEvent = (semIndex, eventIndex) => {
    const newSemesters = [...semesters];
    newSemesters[semIndex].events.splice(eventIndex, 1);
    setSemesters(newSemesters);
  };

  const updateSemesterEvent = (semIndex, eventIndex, field, value) => {
    const newSemesters = [...semesters];
    newSemesters[semIndex].events[eventIndex][field] = value;
    setSemesters(newSemesters);
  };

  if (authLoading || loading) return <div style={{ padding: '40px', textAlign: 'center' }}>Loading...</div>;

  return (
    <div className="admin-content-page">
      <div className="admin-header">
        <h1>Academic Calendar Editor</h1>
        <button onClick={() => router.push('/admin/dashboard')} className="btn-back">← Back to Dashboard</button>
      </div>

      {message && (
        <div className={`admin-message ${message.includes('Error') ? 'error' : 'success'}`}>
          {message}
        </div>
      )}

      <div className="admin-form">
        {/* Academic Year */}
        <div className="form-section">
          <h2>Academic Year</h2>
          <input
            type="text"
            value={academicYear}
            onChange={(e) => setAcademicYear(e.target.value)}
            placeholder="e.g., 2025-26"
            className="form-input"
          />
        </div>

        {/* Semesters */}
        <div className="form-section">
          <h2>Semesters</h2>
          {semesters.map((sem, semIndex) => (
            <div key={semIndex} className="nested-section">
              <h3>Semester {semIndex + 1}</h3>
              <div className="form-row">
                <div className="form-group">
                  <label>Title</label>
                  <input
                    type="text"
                    value={sem.title}
                    onChange={(e) => {
                      const newSemesters = [...semesters];
                      newSemesters[semIndex].title = e.target.value;
                      setSemesters(newSemesters);
                    }}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label>Period</label>
                  <input
                    type="text"
                    value={sem.period}
                    onChange={(e) => {
                      const newSemesters = [...semesters];
                      newSemesters[semIndex].period = e.target.value;
                      setSemesters(newSemesters);
                    }}
                    className="form-input"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Icon</label>
                  <input
                    type="text"
                    value={sem.icon}
                    onChange={(e) => {
                      const newSemesters = [...semesters];
                      newSemesters[semIndex].icon = e.target.value;
                      setSemesters(newSemesters);
                    }}
                    className="form-input"
                    placeholder="📚"
                  />
                </div>
                <div className="form-group">
                  <label>Color</label>
                  <select
                    value={sem.color}
                    onChange={(e) => {
                      const newSemesters = [...semesters];
                      newSemesters[semIndex].color = e.target.value;
                      setSemesters(newSemesters);
                    }}
                    className="form-input"
                  >
                    <option value="orange">Orange</option>
                    <option value="blue">Blue</option>
                  </select>
                </div>
              </div>

              <h4>Events</h4>
              {sem.events.map((event, eventIndex) => (
                <div key={eventIndex} className="event-item">
                  <input
                    type="text"
                    value={event.icon}
                    onChange={(e) => updateSemesterEvent(semIndex, eventIndex, 'icon', e.target.value)}
                    placeholder="🎓"
                    className="form-input-small"
                  />
                  <input
                    type="text"
                    value={event.label}
                    onChange={(e) => updateSemesterEvent(semIndex, eventIndex, 'label', e.target.value)}
                    placeholder="Event Label"
                    className="form-input"
                    style={{ flex: 2 }}
                  />
                  <input
                    type="text"
                    value={event.date}
                    onChange={(e) => updateSemesterEvent(semIndex, eventIndex, 'date', e.target.value)}
                    placeholder="Date"
                    className="form-input"
                  />
                  <button onClick={() => removeSemesterEvent(semIndex, eventIndex)} className="btn-remove">×</button>
                </div>
              ))}
              <button onClick={() => addSemesterEvent(semIndex)} className="btn-add">+ Add Event</button>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="form-section">
          <h2>Important Note</h2>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="form-textarea"
            rows="3"
            placeholder="Important note for students..."
          />
        </div>

        <div className="form-actions">
          <button onClick={handleSave} disabled={saving} className="btn-save">
            {saving ? 'Saving...' : 'Save Changes'}
          </button>
          <a href="/academics/academic-calendar" target="_blank" className="btn-preview">
            Preview Page
          </a>
        </div>
      </div>
    </div>
  );
}
