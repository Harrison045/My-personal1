const {
  createBankDetails,
  retrieveBankDetails,
  updateBankDetails,
  deleteBankDetail,
} = require("../controllers/bankControllers");
const express = require("express");
const { body } = require("express-validator");
const BankModel = require("../models/bankModel");
const router = express.Router();

router.post(
  "/bank",
  [
    body("name").trim().not().isEmpty().withMessage("Enter name"),
    body("phone")
      .isMobilePhone("en-GH")
      .custom((phoneField, { req }) => {
       return BankModel.findOne({ phone: phoneField }).then((bankDoc) => {
          if (bankDoc) return Promise.reject("Number already taken");
        });
      }),
  ],
  createBankDetails
);
router.get("/bank/:id?", retrieveBankDetails);
router.put("/bank", updateBankDetails);
router.delete("/bank", deleteBankDetail);

module.exports = router;
