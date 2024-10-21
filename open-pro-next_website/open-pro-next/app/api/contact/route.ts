import { MongoClient } from 'mongodb';
import { NextRequest, NextResponse } from 'next/server';

function isError(error: unknown): error is Error {
  return error instanceof Error;
}

export async function POST(request: NextRequest) {
  const { name, surname, email, country, topic, subject, description } = await request.json();

  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error('MONGODB_URI is not defined in the environment variables');
  }
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db('your_database_name');
    const collection = database.collection('contacts');

    const result = await collection.insertOne({
      name,
      surname,
      email,
      country,
      topic,
      subject,
      description,
      createdAt: new Date()
    });

    return NextResponse.json({ success: true, id: result.insertedId }, { status: 201 });
  } catch (error) {
    if (isError(error)) {
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    } else {
      return NextResponse.json({ success: false, error: 'An unknown error occurred' }, { status: 500 });
    }
  } finally {
    await client.close();
  }
}