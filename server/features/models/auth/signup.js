const mongoose = require('mongoose');
const Schema = mongoose.Schema

const signUpSchema = new Schema(
  {
    id: {
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
      unique: true,
    },
    password: {
      type: String,
    },
  }, {timestamps: true }
);

signUpSchema.pre('save', function(){
      if (this.id === null) {
        this.id = new mongoose.Types.ObjectId().toString();
      }
})

module.exports = SignUp