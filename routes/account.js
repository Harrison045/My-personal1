const express = require("express")
const { createAccountDetails, retrieveAccountDetails } = require("../controllers/accountController")

const router = express.Router()

router.post("/account", createAccountDetails)
router.get("/account", retrieveAccountDetails)

module.exports = router