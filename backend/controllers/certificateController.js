const Certificate = require("../models/Certificate");
const User = require("../models/User");
const fs = require("fs");
const path = require("path");

// Upload Certificate
const uploadCertificate = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        message: "No file uploaded",
      });
    }

    const { title, company, userId } = req.body;

    if (!userId) {
      return res.status(400).json({
        message: "User ID is missing",
      });
    }

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const certificate = await Certificate.create({
      user: user._id,
      title,
      company,
      file: `/uploads/certificates/${req.file.filename}`,
    });

    user.certificates.push(certificate._id);
    await user.save();

    res.status(201).json({
      message: "Certificate Uploaded Successfully",
      certificate,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete Certificate
const deleteCertificate = async (req, res) => {
  try {
    console.log("Delete ID:", req.params.id);
    const certificate = await Certificate.findById(req.params.id);

    if (!certificate) {
      return res.status(404).json({
        message: "Certificate not found",
      });
    }

    // Remove certificate id from user
    await User.findByIdAndUpdate(certificate.user, {
      $pull: {
        certificates: certificate._id,
      },
    });

    // Delete uploaded file
    const filePath = path.join(__dirname, "..", certificate.file);

    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    // Delete certificate document
    await Certificate.findByIdAndDelete(req.params.id);
console.log("Deleted from DB"); 

    res.status(200).json({
      message: "Certificate Deleted Successfully",
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  uploadCertificate,
  deleteCertificate,
};