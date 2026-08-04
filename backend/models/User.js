const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      default: "",
    },

    college: {
      type: String,
      default: "",
    },

    department: {
      type: String,
      default: "",
    },

    bio: {
      type: String,
      default: "",
    },

    github: {
      type: String,
      default: "",
    },

    linkedin: {
      type: String,
      default: "",
    },

    skills: {
      type: String,
      default: "",
    },

    photo: {
      type: String,
      default: "",
    },

    certificates: {
      type: Array,
      default: [],
    },

    projects: {
      type: Array,
      default: [],
    },

    achievements: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);