const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const { logInController } = require("./controllers/logInController");
const {
  ingredientController,
} = require("./controllers/ingredient/ingredientController");

require("dotenv").config();

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/user", logInController);
app.use("/api/ingredient", ingredientController);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

module.exports = app;
