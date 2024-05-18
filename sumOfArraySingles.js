function repeats(arr) {
	return arr
		.filter((v, i, arr) => arr.indexOf(v) == arr.lastIndexOf(v))
		.reduce((a, b) => a + b, 0);
}
