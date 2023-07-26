const mongoose = require("mongoose");

const usersSchema = mongoose.Schema({
  full_name:{ type: String, required: true },
  email:{type:String,default:null},
  phone: { type: String, required: true },
  remainAmmount:{type:Number,default:0},
  paidAmmount:{type:Number,default:0},
});

const UsersModel = mongoose.model("users", usersSchema);

module.exports = {
  UsersModel,
};
  