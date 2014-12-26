var Collection = require('./model');

module.exports = {
	
	list: function(request, response, next) {
		Collection.find({}, {}, {}, function(error, collections) {
			response.json(collections);
		});
	},
	
	create: function(request, response, next) {
		var collection = new Collection(request.body);
		collection.save(function(error, collection) {
			response.json(collection);
		});
	},
	
	read: function(request, response, next) {
		Collection.findOne({ _id: request.params.id }).populate('items').exec(function(error, collection) {
			response.json(collection);
		});
	},
	
	update: function(request, response, next) {
		Collection.findOneAndUpdate({ _id: request.params.id }, request.body, {}, function(error, collection) {
			response.json(collection);
		});
	},
	
	delete: function(request, response, next) {
		Collection.findOneAndRemove({ _id: request.params.id }, {}, function(error, collection) {
			response.json(collection);
		});
	}
	
};