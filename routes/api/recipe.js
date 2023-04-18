const express = require("express");
const { asyncWrapper } = require("../../helpers");
const { addOwnRecipeController } = require("../../controllers");

const router = express.Router();

router.post("/ownRecipes", asyncWrapper(addOwnRecipeController));

module.exports = { recipesRoute: router };
