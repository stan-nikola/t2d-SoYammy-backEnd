const app = require("./app");

const { PORT = 3002 } = process.env;
const { connectToContactsDb } = require("./models");

module.exports = app.listen(PORT, async () => {
  try {
    connectToContactsDb();
    console.log("Database connection successful");
    console.log(`Server running. Use our API on port: ${PORT}`);
  } catch (error) {
    console.log(`Database connection error:${error.message}`);
    process.exit(1);
  }
});
