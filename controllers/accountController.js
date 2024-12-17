const AccountModel = require("../models/accountModel");

const createAccountDetails = (req, res) => {
  const { name, branch,accountType, accountNumber,bankDetail } = req.body;

  const account = new AccountModel({ name, branch,accountType, accountNumber,bankDetail });
  account
    .save()
    .then((account) => {
      res.json({ message: "account created", data: account });
    })
    .catch((err) => console.log(err));
};

const retrieveAccountDetails = (req,res) =>{
    AccountModel.find().populate("bankDetail").then((account) =>{
        res.json({message:"account retrieved", data:account})
    })
}

module.exports = {createAccountDetails, retrieveAccountDetails}
