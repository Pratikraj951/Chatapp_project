const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String, // Corrected from "String"
      required: true,
    },
    email: {
      type: String, // Corrected from "String"
      unique: true,
      required: true,
    },
    password: {
      type: String, // Corrected from "String"
      required: true,
    },
    pic: {
      type: String, // Corrected from "String"
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true } // Corrected typo
);

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    // Corrected password modification check
    return next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt); // Corrected to use await
  next(); // Ensure next() is called after hashing the password
});

const User = mongoose.model("User", userSchema);
module.exports = User;
