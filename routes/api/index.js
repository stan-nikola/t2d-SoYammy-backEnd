const { ingredientsRoute } = require("./ingredients");
const { recipesRoute } = require("./recipe");

const { swaggerRoute } = require("./swagger");
const { userRecipesRoute } = require("./userRecipe");

module.exports = {
  swaggerRoute,
  ingredientsRoute,
  recipesRoute,
  userRecipesRoute,
};
