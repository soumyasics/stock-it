const mongoose = require("mongoose");
const connectDb = async () => {
  const DB_NAME = "stock_it";
  try {
    const conn = await mongoose.connect(`mongodb://localhost:27017/${DB_NAME}`);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("Error on mongo DB connection", error);
  }
};

module.exports = { connectDb };
