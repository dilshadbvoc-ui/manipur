import mongoose from 'mongoose';

const jobApplicationSchema = new mongoose.Schema({
  jobTitle:      { type: String, required: true },
  department:    { type: String, required: true },
  name:          { type: String, required: true },
  email:         { type: String, required: true },
  phone:         { type: String, required: true },
  qualification: { type: String, default: '' },
  experience:    { type: String, default: '' },
  message:       { type: String, default: '' },
  status:        { type: String, enum: ['new', 'reviewing', 'shortlisted', 'rejected'], default: 'new' },
}, { timestamps: true });

export default mongoose.models.JobApplication || mongoose.model('JobApplication', jobApplicationSchema);
