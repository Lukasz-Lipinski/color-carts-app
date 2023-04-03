import { MongoClient } from 'mongodb';

interface Product {}

export async function connectToDB(
  label: 'products' | 'admins'
) {
  const client = new MongoClient(
    process.env.DB_API || ''
  );

  return (await client.connect())
    .db('color-cart')
    .collection(label);
}

export async function getAllProducts() {
  const client = await connectToDB('products');
  return await client.find().toArray();
}
