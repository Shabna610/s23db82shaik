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
}; var brand = require('../models/brand');
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

// Handle Brand detail on GET.
exports.brand_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        const foundbrand = await brand.findById(req.params.id);
        if (foundbrand == null) {
            res.status(404);
            res.send({ "error": "brand not found" });
        } else {
            res.send(foundbrand);
        }
    } catch (err) {
        res.status(500);
        res.send(`Brand not Found`);
    }
};


// Handle Brand update form on PUT.
exports.brand_update_put = async function (req, res) {
    console.log(`Update on id ${req.params.id} with body ${JSON.stringify(req.body)}`);
    try {
        let toUpdate = await brand.findById(req.params.id);

        // Check if the document exists
        if (!toUpdate) {
            res.status(404).send(`{"error": "brand with ID ${req.params.id} not found"}`);
            return;
        }

        // Do updates of properties
        if (req.body.name) toUpdate.name = req.body.name;
        if (req.body.price) toUpdate.price = req.body.price;
        if (req.body.description) toUpdate.description = req.body.description;

        // Handle checkbox (assuming it's named checkboxsale in the body)
        if (req.body.checkboxsale) {
            toUpdate.sale = true;
        } else {
            toUpdate.sale = false;
        }

        let result = await toUpdate.save();

        // Include the sale property in the response
        result = result.toObject(); // Convert Mongoose document to a plain JavaScript object
        result.sale = toUpdate.sale;

        console.log("Success " + result);
        res.send(result);
    } catch (err) {
        res.status(500).send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
};


// Handle Brand delete on DELETE.
exports.brand_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await brand.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};


// Handle a show one view with id specified by query
exports.brand_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await brand.findById(req.query.id)
        res.render('branddetail',
            { title: 'Brand Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send({ 'error': '${err}' });
    }
};

// Handle building the view for creating a brand.
// No body, no in path parameter, no query.
// Does not need to be async
exports.brand_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('brandcreate', { title: 'Brand Create' });
    }
    catch (err) {
        res.status(500)
        res.send({ 'error': '${err}' });
    }
};

// Handle building the view for updating an brand.
// query provides the id
exports.brand_update_Page = async function (req, res) {
    console.log("update view for item " + req.query.id)
    try {
        const result = await brand.findById(req.query.id)
        if (!result) {
            res.status(404)
            res.send('brand not found');
            return;
        }
        res.render('brandupdate', { title: 'Brand Update', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`Brand not found`);
    }
};

// Handle a delete one view with id from query
exports.brand_delete_Page = async function (req, res) {
    console.log("Delete view for id " + req.query.id)
    try {
        result = await brand.findById(req.query.id)
        res.render('branddelete', {
            title: 'Brand Delete', toShow:
                result
        });
    }
    catch (err) {
        res.status(500)
        res.send({ 'error': '${err}' });
    }
};

