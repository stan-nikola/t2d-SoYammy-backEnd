const { User } = require("../../models/userModel");

const changeUserData = async (req) => {
  // Использует объект изменений, который содержит только то свойство, которое изменилось
  const objectOfChanges = {};
  // console.log("objectOfChanges First=", objectOfChanges);
  if (req.body.name) {
    objectOfChanges.name = req.body.name;
  }
  if (req.file) {
    objectOfChanges.avatarUrl = req.file.path;
  }
  // console.log("objectOfChanges =", objectOfChanges);
  return await User.findByIdAndUpdate(
    req.user._id,
    { ...objectOfChanges },
    { new: true }
  );
};

module.exports = {
  changeUserData,
};

// Второй способ:
// Изменяет всегда оба свойства (имя и файл), даже если одно из этих свойств не менялось

// const changeUserData = async (req) => {
//   console.log("req.body = ", req.body);
//   console.log("req.file = ", req.file);
//   let avatarUrl = req.user.avatarUrl;
//   console.log("avatarUrl First = ", avatarUrl);
//   let name = req.user.name;
//   console.log("name 1st = ", name);
//   if (req.body.name) {
//     name = req.body.name;
//   }
//   console.log("newName =", name);
//   if (req.file) {
//     avatarUrl = req.file.path;
//   }
//   console.log("newAvatarUrl =", avatarUrl);
//   return await User.findByIdAndUpdate(
//     req.user._id,
//     { avatarUrl, name },
//     { new: true }
//   );
// };
