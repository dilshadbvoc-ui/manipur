'use client';

import React, { useState, useEffect } from 'react';
import API from '@/lib/api';
import '@/styles/AdminResults.css';

const EMPTY_FORM = {
  title: '',
  link: '',
  description: '',
  isActive: true,
  order: 0,
  publishDate: new Date().toISOString().split('T')[0],
};

export default function AdminResultsPage() {
  const [results, setResults] = useState([]);
  const [form, setForm] = useState(EMPTY_FORM);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    loadResults();
  }, []);

  const loadResults = async () => {
    try {
      const response = await API.get('/results');
      setResults(response.data);
    } catch (error) {
      console.error('Error loading results:', error);
      alert('Failed to load results');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    try {
      if (editingId) {
        await API.put(`/results/${editingId}`, form);
        alert('Result updated successfully!');
      } else {
        await API.post('/results', form);
        alert('Result created successfully!');
      }
      setForm(EMPTY_FORM);
      setEditingId(null);
      loadResults();
    } catch (error) {
      console.error('Error saving result:', error);
      alert('Failed to save result');
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (result) => {
    setForm({
      title: result.title,
      link: result.link,
      description: result.description || '',
      isActive: result.isActive,
      order: result.order || 0,
      publishDate: new Date(result.publishDate).toISOString().split('T')[0],
    });
    setEditingId(result._id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this result?')) return;

    try {
      await API.delete(`/results/${id}`);
      alert('Result deleted successfully!');
      loadResults();
    } catch (error) {
      console.error('Error deleting result:', error);
      alert('Failed to delete result');
    }
  };

  const handleCancel = () => {
    setForm(EMPTY_FORM);
    setEditingId(null);
  };

  if (loading) {
    return (
      <div className="admin-results-page">
        <div className="admin-header">
          <h1>Manage Results</h1>
        </div>
        <div style={{ padding: '40px', textAlign: 'center' }}>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-results-page">
      <div className="admin-header">
        <h1>Manage Examination Results</h1>
        <p>Add, edit, or remove examination results and their redirect links</p>
      </div>

      {/* Form Section */}
      <div className="admin-form-section">
        <h2>{editingId ? 'Edit Result' : 'Add New Result'}</h2>
        <form onSubmit={handleSubmit} className="result-form">
          <div className="form-row">
            <div className="form-group">
              <label>Result Title *</label>
              <input
                type="text"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                placeholder="e.g., Paramedical Examination, October 2025"
                required
              />
            </div>

            <div className="form-group">
              <label>Redirect Link *</label>
              <input
                type="url"
                value={form.link}
                onChange={(e) => setForm({ ...form, link: e.target.value })}
                placeholder="https://example.com/result"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Description (Optional)</label>
            <textarea
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              placeholder="Brief description about this result"
              rows="3"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Publish Date</label>
              <input
                type="date"
                value={form.publishDate}
                onChange={(e) => setForm({ ...form, publishDate: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label>Display Order</label>
              <input
                type="number"
                value={form.order}
                onChange={(e) => setForm({ ...form, order: parseInt(e.target.value) || 0 })}
                placeholder="0"
                min="0"
              />
              <small>Lower numbers appear first</small>
            </div>

            <div className="form-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={form.isActive}
                  onChange={(e) => setForm({ ...form, isActive: e.target.checked })}
                />
                <span>Active (visible on website)</span>
              </label>
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-save" disabled={saving}>
              {saving ? 'Saving...' : editingId ? 'Update Result' : 'Add Result'}
            </button>
            {editingId && (
              <button type="button" onClick={handleCancel} className="btn-cancel">
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Results List */}
      <div className="admin-list-section">
        <h2>Existing Results ({results.length})</h2>
        {results.length === 0 ? (
          <div className="empty-state">
            <p>No results added yet. Create your first result above.</p>
          </div>
        ) : (
          <div className="results-table">
            <table>
              <thead>
                <tr>
                  <th>Order</th>
                  <th>Title</th>
                  <th>Link</th>
                  <th>Publish Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {results.map((result) => (
                  <tr key={result._id} className={!result.isActive ? 'inactive' : ''}>
                    <td>{result.order}</td>
                    <td>
                      <strong>{result.title}</strong>
                      {result.description && (
                        <div className="result-desc">{result.description}</div>
                      )}
                    </td>
                    <td>
                      <a href={result.link} target="_blank" rel="noopener noreferrer" className="link-preview">
                        {result.link.length > 40 ? result.link.substring(0, 40) + '...' : result.link}
                      </a>
                    </td>
                    <td>{new Date(result.publishDate).toLocaleDateString('en-IN')}</td>
                    <td>
                      <span className={`status-badge ${result.isActive ? 'active' : 'inactive'}`}>
                        {result.isActive ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td>
                      <div className="action-buttons">
                        <button onClick={() => handleEdit(result)} className="btn-edit">
                          Edit
                        </button>
                        <button onClick={() => handleDelete(result._id)} className="btn-delete">
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
