const { User } = require("../../models/userModel");
const { RequestError } = require("../../helpers");

const removeProductFromList = async (userId, productId) => {
  const product = await User.findOne({
    shoppingList: {
      $elemMatch: { _id: productId },
    },
  });

  if (!product) {
    throw new RequestError(`Product with id: ${productId} not found`);
  }

  const result = await User.findByIdAndUpdate(
    userId,
    {
      $pull: {
        shoppingList: { _id: productId },
      },
    },
    { new: true }
  );

  return result;
};

module.exports = { removeProductFromList };
