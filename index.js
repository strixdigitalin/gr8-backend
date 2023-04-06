const express = require("express");
const app = express();
var multer = require("multer");
var forms = multer();
var DB = require("./Connection.js");
app.use(express.json());
// const mongoose = require("mongoose");
// --------------------------------------------------- IMPORT ROUTES
const ProductRoutes = require("./Routes/Product.routes");
const LeadRoute = require("./Routes/Leads.route");
const JobRoutes = require("./Routes/Job.routes");
const CandidateRoutes = require("./Routes/Candidates.routes");
const Enquiry = require("./Routes/Enquiry.Routes.js");

// ----------------------------------------------------------------------------------------------

// -------------------------------------------------------- API VALIDATIONS-----------------------
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json({ limit: "50mb" }));
var cors = require("cors");
app.use(cors({ origin: true, credentials: true }));

app.use(function (req, res, next) {
  console.log(req._parsedUrl.path, "----<<<<<<<<<<<Current ");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

// ---------------------------------------------------------------------

//-------------------------------------------------------------------------  define Routes
app.use("/static", express.static("uploads"));
app.use("/product", ProductRoutes);
app.use("/lead", LeadRoute);
app.use("/job", JobRoutes);
app.use("/candidate", CandidateRoutes);
app.use("/enquiry", Enquiry);

// ------------------------------------------------------

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server running at port ${port}`);
});
