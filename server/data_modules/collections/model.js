var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = Schema({
	name: { type: String },
	jp: { type: String },
	collections: [{ type: Schema.Types.ObjectId, ref: 'Collection' }],
	items: [{ type: Schema.Types.ObjectId, ref: 'Item' }],
	splash: { type: String },
	thumb: { type: String }
});

//schema stuff

var model = mongoose.model('Collection', schema);

//model stuff

module.exports = model;