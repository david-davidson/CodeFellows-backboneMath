var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

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
	meanify: mean,
	medianify: median,
	modeify: mode
});

module.exports = ArrayModel;