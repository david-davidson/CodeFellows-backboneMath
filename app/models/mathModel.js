var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

// Pull in the math
var meanMedianMode = require('../math/meanMedianMode');
var validNumbers = require('../math/validNumbers');


var MathModel = Backbone.Model.extend({
	defaults : {
		mean: Number,
		median: Number,
		mode: Number
	},
	// Set methods
	meanify: meanMedianMode.mean,
	medianify: meanMedianMode.median,
	modeify: meanMedianMode.mode,
	validate: validNumbers
});

module.exports = MathModel;