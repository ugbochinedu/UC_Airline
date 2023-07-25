// const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");
const Roles = require("../common/Role");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    _id: {
      type: String,
    },
    userName: {
      type: String,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
    },
    address: {
      type: String,
    },
    password: {
      type: String,
    },
    phoneNumber: {
      type: String,
      unique: true,
    },
    role: {
      type: String,
      default: Roles.Passenger,
    },
  },
  { timestamp: true }
);

userSchema.pre("save", async function (next) {
  try {
    if (!this._id) {
      this._id = new mongoose.Types.ObjectId().toString();
    }

    if (!this.isModified("password")) {
      return next();
    }
    return next();
  } catch (error) {
    return next(error);
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
