var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = Schema({
	name: { type: String },
	imgs: [{ type: String }],
	price: { type: String },
	rating: { type: String },
	thumb: { type: String },
	//collection: [{ type: Schema.Types.ObjectId, ref: 'Collection' }],
	html: { type: String }
});

//schema stuff

var model = mongoose.model('Item', schema);

//model stuff

module.exports = model;