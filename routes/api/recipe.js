const express = require("express");

const { asyncWrapper } = require("../../helpers/apiHelpers");
const {
  getCategoryListController,
  getRecipeByIdController,
} = require("../../controllers");

const router = express.Router();

router.get("/category-list", asyncWrapper(getCategoryListController));

router.get("/main-page");

router.get("/:category");

router.get("/:id", asyncWrapper(getRecipeByIdController));

module.exports = router;
