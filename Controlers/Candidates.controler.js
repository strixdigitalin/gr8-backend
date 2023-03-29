const validator = require("../Middlewares/Validator");
const { SendSuccess, SendError, SendFail } = require("../Middlewares/Response");
const CandidateRoutes = require("../Schema/Candidates");
const uploadOnCloudinary = require("../Middlewares/Cloudinary");
const uploadPDF = require("../Middlewares/Cloudinary");

const create = async (req, res, next) => {
  const { name } = req.body;
  try {
    // console.log(fileurl, "<<<this is file url");
    // if (!validator.validateField(fields, res)) return null;
    // console.log(req.files, "<<<these are files");
    if (!req.files.resume) {
      return SendFail(res, "Image is required");
    }
    // const resume = await uploadOnCloudinary(req.files.resume[0]);
    //   const resume = req.files.resume[0];
    // console.log(resume, "<<<this is file url");
    const savedData = await CandidateRoutes.create({
      ...req.body,
      resume: req.files.resume[0].filename,
    });

    SendSuccess(res, "Category Created", savedData);
  } catch (e) {
    console.log(e);
    SendError(res, e);
  }
};

const read = async (req, res, next) => {
  try {
    const data = await CandidateRoutes.find(req.query);
    SendSuccess(res, "Category Fetched", data);
  } catch (e) {
    console.log(e);
    SendError(res, e);
  }
};
const Delete = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await CandidateRoutes.findByIdAndDelete(id);
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
