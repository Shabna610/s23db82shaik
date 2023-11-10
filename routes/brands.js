var express = require("express");
const brand_controlers = require("../controllers/brandController");

var router = express.Router();
// GET costumes
router.get("/", brand_controlers.brand_view_all_Page);
module.exports = router;


// GET request for one brand.
router.get('/brands/:id', brand_controlers.brand_detail);

// PUT request to update a brand.
router.put('/brands/:id', brand_controlers.brand_update_put);
