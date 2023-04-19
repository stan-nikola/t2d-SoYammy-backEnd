const { Recipe } = require("../../models");

const getUserRecipes = async (req) => {
  return Recipe.find({ owner: req.user._id });
};

module.exports = { getUserRecipes };
