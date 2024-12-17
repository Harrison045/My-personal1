const mongoose = require("mongoose")

const Schema = mongoose.Schema

const AccountSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    branch:{
        type:String,
        required:true
    },
    accountType:{
        type:String,
        required:true
    },
    accountNumber:{
        type:Number,
        required:true
    },
    bankDetail:{
        type:Schema.Types.ObjectId,
        ref:"Bank"
    }
})

const AccountModel = mongoose.model("Account", AccountSchema)

module.exports = AccountModel