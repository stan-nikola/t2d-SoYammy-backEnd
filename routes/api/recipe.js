const express = require("express");
const { asyncWrapper } = require("../../helpers");
const {
  addOwnRecipeController,
  deleteOwnRecipeController,
} = require("../../controllers");

const { uploadRecipeImgCloud } = require("../../middlewares");

const router = express.Router();

router.post(
  "/ownRecipes",
  uploadRecipeImgCloud.single("recipesImage"),
  asyncWrapper(addOwnRecipeController)
);

router.delete("/ownRecipes:recipeId", deleteOwnRecipeController);

module.exports = { recipesRoute: router };
