var express = require("express");
const brand_controlers = require("../controllers/brandController");

var router = express.Router();
// GET costumes
router.get("/", brand_controlers.brand_view_all_Page);
module.exports = router;



