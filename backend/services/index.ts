import { hash } from 'bcrypt';
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
  password: string;
  address?: {
    city: string;
    postcode: string;
    street: string;
    flatNo: number;
  };
}

export interface FrontendError {
  msg: string;
}

export interface FrontendResponse<T> {
  data?: T;
  error?: FrontendError;
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
  userPassword: string,
  hashedPassword: string
) {
  return (
    (await hash(userPassword, salt)) ===
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
  client.insertOne({
    _id: new ObjectId(),
    ...user,
  });
}

//assign user credentials to find them in db and return user if exsists or null in case of not
export async function findUser({
  email,
  password,
}: Credentials): Promise<User | null> {
  const client = await connectToDB();

  return (
    ((
      await client
        .collection<User>('users')
        .find()
        .toArray()
    ).find(
      async (user) =>
        user.email === email &&
        (await comparePasswords(
          password,
          user.password
        ))
    ) as User) || null
  );
}
