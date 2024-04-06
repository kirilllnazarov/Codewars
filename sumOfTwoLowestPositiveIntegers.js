function sumTwoSmallestNumbers(numbers) {
	let sort = numbers.sort((a, b) => a - b);
	return sort[0] + sort[1];
}
