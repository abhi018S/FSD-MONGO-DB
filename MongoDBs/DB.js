import { MongoClient } from "mongodb";

const MONGO_URI = "mongodb+srv://adityamaddheshiya669_db_user:adminS@cluster1.mbrjica.mongodb.net/?appName=Cluster1";
const DB_NAME = "users";

const client = new MongoClient(MONGO_URI);

const dbConnect = async () => {
  try {
    await client.connect();
    console.log("MongoDB connected successfully");

    return client.db(DB_NAME); 
  } catch (error) {
    console.log("connection error", error.message);
  }
};

export default dbConnect; 