const express = require("express");
const { asyncWrapper } = require("../../helpers");
const {
  addOwnRecipeController,
  deleteOwnRecipeController,
} = require("../../controllers");

const { uploadRecipeImgCloud, authMiddleware } = require("../../middlewares");
const {
  getUserRecipesController,
} = require("../../controllers/recipeControllers/getUserRecipesController");

const router = express.Router();

router.post(
  "/ownRecipes",
  authMiddleware,
  uploadRecipeImgCloud.single("recipesImage"),
  asyncWrapper(addOwnRecipeController)
);

router.delete(
  "/ownRecipes/:recipeId",
  authMiddleware,
  asyncWrapper(deleteOwnRecipeController)
);
router.get(
  "/ownRecipes",
  authMiddleware,
  asyncWrapper(getUserRecipesController)
);

module.exports = { recipesRoute: router };
