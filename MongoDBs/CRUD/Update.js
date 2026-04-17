import dbConnect from "../DB.js";

const updateOne = async () => {
  try {
    const db = await dbConnect();

    const userCollection = db.collection("users");

    const query = { email: "email@gmail.com" };
    const updateData = {
      $set: {
        name: "updatedName",
        password: "newpassword123",
      },
    };

    const result = await userCollection.updateOne(query, updateData);

    if (result.matchedCount === 1) {
      console.log("✅ User found and updated");
    } else {
      console.log("⚠️ No user found with that email");
    }
  } catch (error) {
    console.log("update error", error.message);
  }
};

updateOne();