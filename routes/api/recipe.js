const express = require("express");

const { asyncWrapper } = require("../../helpers/apiHelpers");
const {
  getCategoryListController,
  getRecipesController,
  getRecipesByCategoryController,
  getRecipeByIdController,
} = require("../../controllers");

const router = express.Router();

router.get("/category-list", asyncWrapper(getCategoryListController));

router.get("/main-page", asyncWrapper(getRecipesController));

router.get("/:category", asyncWrapper(getRecipesByCategoryController));

router.get("/:id", asyncWrapper(getRecipeByIdController));

module.exports = router;
