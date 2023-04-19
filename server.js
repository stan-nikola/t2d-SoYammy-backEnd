require("dotenv").config();
const app = require("./app");
require("dotenv").config();

const { PORT = 3002 } = process.env;

const { connectToDb } = require("./models");

module.exports = app.listen(PORT, async () => {
  try {
    connectToDb();
    console.log("Database connection successful");
    console.log(`Server running. Use our API on port: ${PORT}`);
  } catch (error) {
    console.log(`Database connection error:${error.message}`);
    process.exit(1);
  }
});
