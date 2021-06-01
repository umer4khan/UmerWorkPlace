const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const registrationSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  type: {
    type: String,
    required: true,
    trim: true,
  },
  mobileNo: {
    type: Number,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  confirmPassword: {
    type: String,
    required: true,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});
registrationSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    console.log(this.password);
    this.password = await bcrypt.hash(this.password, 10);
    this.confirmPassword = this.password;
    console.log(this.password);
  }
  next();
});
registrationSchema.methods.generateAuthToken = async function () {
  try {
    console.log(this._id);
    const token = jwt.sign(
      { _id: this._id.toString() },
      "mynameumerkhanfarooquekhandeshmukh"
    );
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    console.log(token);
    return token;
  } catch (err) {
    console.log(err);
  }
};
const Registration = mongoose.model("Registration", registrationSchema);
module.exports = Registration;
