var Category = require('./model');

module.exports = {
	
	list: function(request, response, next) {
		Category.find({}, {}, {}, function(error, categories) {
			response.json(categories);
		});
	},
	
	create: function(request, response, next) {
		var category = new Category(request.body);
		category.save(function(error, category) {
			response.json(category);
		});
	},
	
	read: function(request, response, next) {
		Category.findOne({ name: request.params.name }).populate('collections').exec(function(error, category) {
			Category.populate(category, { path: 'collections.collections', model: 'Collection' }, function(error, category) {
				response.json(category);
			});
		});
	},
	
	update: function(request, response, next) {
		Category.findOneAndUpdate({ _id: request.params.id }, request.body, {}, function(error, category) {
			response.json(category);
		});
	},
	
	delete: function(request, response, next) {
		Category.findOneAndRemove({ _id: request.params.id }, {}, function(error, category) {
			response.json(category);
		});
	}
	
};