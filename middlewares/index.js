const { uploadCloud } = require("./upload/uploadMiddleware");

const { authMiddleware } = require("./auth/authMiddleware");

module.exports = {
  authMiddleware,
  uploadCloud,
};
