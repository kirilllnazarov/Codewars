function largestPairSum(numbers) {
	numbers = numbers.sort((a, b) => a - b).slice(-2);
	return numbers
		.sort((a, b) => a - b)
		.slice(-2)
		.reduce((acc, cv) => acc + cv, 0);
}
