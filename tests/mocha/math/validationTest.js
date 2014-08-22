var expect = require('chai').expect;
var validate = require('../../../app/math/validNumbers');

describe('Number validation', function() {
	it('Returns only the numbers in an array of numbers and words', function() {
		var weirdArray = [1, 3, 'cat'];
		expect(validate(weirdArray)).to.eql(true);
		expect(weirdArray).to.eql([1, 3]);
	});

	it('Rejects input that doesn\'t contain any valid numbers', function() {
		weirdArray = ['dog', 'cat'];
		expect(validate(weirdArray)).to.eql(false);
	});
});