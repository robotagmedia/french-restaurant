var Restaurants = require('./data_modules/restaurants');

var express = require('express');
var router = express.Router();

router.route('/restaurants').get(Restaurants.list).post(Restaurants.create);
router.route('/restaurants/:id').get(Restaurants.read).put(Restaurants.update).delete(Restaurants.delete);

module.exports = router;
