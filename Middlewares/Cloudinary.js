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
  console.log(data, "<<this is image data");
  return data.secure_url;
};
const uniqueFilename = new Date().toISOString();
const uploadPDF = async (file) => {
  console.log(file, "<<<this is file pdf");
  cloudinary.uploader.multi(
    file.path,
    { public_id: `resume/${uniqueFilename}`, tags: `blog` },
    function (error, result) {
      console.log(result, error);
    }
  );
};

module.exports = { uploadOnCloudinary, uploadPDF };
// module.exports = uploadPDF;
