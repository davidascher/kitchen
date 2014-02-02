/**
 * GET /wishlist
 * Page both listing components we know we need and a form for adding new ones
 */
var Component = require('../models/Component');

exports.index = function(req, res) {
  Component.find({}).sort({"name":1}).exec(function (err, components) {
    if (err){
      console.log('Unable to retrieve components');
      return response.json(500, 'Unable to retrieve components: ' + err);
    }
    res.locals.components = components;
    res.render('wishlist', {
      title: 'Component Wishlist'
    });
  });
};
