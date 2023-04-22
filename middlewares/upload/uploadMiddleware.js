const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: (req, file) => {
    if (file.fieldname === "recipesImage")
      return { folder: "soYummyT2D/recipes" };

    if (file.fieldname === "avatarImage")
      return {
        folder: "soYummyT2D/avatars",
        transformation: [{ width: 240, height: 240, crop: "fit" }],
      };
  },

  allowedFormats: ["jpeg", "png", "jpg", "gif", "svg"],

  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
// const x = console.log("Contant length =");

const uploadCloud = multer({ storage });

module.exports = { uploadCloud };
