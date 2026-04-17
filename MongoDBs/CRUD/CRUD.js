import dbConnect from "../DB.js";

const insertOne = async () => {
  try {
    const db = await dbConnect();

    const userCollection = db.collection("users");

    const user = {
      name: "xyz",
      email: "email@gmail.com",
      password: "123456",
    };

    const createdUser = await userCollection.insertOne(user);

    console.log("User created:", createdUser.insertedId);
  } catch (error) {
    console.log("insert error", error.message);
  }
};

insertOne();