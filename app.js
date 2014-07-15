$(document).ready(function () {

	$('#value').submit(function(e) {
		e.preventDefault();
		var num = +$(this).children('input').val();
		if (num < 1 || num > 100) {
			alert('Make sure you enter a number between 1-100');
			$(this).children('input').val("");
		}
		else if (isNaN(num)) {
			alert('Make sure you Enter a number.');
			$(this).children('input').val("");
		}
		else if (num % 1 != 0) {
			alert('Please enter a whole number.');
			$(this).children('input').val("");
		}
		else {
			fizzBuzz(num);
		}
	});
	
	var fizzBuzz = function(userInput) {
		for (i = 1; i <= userInput; i++) {
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
		}
	}
});