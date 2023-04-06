const validator = require("../Middlewares/Validator");
const { SendSuccess, SendError, SendFail } = require("../Middlewares/Response");
const EnquirySchema = require("../Schema/Enquiryschema");
const uploadOnCloudinary = require("../Middlewares/Cloudinary");

const create = async (req, res, next) => {
  const { name } = req.body;
  try {
    // console.log(fileurl, "<<<this is file url");
    // if (!validator.validateField(fields, res)) return null;
    const savedData = await EnquirySchema.create({
      ...req.body,
    });

    SendSuccess(res, "Enquiry Created", savedData);
  } catch (e) {
    console.log(e);
    SendError(res, e);
  }
};

const read = async (req, res, next) => {
  try {
    const data = await EnquirySchema.find(req.query).populate("product");
    SendSuccess(res, "Enquiry Fetched", data);
  } catch (e) {
    console.log(e);
    SendError(res, e);
  }
};
const Delete = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await EnquirySchema.findByIdAndDelete(id);
    if (!data) return SendFail(res, "Id not found");
    SendSuccess(res, "Enquiry Deleted", data);
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
