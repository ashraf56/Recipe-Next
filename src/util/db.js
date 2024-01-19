import { MongoClient } from "mongodb";


const uri =process.env.DB_URL; 
let cachedClient = null;
let cachedDb = null;
const OPTIONS = {

  useUnifiedTopology: true,

};
export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = await MongoClient.connect(uri, OPTIONS);
  const db = client.db('Tstore'); 

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}