import mongoose from 'mongoose';

const settingsSchema = new mongoose.Schema({
  type: { type: String, required: true, unique: true },
  content: { type: mongoose.Schema.Types.Mixed, default: {} },
}, { timestamps: true });

export default mongoose.models.Settings || mongoose.model('Settings', settingsSchema);
