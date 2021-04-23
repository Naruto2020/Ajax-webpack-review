const express = require("express");
const router = express.Router();

const formController = require("../controllers/formController");

router.get("/form", formController.search);

router.get("/users", formController.getUsers);

module.exports = router;