module.exports = function(numbers) {
	for (var i = 0; i < numbers.length; i++) {
		if (isNaN(numbers[i])) {
			numbers.splice(i, 1);
			i--; // So that the array doesn't "shift" and hide one argument
		}
	}
	if (numbers.length < 1) {
		(typeof window !== 'undefined' && window ? alert : console.log)
		('Uh oh, you didn\'t give me any valid numbers!');
		return false;
	} else {
		return true;
	}
};