const express = require("express");

const { create, read, Delete } = require("../Controlers/Job.controler");
const upload = require("../Middlewares/Multer");
const router = express.Router();

router.post("/create", create);
router.get("/get", read);
router.delete("/delete/:id", Delete);

module.exports = router;
