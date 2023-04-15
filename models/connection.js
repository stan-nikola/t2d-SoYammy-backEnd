const mongoose = require("mongoose");

const { DB_HOST } = process.env;

const connectToContactsDb = async () => {
  mongoose.set("strictQuery", false);

  return mongoose.connect(DB_HOST);
};

module.exports = { connectToContactsDb };
