function minValue(values) {
	return +values
		.sort((a, b) => a - b)
		.filter((el, index) => values.indexOf(el) === index)
		.join("");
}

//second solution
const minValue = (values) =>
	+values
		.sort((a, b) => a - b)
		.filter((el, index) => values.indexOf(el) === index)
		.join("");
