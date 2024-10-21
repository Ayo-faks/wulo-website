import { MongoClient } from 'mongodb';

export async function POST(request) {
  const { name, surname, email, country, topic, subject, description } = await request.json();

  const uri = process.env.MONGODB_URI;
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

    return new Response(JSON.stringify({ success: true, id: result.insertedId }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  } finally {
    await client.close();
  }
}