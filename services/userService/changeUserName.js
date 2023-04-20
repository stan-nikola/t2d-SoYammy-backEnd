const { User } = require("../../models/userModel");

const changeUserName = async (req) => {
  const name = req.body.name;
  return await User.findByIdAndUpdate(req.user._id, { name }, { new: true });
};

module.exports = {
  changeUserName,
};
