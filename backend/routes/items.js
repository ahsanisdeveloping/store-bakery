const express = require("express");
const {
  insertItem,
  
} = require("../controllers/itemController");
const router = express.Router();


router.post("/", insertItem);


module.exports = router;