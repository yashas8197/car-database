const mongoose = require("mongoose");

const mongoUri = process.env.MONGODB;

const initializeDatabase = () => {
  try {
    const connection = mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    if (connection) {
      console.log("Connected to MongoDB");
    }
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports.initializeDatabase = initializeDatabase;
