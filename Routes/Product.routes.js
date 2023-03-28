const express = require("express");

const { create, read, Delete } = require("../Controlers/Product.controler");
const upload = require("../Middlewares/Multer");
const router = express.Router();

router.post("/create", upload.fields([{ name: "image", maxCount: 1 }]), create);
router.get("/get", read);
router.delete("/delete/:id", Delete);

module.exports = router;
