const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const { swaggerRoute } = require("./routes/api");

require("dotenv").config();

const recipesRouter = require("./routes/api/recipe");
const { errorHandler } = require("./helpers");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

// app.use("/api/users", authRouter);
// app.use("/api/users", userRouter);

// app.use("/api/ingredients", ingredientRouter);
app.use("/api/recipes", recipesRouter);

app.use("/api-docs", swaggerRoute);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use(errorHandler);

module.exports = app;
