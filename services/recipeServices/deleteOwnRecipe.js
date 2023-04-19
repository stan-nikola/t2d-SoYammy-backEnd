const { NonExistingParamsError } = require("../../helpers");
const { Recipe } = require("../../models");

const deleteOwnRecipe = async (req) => {

  const result = await Recipe.findOneAndDelete({
    _id: req.params.recipeId,
    owner: req.user._id.toString(),
  });

  if (!result) {
    throw new NonExistingParamsError(
      `Recipe with id: ${req.params.recipeId} not found`
    );
  }
  return result;
};

module.exports = { deleteOwnRecipe };
