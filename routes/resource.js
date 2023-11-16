var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var brand_controller = require('../controllers/brandController');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
///BRAND ROUTES ///
// POST request for creating a brand.
router.post('/brands', brand_controller.brand_create_post);
// DELETE request to delete brand.
router.delete('/brands/:id', brand_controller.brand_delete);
// PUT request to update brand.
router.put('/brands/:id', brand_controller.brand_update_put);
// GET request for one brand.
router.get('/brands/:id', brand_controller.brand_detail);
// GET request for list of all brand items.
router.get('/brands', brand_controller.brand_list);


module.exports = router;