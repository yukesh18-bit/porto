const Certificate = require("../models/Certificate");
const User = require("../models/User");

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
    console.log("Connected DB:", User.db.name);

console.log("Received User ID:", userId);

const allUsers = await User.find();

console.log("ALL USERS =", allUsers);

const user = await User.findById(userId);

console.log("USER FOUND =", user);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    // Create Certificate
    const certificate = await Certificate.create({
      user: user._id,
      title,
      company,
      file: `/uploads/certificates/${req.file.filename}`,
    });

    // Save certificate id inside user
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

module.exports = {
  uploadCertificate,
};