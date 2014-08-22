/*jshint expr: true*/

var chai = require('chai');
var Backbone = require('backbone');
var sinon = require('sinon');
var expect = chai.expect;

var FormView = require('../../../app/views/formView');

describe('The Backbone form view', function() {
	before(function(done) {
		sinon.spy(FormView.prototype, 'render'); // Set a "spy" before we do anything: it keeps track of how often it's called, and with which arguments
		done();
	});

	it('Should call render on creation', function(done) {
		this.formView = new FormView({model: Backbone.Model.extend({})});
		expect(FormView.prototype.render.called).to.be.true;
		done();
	});

	it('Should not be empty', function(done) {
		expect(this.formView.$el).to.not.eql('');
		done();
	});
});

after(function(done){
	FormView.prototype.render.restore();
	done();
});