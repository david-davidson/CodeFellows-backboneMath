var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

// Pull in the math
var meanMedianMode = require('../meanMedianMode');
var mean = meanMedianMode.mean;
var median = meanMedianMode.median;
var mode = meanMedianMode.mode;

var ArrayModel = Backbone.Model.extend({
	defaults : {
		mean: [],
		median: [],
		mode: []
	},
	// Set methods
	meanify: mean,
	medianify: median,
	modeify: mode
});

module.exports = ArrayModel;