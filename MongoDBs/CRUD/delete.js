import dbConnect from "../DB.js";

const deleteOne = async () => {
  try {
    const db = await dbConnect();

    const userCollection = db.collection("users");


    const query = { email: "email@gmail.com" };

    const result = await userCollection.deleteOne(query);

    if (result.deletedCount === 1) {
      console.log("✅ User deleted successfully");
    } else {
      console.log("⚠️ No user found with that email");
    }
  } catch (error) {
    console.log("delete error", error.message);
  }
};

deleteOne();