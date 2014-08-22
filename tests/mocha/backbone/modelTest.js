var chai = require('chai');
var Backbone = require('backbone');
var sinon = require('sinon');
var expect = chai.expect;

/*jshint expr: true*/

var MathModel = require('../../../app/models/mathModel');

describe('The Backbone math/results model', function() {
    var results;
    before(function(done) {
        this.mock = sinon.mock(Backbone);
        results = new MathModel();
        done();
    });

    it('Should be a Backbone object', function(done) {
        results.set('mean', 1);
        expect(results).to.be.ok;
        expect(results.get('mean')).to.eql(1);
        done();
    });

    it('Should hold our mean/median/mode functions', function(done) {
        var mean = results.meanify;
        var median = results.medianify;
        var mode = results.modeify;
        expect(typeof mean).to.eql('function');
        expect(typeof median).to.eql('function');
        expect(typeof mode).to.eql('function');
        done();
    });

    after(function() {
        this.mock.verify();
    });
});