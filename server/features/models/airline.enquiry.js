const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const airlineEnquirySchema = new Schema(
  {
    _id: {
      type: String,
    },
    title:{
        type: String
    },

      Id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    type:{
        type: String
    },
    description: {
      type: String,
    },
    date:{
        type: Date()
    }
  },
  { timestamps: true }
);

loginSchema.pre("save", function () {
  if (this.id === null) {
    this.id = new mongoose.Types.ObjectId().toString();
  }
});

const AirlineEnquiry = mongoose.model("AirlineEnquiry", airlineEnquirySchema);

module.exports = AirlineEnquiry;
