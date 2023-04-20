const { ingredientsRoute } = require("./ingredients");
const { recipesRoute } = require("./recipe");

const { subscribe } = require("./subscribe");

const { swaggerRoute } = require("./swagger");
const { userRecipesRoute } = require("./userRecipe");



module.exports = { swaggerRoute, ingredientsRoute, subscribe, recipesRoute, userRecipesRoute, };

