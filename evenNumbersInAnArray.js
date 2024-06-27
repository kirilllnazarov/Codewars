function evenNumbers(array, number) {
	return array.filter((el) => el % 2 === 0).slice(-number);
}
