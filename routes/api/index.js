const { ingredientsRoute } = require("./ingredients");
const { recipesRoute } = require("./recipe");

const { subscribe } = require("./subscribe");

const { swaggerRoute } = require("./swagger");

module.exports = { swaggerRoute, ingredientsRoute, subscribe, recipesRoute };
