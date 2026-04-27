import mongoose from 'mongoose';

const ImageSchema = new mongoose.Schema({
  filename:  { type: String, required: true },
  mimeType:  { type: String, required: true },
  data:      { type: String, required: true }, // base64 encoded
  size:      { type: Number },
  uploadedBy:{ type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

export default mongoose.models.Image || mongoose.model('Image', ImageSchema);
