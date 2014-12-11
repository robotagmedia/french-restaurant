var Items = require('./data_modules/Items');

var express = require('express');
var router = express.Router();

router.route('/items').get(Items.list).post(Items.create);
router.route('/items/:id').get(Items.read).put(Items.update).delete(Items.delete);

module.exports = router;
