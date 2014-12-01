var Restaurant = require('./model'); //dummy db

module.exports = {
	
	list: function(request, response, next) {
		Restaurant.find({}, {}, {}, function(error, restaurants) {
			response.json(restaurants);
		});
	},
	
	create: function(request, response, next) {
		var restaurant = new Restaurant(request.body);
		restaurant.save(function(error, restaurant) {
			response.json(restaurant);
		});
	},
	
	read: function(request, response, next) {
		console.log(request.params.id);
		Restaurant.findOne({ _id: request.params.id }, { _id: 0 }, {}, function(error, restaurant) {
			console.log(restaurant);
			response.json(restaurant);
		});
	},
	
	update: function(request, response, next) {
		Restaurant.findOneAndUpdate({ _id: request.params.id }, request.body, {}, function(error, restaurant) {
			response.json(restaurant);
		});
	},
	
	delete: function(request, response, next) {
		Restaurant.findOneAndRemove({ _id: request.params.id }, {}, function(error, restaurant) {
			response.json(restaurant);
		});
	}
	
};