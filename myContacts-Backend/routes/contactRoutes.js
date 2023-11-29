const express = require('express')
const router = express.Router();
const { getContacts, createContact, getContact, updateContact, deleteContact } = require("../controllers/contactController");

//get all contacts or create new contact
router.route("/").get(getContacts).post(createContact);

//post contacts
// router.route("/").post(createContact);

//get contact by id or update or delete together
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

//update contact
// router.route("/:id").put(updateContact);

//delete contact
// router.route("/:id").delete(deleteContact);

module.exports = router;