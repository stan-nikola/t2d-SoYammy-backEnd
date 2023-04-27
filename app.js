const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const {
  swaggerRoute,
  ingredientsRoute,
  recipesRoute,
  shoppingListRouter,
} = require("./routes/api");

const authRouter = require("./routes/api/auth");
const userRouter = require("./routes/api/user");
const subscribeRouter = require("./routes/api/subscribe");

const { errorHandler } = require("./helpers");
const { userRecipesRoute } = require("./routes/api/");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(express.static("tmp"));

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extend: true }));

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/", subscribeRouter);

app.use("/api/ingredients", ingredientsRoute);
app.use("/api/recipes", recipesRoute);
app.use("/api/ownrecipes", userRecipesRoute);

app.use("/api/shoppinglist", shoppingListRouter);

app.use("/api-docs", swaggerRoute);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use(errorHandler);

module.exports = app;
