import { compare, hash } from 'bcrypt';
import { MongoClient, ObjectId } from 'mongodb';

export interface Product {
  _id: string;
  id: string;
  name: string;
  brand: string;
  ean: number;
  price: number;
  amount: number;
  category: string;
  subcategory: string;
  description: string;
  model: string;
}

export interface Credentials {
  email: string;
  password: string;
}

export interface User {
  name: string;
  surname: string;
  email: string;
  id: string;
  password: string;
  address?: {
    city: string;
    postcode: string;
    street: string;
    flatNo: number;
  };
}

const salt = 10;

//returns client to Database
export async function connectToDB() {
  const client = new MongoClient(
    process.env.DB_API || ''
  );

  return (await client.connect()).db(
    'color-cart'
  );
}

//comparing passwords
export async function comparePasswords(
  passwordToCompare: string,
  hashedPassword: string
) {
  return await compare(
    passwordToCompare,
    hashedPassword
  );
}

//returns an array of products
export async function getAllProducts() {
  const client = await connectToDB();
  return (await client
    .collection<Product>('products')
    .find()
    .toArray()) as Product[];
}

export async function getProductsByCategory(
  category: string
) {
  const allProducts = await getAllProducts();

  return allProducts.filter(
    (product) => product.category === category
  );
}

//add new user to DB
export async function addNewUser(
  user: Credentials
) {
  const client = (await connectToDB()).collection(
    'users'
  );

  const newUser: Credentials = {
    ...user,
    password: await hash(user.password, salt),
  };

  client.insertOne({
    id: new ObjectId().toString(),
    ...newUser,
  });
}

//assign user credentials to find them in db and return user if exsists or null in case of not
export async function findUser({
  email,
  password,
}: Credentials): Promise<User | null> {
  const client = await connectToDB();

  if (!email || !password) return null;

  const allUsers = await client
    .collection<User>('users')
    .find()
    .toArray();

  const user = allUsers.find(
    (u) => u.email === email
  );

  if (!user) return null;

  console.log(
    'inner fun',
    user.password,
    password
  );

  return (await comparePasswords(
    password,
    user!.password
  ))
    ? user
    : null;
}
