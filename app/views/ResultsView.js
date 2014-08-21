var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

ResultsView = Backbone.View.extend({
	tagName: 'div',

	initialize: function() {
		this.render();
	},

	render: function() {
		var template = require('./templates/resultsTemplate.hbs');
		var data = this.model.attributes;
		this.$el.html(template(data));
		return this;
	}
});

module.exports = ResultsView;