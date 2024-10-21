import mongoose from 'mongoose';
import { NextResponse } from 'next/server';

// Connect to MongoDB
const connectMongo = async () => {
  if (mongoose.connection.readyState !== 1) {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error('MONGODB_URI is not defined in the environment variables');
    }
    await mongoose.connect(uri);
  }
};

// Email schema definition
const EmailSchema = new mongoose.Schema({
  email: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Create or retrieve the Email model
const Email = mongoose.models.Email || mongoose.model('Email', EmailSchema);

// POST method handler
export async function POST(req: Request) {
  try {
    await connectMongo();  // Ensure MongoDB is connected

    const body = await req.json();
    const email = body.email;

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    // Save the email to the database
    const newEmail = new Email({ email });
    await newEmail.save();

    return NextResponse.json({ message: 'Successfully subscribed!' });
  } catch (error) {
    console.error('Error in POST handler:', error);
    return NextResponse.json({ error: 'An error occurred while processing the request.' }, { status: 500 });
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
}