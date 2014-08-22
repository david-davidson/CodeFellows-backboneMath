var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

// Pull in the math
var meanMedianMode = require('../meanMedianMode');

var MathModel = Backbone.Model.extend({
	defaults : {
		mean: Number,
		median: Number,
		mode: Number
	},
	// Set methods
	meanify: meanMedianMode.mean,
	medianify: meanMedianMode.median,
	modeify: meanMedianMode.mode
});

module.exports = MathModel;