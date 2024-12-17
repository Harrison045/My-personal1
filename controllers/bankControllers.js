const { validationResult } = require("express-validator");
const AccountModel = require("../models/accountModel");
const BankModel = require("../models/bankModel");

//creating Create controller

const createBankDetails = (req, res) => {

  //validation check

 const error = validationResult(req)
1
 if(!error.isEmpty()){
  return res.json({message:error.array()[0].msg})
 }

  //destructuring details from req body
  const { name, branch, location, phone, address, accountNumber } = req.body;

  //create new bank details
  const bank = new BankModel({
    name,
    branch,
    location,
    phone,
    address,
    accountNumber,
  });

  //saving created details
  bank
    .save()
    .then((bank) => {
      res.json({ message: "bank details created successfully", data: bank });
    })
    .catch((err) => console.log(err));
};

//retrieving bank details

const retrieveBankDetails = (req, res) => {
  //get id from req
  const { id } = req.params;

  if (id) {
    BankModel.findById(id).then((bank) => {
      res.json({ message: "Details retrieved", data: bank });
    });
  } else {
    BankModel.find().then((bank) => {
      res.json({ message: "Details retrieved", data: bank });
    });
  }
};

const updateBankDetails = (req, res) => {
  //destructuring details from req body
  const { id, name, branch, location, phone, address, accountNumber } =
    req.body;

  //updating function

  BankModel.findById(id)
    .then((bank) => {
      if (bank) {
        bank.name = name;
        bank.branch = branch;
        bank.location = location;
        bank.phone = phone;
        bank.address = address;
        bank.accountNumber = accountNumber;
        bank.save().then((bank) => {
          res.json({ message: "bank updated", data: bank });
        });
      } else {
        res.json({ message: "failed to update" });
      }
    })
    .catch((err) => console.log(err));
};

//deleting details

const deleteBankDetail = (req, res) => {
  const { id } = req.body;

  BankModel.findByIdAndDelete(id)
    .then((deleteBank) => {
      AccountModel.findByIdAndDelete(id)
        .then((account) => {
          if (id) {
            res.json({ message: "bank deleted", data: deleteBank });
          } else {
            res.json({ message: "cant find bank" });
          }
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
};

module.exports = {
  createBankDetails,
  retrieveBankDetails,
  updateBankDetails,
  deleteBankDetail,
};
