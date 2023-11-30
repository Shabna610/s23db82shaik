var express = require("express");
const brand_controlers = require("../controllers/brandController");
const passport = require('passport');


var router = express.Router();
// GET costumes
router.get("/", brand_controlers.brand_view_all_Page);
module.exports = router;

// A little function to check if we have an authorized user and continue on

// redirect to login.
const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    res.redirect("/login");
    }

// GET request for one brand.
router.get('/brands/:id', brand_controlers.brand_detail);

// PUT request to update a brand.
router.put('/brands/:id', brand_controlers.brand_update_put);


/* GET detail brand page */
router.get('/detail', brand_controlers.brand_view_one_Page);

/* GET create brand page */
router.get('/create', brand_controlers.brand_create_Page);

/* GET create brand page */
//router.get('/update', brand_controlers.brand_update_Page);

/* GET delete brand page */
router.get('/delete', brand_controlers.brand_delete_Page);


/* GET update brand page */
router.get('/update', secured,
brand_controlers.brand_update_Page);
router.post('/login', passport.authenticate('local'), function(req, res) {
res.redirect('/');
});
