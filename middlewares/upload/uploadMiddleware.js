const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
const { FileError } = require("../../helpers/errors");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});
const uploadFileMaxSize = Number(process.env.UPLOAD_IMAGE_MAX_SIZE);

const allowedFormats = ["jpeg", "png", "jpg", "gif", "svg"];

const storage = new CloudinaryStorage({
  cloudinary,
  params: (req, file) => {
    const [, ext] = file.mimetype.split("/");

    if (!allowedFormats.includes(ext)) {
      throw new FileError(
        `Upload file extension ${[...allowedFormats].join(", ")} expected`
      );
    }

    if (req.headers["content-length"] > uploadFileMaxSize) {
      throw new FileError(
        `This file is too large. The proper file size must be under ${
          uploadFileMaxSize / 1024 / 1024
        } Mb`
      );
    }

    if (file.fieldname === "recipeImage") {
      return { folder: "soYummyT2D/recipe" };
    }

    if (file.fieldname === "avatarImage")
      return {
        folder: "soYummyT2D/avatars",
        transformation: [{ width: 240, height: 240, crop: "fit" }],
      };
  },

  allowedFormats,

  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const uploadCloud = multer({ storage });

module.exports = { uploadCloud };
