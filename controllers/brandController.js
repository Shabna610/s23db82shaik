var brand = require('../models/brand');
// List of all brands

exports.brand_list = async function (req, res) {
    try {
        thebrands = await brand.find();
        res.send(thebrands);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};var brand = require('../models/brand');
// List of all brands

exports.brand_list = async function (req, res) {
    try {
        thebrands = await brand.find();
        res.send(thebrands);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// VIEWS
// Handle a show all view
exports.brand_view_all_Page = async function (req, res) {
    try {
        thebrands = await brand.find();
        res.render('brands', { title: 'Brand Search Results', results: thebrands });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// for a specific brand.
exports.brand_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: brand detail: ' + req.params.id);
};
// Handle brand create on POST.
//Handle brand create on POST.
exports.brand_create_post = async function (req, res) {
    console.log(req.body)
    let document = new brand();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"name":"", "price":12, "description":""}
    document.name = req.body.name;
    document.price = req.body.price;
    document.description = req.body.description;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle brand delete form on DELETE.
exports.brand_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: brand delete DELETE ' + req.params.id);
};
// Handle brand update form on PUT.
exports.brand_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: brand update PUT' + req.params.id);
};

