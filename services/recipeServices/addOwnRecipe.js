const { Recipe } = require("../../models");

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
    tags,
    ingredients,
  } = req.body;

  const newRecipe = await Recipe.create({
    title,
    category,
    area,
    instructions,
    description,
    thumb: imageURL || defaultImage,
    preview: imageURL || defaultImage,
    time,
    youtube,
    tags,
    ingredients,
    owner: req.user.id,
  });

  return newRecipe;
};

module.exports = { addOwnRecipe };
