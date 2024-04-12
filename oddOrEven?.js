function oddOrEven(array) {
	if (array.reduce((a, b) => a + b, 0) % 2 === 0) {
		return "even";
	} else if (array.reduce((a, b) => a + b) % 2 !== 0) {
		return "odd";
	}
}
