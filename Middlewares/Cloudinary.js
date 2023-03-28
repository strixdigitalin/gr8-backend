const cloudinary = require("cloudinary").v2;

// Configuration
cloudinary.config({
  cloud_name: "djkvwhl4w",
  api_key: "188614786747447",
  api_secret: "NuIFTBxV8vTTwiUZySsZO-_IEjU",
});

// Upload

const uploadOnCloudinary = async (file) => {
  console.log("before clound", file);
  const data = await cloudinary.uploader.upload(file.path);
  return data.secure_url;
};

module.exports = uploadOnCloudinary;
