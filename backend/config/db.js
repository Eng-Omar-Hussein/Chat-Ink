const mongoose = require('mongoose');
const url="localhost:27017"

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`mongodb://${url}/chatLink`);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
