// app/api/events/route.js

import { connectMongoDB } from '/lib/mongodb';
import Event from '/models/Event';

export async function GET(req) {
  try {
    // Connect to the database
    await connectMongoDB();

    // Fetch events from MongoDB
    const events = await Event.find({}).exec();

    // Return events as JSON
    return new Response(JSON.stringify(events), { status: 200 });
  } catch (error) {
    console.log("Error fetching events: ", error);
    return new Response(JSON.stringify({ message: 'Error fetching events', error }), { status: 500 });
  }
}
