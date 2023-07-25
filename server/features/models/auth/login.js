const {Timestamp} = require('mongodb')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const loginSchema = new Schema({
  _id: {
    type: String
  },

  email: {
    type: String
  },
  password: {
    type: String
  }
 
}, Timestamp)

loginSchema.pre('save', function (){
    if(this.id === null){
        this.id = new mongoose.Types.ObjectId().toString()
    }
})

const Login = mongoose.model('Login', loginSchema)

module.exports = Login