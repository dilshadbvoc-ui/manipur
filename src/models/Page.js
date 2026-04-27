import mongoose from 'mongoose';

const pageSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  path: { type: String, required: true },
  category: { type: String, required: true }, // 'about', 'admissions', 'student-life', 'navbar'
  isActive: { type: Boolean, default: true },
  order: { type: Number, default: 0 },
  // Content fields
  title: { type: String, default: '' },
  subtitle: { type: String, default: '' },
  badge: { type: String, default: '' },
  content: { type: String, default: '' }, // Rich text content
  metaDescription: { type: String, default: '' },
  metaKeywords: { type: String, default: '' },
}, { timestamps: true });

export default mongoose.models.Page || mongoose.model('Page', pageSchema);
