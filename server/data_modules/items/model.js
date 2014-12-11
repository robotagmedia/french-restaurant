var mongoose = require('mongoose');

var schema = mongoose.Schema({
	name: { type: String },
	img: { type: String },
	price: { type: String },
	rating: { type: String }
});

//schema stuff

var model = mongoose.model('Item', schema);

//model stuff

module.exports = model;