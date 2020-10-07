const mongoose = require("mongoose");

const config = require("config");
//connection To MongoDB
module.exports = async function () {
  try {
    const db = config.get("mongoURI");
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Conntected...");
  } catch (error) {
    console.log("MongoDB not connected...");
    console.dir(error);
  }
};
