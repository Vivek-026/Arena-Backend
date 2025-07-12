const mongoose = require('mongoose');

const connect = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://arena_admin:arena%4026@cluster0.1vsgvte.mongodb.net/arena?retryWrites=true&w=majority&appName=Cluster0'
    );
    console.log("✅ Connected to MongoDB Atlas");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  }
};

module.exports = connect;
