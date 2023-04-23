const { User } = require("../../models/userModel");
const { RegistrationConflict } = require("../../helpers");

const changeUserAvatar = async (req) => {
  const avatarUrl = req.file.path;
  // console.log("============REQ.FILE==========", req.file);
  // console.log("============REQ.FILE.SIZE==========", req.file.size);
  console.log(
    "============req.headers[content-length]==========",
    req.headers["content-length"]
  );

  const properFileSize = 2097152; // this is 2 Mb
  const fileSize = req.headers["content-length"];
  if (fileSize > properFileSize) {
    throw new RegistrationConflict(
      `This file is too large. The proper file size must be under ${
        properFileSize / 1024 / 1024
      } Mb`
    );
  }
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
