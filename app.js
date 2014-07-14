$(document).ready(function () {
	var num = prompt('Choose a Number between 1-100');
	if (num > 100 || num < 1) {
		do {
		num = prompt('The Number must be between 1-100. Try again')
	} while (num > 100 || num < 1);
	};
	for (i = 1; i <= num; i++) {
		if (i%3 === 0 && i%5 === 0) {
			$('#output').append("FizzBuzz" + "<br>");
		}
		else if (i%3 === 0) {
			$('#output').append("Fizz" + "<br>");
		}
		else if (i%5 === 0) {
			$('#output').append("Buzz" + "<br>");
		}
		else {
			$('#output').append(i + "<br>");
		}
	};
});