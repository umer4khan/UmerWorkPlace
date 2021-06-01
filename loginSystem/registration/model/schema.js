const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const registrationSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    trim: true,
  },
  userName: {
    type: String,
    unique: true,
    trim: true,
    required: true,
  },
  password: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  confirmPassword: {
    type: String,
    unique: true,
    required: true,
    trim: true,
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
// jwt
registrationSchema.methods.generateAutToken = async function () {
  try {
    console.log(this._id);
    const token = jwt.sign(
      { _id: this._id},
      process.env.SECRETE_KEY
    );
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    console.log(token);
    return token;
  } catch (err) {
    //res.send(err);
    console.log(err);
  }
};
registrationSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    console.log(this.password);
    this.password = await bcrypt.hash(this.password, 10);
    this.confirmPassword = this.password;
    console.log(this.password);
  }

  next();
});
const Signup = new mongoose.model("Signup", registrationSchema);
module.exports = Signup;



