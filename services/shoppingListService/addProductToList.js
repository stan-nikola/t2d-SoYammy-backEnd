const { User } = require("../../models/userModel");
const { v4: uuidv4 } = require("uuid");

const addProductToList = async (id, product) => {
  const productId = uuidv4();

  const result = await User.findByIdAndUpdate(
    id,
    {
      $push: {
        shoppingList: { ...product, _id: productId },
      },
    },
    { new: true }
  );

  return result;
};

module.exports = { addProductToList };
