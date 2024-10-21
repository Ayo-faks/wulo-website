import mongoose from 'mongoose';
import { NextResponse } from 'next/server';

// Connect to MongoDB
const connectMongo = async () => {
  if (mongoose.connection.readyState !== 1) {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
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
  await connectMongo();  // Ensure MongoDB is connected

  const { email } = await req.json();  // Extract email from the request body

  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
  }

  try {
    // Save the email to the database
    const newEmail = new Email({ email });
    await newEmail.save();

    return NextResponse.json({ message: 'Successfully subscribed!' });
  } catch (error) {
    return NextResponse.json({ error: 'An error occurred while saving the email.' }, { status: 500 });
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
}