var Item = require('./model'); //dummy db

module.exports = {
	
	list: function(request, response, next) {
		Item.find({}, {}, {}, function(error, items) {
			response.json(items);
		});
	},
	
	create: function(request, response, next) {
		var item = new Item(request.body);
		item.save(function(error, item) {
			response.json(item);
		});
	},
	
	read: function(request, response, next) {
		console.log(request.params.id);
		Item.findOne({ _id: request.params.id }, { _id: 0 }, {}, function(error, item) {
			console.log(item);
			response.json(item);
		});
	},
	
	update: function(request, response, next) {
		Item.findOneAndUpdate({ _id: request.params.id }, request.body, {}, function(error, item) {
			response.json(item);
		});
	},
	
	delete: function(request, response, next) {
		Item.findOneAndRemove({ _id: request.params.id }, {}, function(error, item) {
			response.json(item);
		});
	}
	
};