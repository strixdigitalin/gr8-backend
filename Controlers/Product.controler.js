const validator = require("../Middlewares/Validator");
const { SendSuccess, SendError, SendFail } = require("../Middlewares/Response");
const ProductCategorySchema = require("../Schema/Product.schema");
const { uploadOnCloudinary } = require("../Middlewares/Cloudinary");

const create = async (req, res, next) => {
  const { name } = req.body;
  try {
    let fields = { name };
    // console.log(req.files, "<<<these are files");
    if (!req.files.image) {
      return SendFail(res, "Image is required");
    }
    let images = req.files.image;
    let fileUrls = [];
    for (let index = 0; index < images.length; index++) {
      const fileurl = await uploadOnCloudinary(images[index]);
      fileUrls.push(fileurl);
    }
    if (!validator.validateField(fields, res)) return null;
    console.log(fileUrls, "<<< thisisfileurl");
    // return null;
    const savedData = await ProductCategorySchema.create({
      ...req.body,
      images: fileUrls,
    });

    SendSuccess(res, "Product Created", savedData);
  } catch (e) {
    console.log(e);
    SendError(res, e);
  }
};

const read = async (req, res, next) => {
  try {
    const data = await ProductCategorySchema.find(req.query);
    SendSuccess(res, "Category Fetched", data);
  } catch (e) {
    console.log(e);
    SendError(res, e);
  }
};
const Delete = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await ProductCategorySchema.findByIdAndDelete(id);
    if (!data) return SendFail(res, "Id not found");
    SendSuccess(res, "Category Deleted", data);
  } catch (e) {
    console.log(e);
    SendError(res, e);
  }
};

module.exports = {
  read,
  create,
  Delete,
};

// module.exports = { createUser, userLogin, getUserDetails, updateUserDetails }
