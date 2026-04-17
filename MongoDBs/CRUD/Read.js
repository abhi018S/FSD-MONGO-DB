import dbConnect from "../DB.js";

const readAll = async () => {
  try {
    const db = await dbConnect();

    const userCollection = db.collection("users");

    const users = await userCollection.find().toArray();

    console.log("All users:", users);
  } catch (error) {
    console.log("read error", error.message);
  }
};

readAll();