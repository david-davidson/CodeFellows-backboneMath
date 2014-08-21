var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

var ResultsView = require('./ResultsView');
var ArrayModel = require('../models/ArrayModel');

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

	events: {
		'click #init': 'doSomeMath'
	},

	doSomeMath: function() {
		var numbers = this.$el.closest('div').children('#numbers').val();
		numbers = numbers.split(' ').map(Number);

		var arrayModel = new ArrayModel();
		arrayModel.set('mean', arrayModel.meanify(numbers));
		arrayModel.set('median', arrayModel.medianify(numbers));
		arrayModel.set('mode', arrayModel.modeify(numbers));

		var resultsView = new ResultsView({
			model: arrayModel
		});

		$('#results').html(resultsView.$el);
	}
});

module.exports = FormView;