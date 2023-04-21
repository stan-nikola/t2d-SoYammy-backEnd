const { User } = require("../../models/userModel");

const getShoppingList = async (id) => {
  const result = await User.findById(id).select("shoppingList -_id");
  const shoppingList = result.shoppingList;

  return shoppingList;
};
module.exports = { getShoppingList };
