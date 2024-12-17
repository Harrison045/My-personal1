const mongoose = require("mongoose");

//create your schema
const Schema = mongoose.Schema;

const BankSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  accountNumber: {
    type: Number,
    required: true,
  },
  account:{
    accountDetails:{
            type:Schema.Types.ObjectId,
            ref:"Account"
    }
  }
});

//creating Model

const BankModel = mongoose.model("Bank", BankSchema)

module.exports = BankModel