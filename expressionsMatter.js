function expressionMatter(a, b, c) {
	let one = a * (b + c);
	let two = a * b * c;
	let three = a + b * c;
	let four = (a + b) * c;
	let five = a + b + c;

	let arr = [one, two, three, four, five];

	let sortedArr = arr.sort((a, b) => b - a);

	return sortedArr[0];
}
