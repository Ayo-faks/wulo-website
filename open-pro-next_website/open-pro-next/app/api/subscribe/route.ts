import mongoose from 'mongoose';
import { NextResponse } from 'next/server';

// Interface definitions
interface IEmail {
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

// Connection state tracking
let isConnecting = false;
const MAX_RETRIES = 3;
const RETRY_INTERVAL = 5000;
const DATABASE_NAME = 'wulo-cosmosdb-staging-uksouth';

// Enhanced Email schema
const EmailSchema = new mongoose.Schema<IEmail>({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
    maxlength: [254, 'Email exceeds maximum length'],
    validate: {
      validator: (v: string) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(v);
      },
      message: 'Invalid email format'
    }
  }
}, {
  collection: 'emails',
  timestamps: true,
  versionKey: false
});

// Create Email model
mongoose.models = {};
const Email = mongoose.model<IEmail>('Email', EmailSchema);

// Enhanced database connection
const connectMongo = async (retryCount = 0): Promise<void> => {
  try {
    if (isConnecting) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      return;
    }

    // Force close any existing connection
    if (mongoose.connection.readyState !== 0) {
      await mongoose.connection.close();
    }

    isConnecting = true;
    const uri = process.env.MONGODB_URI;
    
    if (!uri) {
      throw new Error('MONGODB_URI environment variable is not defined');
    }

    console.log('Connecting to MongoDB...');
    
    // Updated options removing deprecated settings
    const options: mongoose.ConnectOptions = {
      dbName: DATABASE_NAME,
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    };

    await mongoose.connect(uri, options);
    
    // Verify connection
    const db = mongoose.connection.db;
    console.log(`Connected to database: ${db.databaseName}`);
    
    if (db.databaseName !== DATABASE_NAME) {
      throw new Error(`Connected to wrong database: ${db.databaseName}. Expected: ${DATABASE_NAME}`);
    }

    const collections = await db.listCollections().toArray();
    console.log('Available collections:', collections.map(c => c.name));

  } catch (error) {
    console.error('MongoDB connection error:', error);
    if (retryCount < MAX_RETRIES) {
      await new Promise(resolve => setTimeout(resolve, RETRY_INTERVAL));
      return connectMongo(retryCount + 1);
    }
    throw error;
  } finally {
    isConnecting = false;
  }
};

// POST handler
export async function POST(request: Request) {
  try {
    console.log('Handling POST request...');
    const body = await request.json();
    const { email } = body;

    if (!email?.trim()) {
      return NextResponse.json(
        { error: 'Email is required' }, 
        { status: 400 }
      );
    }

    await connectMongo();
    
    // Verify database connection
    const currentDb = mongoose.connection.db.databaseName;
    if (currentDb !== DATABASE_NAME) {
      throw new Error(`Connected to wrong database: ${currentDb}`);
    }

    console.log(`Saving email to database: ${currentDb}`);
    
    const newEmail = await Email.create({ email: email.trim().toLowerCase() });
    console.log('Email saved successfully:', newEmail);
    
    const count = await Email.countDocuments();
    
    return NextResponse.json(
      { 
        message: 'Successfully subscribed',
        count,
        id: newEmail._id,
        database: currentDb
      }, 
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Subscription error:', error);
    
    if (error.code === 11000) {
      return NextResponse.json(
        { error: 'Email already exists' }, 
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: error.message || 'Internal server error' }, 
      { status: 500 }
    );
  }
}

// Route segment configuration
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const runtime = 'nodejs';

export { connectMongo, Email };
