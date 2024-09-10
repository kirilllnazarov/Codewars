function sumMul(n, m) {
	if (m <= 0) {
		return "INVALID";
	}
	let result = 0;
	for (let i = 0; i < m; i += n) {
		result += i;
	}
	return result;
}
