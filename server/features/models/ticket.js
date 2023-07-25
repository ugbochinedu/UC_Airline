const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const Roles = require("../common/Roles");

const ticketSchema = new Schema(
  {
    _id: {
      type: String,
    },
    description: {
      type: String,
    },
    departureTime: {
      type: Date()
    },
   
    destination: {
      type: String,
    },
  },
  { timestamp: true }
);

ticketSchema.pre("save", function () {
  if (this.id === null) {
    this.id = new mongoose.Types.ObjectId().toString();
  }
});

const Ticket = mongoose.model("Ticket", ticketSchema);

module.exports = Ticket;
