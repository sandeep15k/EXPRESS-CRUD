const express = require("express")
const router = express.Router()
 const {getContacts } = require("../controllers/myContactController")
 const {createContact} = require("../controllers/myContactController")
 const {updateContact} = require("../controllers/myContactController")
 const {getContactbyId} = require("../controllers/myContactController")
 const {deleteContact} = require("../controllers/myContactController")
const validateToken = require("../middleware/validateTokenHandler")


router.use(validateToken)
router.route("/").get(getContacts).post(createContact) //here we have to use validate token in all the routes so we have used router.use()

// router.route("/").post(createContact)

router.route("/:id").get(getContactbyId).put(updateContact).delete(deleteContact)

// router.route("/:id").put(updateContact)

// router.route("/:id").delete(deleteContact)

module.exports = router;