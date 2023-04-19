const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const recipeImgStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  folder: "recipe",
  allowedFormats: ["jpg", "png"],
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const uploadRecipeImgCloud = multer({ storage: recipeImgStorage });

module.exports = { uploadRecipeImgCloud };