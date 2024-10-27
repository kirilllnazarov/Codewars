function accum(s) {
	return s
		.split("")
		.map((el, i) => el.toUpperCase() + el.toLowerCase().repeat(i))
		.join("-");
}

//second solution
const accum = (s) =>
	s
		.split("")
		.map((el, i) => el.toUpperCase() + el.toLowerCase().repeat(i))
		.join("-");
