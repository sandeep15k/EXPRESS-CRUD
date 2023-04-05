const express = require("express")
const { resgisterUser, loginUser, currentUser } = require("../controllers/userController")
const router = express.Router()

router.post("/register",resgisterUser )

router.post("/login",loginUser)

router.get("/current",currentUser)

module.exports = router