const { Recipe } = require("../../models");
const { User } = require("../../models/userModel");

const addOwnRecipe = async (req) => {
  const imageURL = req.file?.path;

  const defaultImage =
    "https://res.cloudinary.com/dwqka6xc7/image/upload/v1682367423/soYummyT2D/recipes/22104383_1838910253071064_5964162355356251216_o_tg0iha.jpg";

  const {
    title,
    category,
    area,
    instructions,
    description,
    time,
    youtube,
    ingredients,
  } = req.body;

  const parsedIngredients = JSON.parse(ingredients);
  const parsedInstructions = JSON.parse(instructions);

  const newRecipe = await Recipe.create({
    title,
    category,
    area,
    instructions: parsedInstructions,
    description,
    thumb: imageURL || defaultImage,
    preview: imageURL || defaultImage,
    time,
    youtube,
    ingredients: parsedIngredients,
    owner: req.user.id,
  });

  let { _id: id, numberOfOwnRecipes } = req.user;
  numberOfOwnRecipes += 1;
  await User.findByIdAndUpdate(id, { numberOfOwnRecipes }, { new: true });

  return newRecipe;
};

module.exports = { addOwnRecipe };
