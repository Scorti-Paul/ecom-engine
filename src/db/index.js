const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connect =
      (await mongoose.connect(process.env.MONGO_DB_URI)) ||
      mongoose.connect(process.env.MONGO_DB_LOCAL_URI);

    if (connect) {
      console.log(connect.connection.name, "database connected...");
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
