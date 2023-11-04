import { MongoClient } from "mongodb";
const DB_ID = process.env.DB_ID;
const DB_PW = process.env.DB_PW;
const url = `mongodb+srv://${DB_ID}:${DB_PW}@hun.5t9rgdq.mongodb.net/?retryWrites=true&w=majority`;

if (!url) {
  throw new Error("The MONGODB_URL environment variable is not defined");
}

let connectDB: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  if (!global._mongo) {
    global._mongo = new MongoClient(url).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(url).connect();
}

export { connectDB };
