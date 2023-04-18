const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const {
  swaggerRoute,
  ingredientsRoute,
  recipesRoute,
} = require("./routes/api");
const { errorHandler } = require("./helpers");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

// app.use("/api/users", authRouter);
// app.use("/api/users", userRouter);

// app.use("/api/ingredients", ingredientRouter);
// app.use("/api/recipe", ingredientRouter);

app.use("/api", ingredientsRoute);
app.use("/api", recipesRoute);

app.use("/api-docs", swaggerRoute);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use(errorHandler);

module.exports = app;
