// app/api/createEvent/route.js
import { connectMongoDB } from '/lib/mongodb';
import Event from '../../../models/Event'; // Your Mongoose model

export async function POST(req) {
  try {
    const data = await req.json(); // Read the incoming request body

    // Connect to MongoDBn
    await connectMongoDB();

    const { title, date, startTime, endTime, location, category, participants, description, image } = data;

    // Create a new event document
    const newEvent = new Event({
      title,
      date,
      startTime,
      endTime,
      location,
      category,
      participants,
      description,
      image, // Store the base64 or image URL
    });

    // Save the event to MongoDB
    await newEvent.save();

    return new Response(JSON.stringify({ message: 'Event created successfully' }), { status: 201 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Failed to create event' }), { status: 500 });
  }
}
