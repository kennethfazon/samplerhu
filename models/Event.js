// lib/models/Event.js

import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: String, required: true },
  startTime: { type: String, required: true },
endTime: { type: String, required: true },
  location: { type: String, required: true },
  category: { type: String, required: true },
  participants: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: false },
}, {
  timestamps: true,
});

const Event = mongoose.models.Event || mongoose.model('Event', EventSchema);

export default Event;
