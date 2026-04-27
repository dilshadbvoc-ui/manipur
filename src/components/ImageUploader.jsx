'use client';

import React, { useState, useRef } from 'react';

export default function ImageUploader({ value, onChange, placeholder = 'https://...', label = 'Image URL', height = 120 }) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const fileRef = useRef();

  const inp = {
    flex: 1, padding: '10px 14px', borderRadius: '8px',
    border: '1px solid #ddd', fontSize: '0.93rem',
    outline: 'none', fontFamily: 'inherit',
  };

  const handleFile = async e => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) { setError('Please select an image file.'); return; }
    if (file.size > 2 * 1024 * 1024) { setError('Image must be under 2MB.'); return; }

    setUploading(true);
    setError('');
    try {
      const fd = new FormData();
      fd.append('file', file);

      // Attach auth token from localStorage
      const headers = {};
      const userInfo = JSON.parse(localStorage.getItem('userInfo') || 'null');
      if (userInfo?.token) headers['Authorization'] = `Bearer ${userInfo.token}`;

      const res = await fetch('/api/upload', { method: 'POST', body: fd, headers });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Upload failed');
      onChange(data.url);
    } catch (err) {
      setError(err.message || 'Upload failed. Please try again.');
    }
    setUploading(false);
    if (fileRef.current) fileRef.current.value = '';
  };

  return (
    <div style={{ marginBottom: '4px' }}>
      {label && <label style={{ fontWeight: '600', fontSize: '0.88rem', display: 'block', color: '#444', marginBottom: '6px' }}>{label}</label>}

      <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
        <input
          type="text"
          value={value || ''}
          onChange={e => onChange(e.target.value)}
          placeholder={placeholder}
          style={inp}
        />
        <button
          type="button"
          onClick={() => fileRef.current?.click()}
          disabled={uploading}
          style={{
            padding: '10px 16px', borderRadius: '8px', border: '1.5px dashed #aaa',
            background: uploading ? '#f0f0f0' : 'white', cursor: uploading ? 'not-allowed' : 'pointer',
            fontWeight: '700', fontSize: '0.85rem', color: '#555', whiteSpace: 'nowrap',
          }}
        >
          {uploading ? '⏳ Uploading...' : '📁 Upload from PC'}
        </button>
        <input ref={fileRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={handleFile} />
      </div>

      {error && <p style={{ color: '#e53e3e', fontSize: '0.82rem', marginTop: '4px' }}>{error}</p>}

      {value && (
        <div style={{ marginTop: '10px', position: 'relative', display: 'inline-block' }}>
          <img
            src={value}
            alt="Preview"
            style={{ height: height > 0 ? `${height}px` : undefined, maxWidth: '100%', objectFit: 'cover', borderRadius: '8px', display: 'block', border: '1px solid #eee' }}
            onError={e => e.target.style.display = 'none'}
          />
          <button
            type="button"
            onClick={() => onChange('')}
            style={{ position: 'absolute', top: '4px', right: '4px', background: 'rgba(200,0,0,0.85)', color: 'white', border: 'none', borderRadius: '50%', width: '22px', height: '22px', cursor: 'pointer', fontSize: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}
          >×</button>
        </div>
      )}
    </div>
  );
}
