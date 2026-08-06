const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload");

const {
  uploadCertificate,
  deleteCertificate,
} = require("../controllers/certificateController");

router.post(
  "/upload",
  upload.single("certificate"),
  uploadCertificate
);

router.delete("/:id", deleteCertificate);

module.exports = router;