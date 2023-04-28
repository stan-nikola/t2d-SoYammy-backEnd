const { NonExistingParamsError } = require("../../helpers");
const { Recipe } = require("../../models");
// const { User } = require("../../models/userModel");

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

  // let { _id: id, numberOfOwnRecipes } = req.user;
  // numberOfOwnRecipes -= 1;
  // await User.findByIdAndUpdate(id, { numberOfOwnRecipes }, { new: true });

  return result;
};

module.exports = { deleteOwnRecipe };
