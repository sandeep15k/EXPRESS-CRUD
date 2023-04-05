const express = require("express")
const router = express.Router()
 const {getContacts } = require("../controllers/myContactController")
 const {createContact} = require("../controllers/myContactController")
 const {updateContact} = require("../controllers/myContactController")
 const {getContactbyId} = require("../controllers/myContactController")
 const {deleteContact} = require("../controllers/myContactController")

router.route("/").get(getContacts).post(createContact)

// router.route("/").post(createContact)

router.route("/:id").get(getContactbyId).put(updateContact).delete(deleteContact)

// router.route("/:id").put(updateContact)

// router.route("/:id").delete(deleteContact)

module.exports = router;