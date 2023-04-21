const { User } = require("../../models/userModel");

const addProductToList = async (id, product) => {
  const result = await User.findByIdAndUpdate(
    id,
    {
      $push: {
        shoppingList: product,
      },
    },
    { new: true }
  );

  return result;
};

module.exports = { addProductToList };
