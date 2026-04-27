import mongoose from 'mongoose';

const enquirySchema = new mongoose.Schema({
  name:          { type: String, required: true },
  phone:         { type: String, required: true },
  email:         { type: String, required: true },
  qualification: { type: String, required: true },
  status:        { type: String, enum: ['new', 'contacted', 'closed'], default: 'new' },
}, { timestamps: true });

export default mongoose.models.Enquiry || mongoose.model('Enquiry', enquirySchema);
