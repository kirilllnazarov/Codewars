function numberToPower(number, power) {
	let result = 1;
	let i = 1;
	while (i <= power) {
		result *= number;
		i++;
	}
	return result;
}
