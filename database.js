import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const url = process.env.MONGODB_URI;

const client = new MongoClient(url);

const dbName = 'HelloWorld';

async function main() {
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('User');

  const data = {
    firstname: 'Piysh',
    lastname: 'Winner',
    city: 'Mumbai',
    phone: '9876543210',
  };

  // Insert
  //   const insertResult = await collection.insertMany([data]);
  //   console.log('Inserted documents =>', insertResult);
  // Read
  //   const result = await collection.find({}).toArray();
  //   console.log('Found documents =>', result);

  const result = await collection.find({ firstname: 'Piysh' }).toArray();
  console.log('Found documents =>', result);

  const countResult = await collection.countDocuments({});
  console.log('Number of documents in the user collection =>', countResult);

  return 'done';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
