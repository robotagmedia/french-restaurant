var Categories = require('./data_modules/categories');
var Collections = require('./data_modules/collections');
var Items = require('./data_modules/items');

var express = require('express');
var router = express.Router();

router.route('/categories').get(Categories.list).post(Categories.create);
router.route('/categories/:name').get(Categories.read).put(Categories.update).delete(Categories.delete);

router.route('/collections').get(Collections.list).post(Collections.create);
router.route('/collections/:id').get(Collections.read).put(Collections.update).delete(Collections.delete);

router.route('/items').get(Items.list).post(Items.create);
router.route('/items/:id').get(Items.read).put(Items.update).delete(Items.delete);

module.exports = router;
