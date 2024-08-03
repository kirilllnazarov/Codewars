function sumEvenNumbers(input) {
	return input.filter((v) => v % 2 == 0).reduce((a, b) => a + b, 0);
}
