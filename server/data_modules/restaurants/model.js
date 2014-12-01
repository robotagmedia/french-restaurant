var mongoose = require('mongoose');

var schema = mongoose.Schema({
	name: { type: String }
});

//schema stuff

var model = mongoose.model('Restaurant', schema);

//model stuff

module.exports = model;