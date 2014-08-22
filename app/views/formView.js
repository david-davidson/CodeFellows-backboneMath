var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

var ResultsView = require('./resultsView');
var MathModel = require('../models/mathModel');

FormView = Backbone.View.extend({
	tagName: 'div',
	initialize: function() {
		this.render();
	},
	render: function() {
		var template = require('./templates/formTemplate.hbs');
		this.$el.html(template());
		return this;
	},
	// Set up a click watcher...
	events: {
		'click #init': 'doSomeMath'
	},
	// ... and what it triggers
	doSomeMath: function() {
		// Parse user input into an array of valid numbers
		var numbers = this.$el.closest('div').children('#numbers').val();
		numbers = numbers.split(' ').map(Number);

		// Set up a model, and use its methods to populate it
		var results = new MathModel();
		results.set('mean', results.meanify(numbers));
		results.set('median', results.medianify(numbers));
		results.set('mode', results.modeify(numbers));

		// Generate the results view
		var resultsView = new ResultsView({
			model: results
		});

		// And apply it
		this.$el.closest('div').children('#results').html(resultsView.$el);
	}
});

module.exports = FormView;