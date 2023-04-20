const { User } = require("../../models/userModel");

const changeUserAvatar = async (req) => {
  const avatarUrl = req.file.path;
  await User.findByIdAndUpdate(req.user._id, { avatarUrl }, { new: true });
  return avatarUrl;
};

module.exports = {
  changeUserAvatar,
};

// const changeUserAvatar = async (req) => {
//   const result = {
//     avatarUrl: req.user.avatarUrl,
//     name: req.user.name,
//   };
//   const avatarUrl = req.file.path;
//   const name = req.body.name;
//   if (req.file) {
//     await User.findByIdAndUpdate(req.user._id, { avatarUrl });
//     result.avatarUrl = avatarUrl;
//   }
//   if (req.body.name) {
//     await User.findByIdAndUpdate(req.user._id, { name });
//     result.name = name;
//   }
//   return {
//     avatarUrl,
//     name,
//   };
// };
