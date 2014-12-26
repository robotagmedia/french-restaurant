var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = Schema({
	name: { type: String },
	slides: [{type: String}],
	collections: [{ type: Schema.Types.ObjectId, ref: 'Collection' }]
});

//schema stuff

var model = mongoose.model('Category', schema);

//model stuff

module.exports = model;