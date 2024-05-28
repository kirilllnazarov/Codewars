function nbDig(n, d) {
	let totalOfDigit = 0;
	for (let i = 0; i <= n; i++) {
		totalOfDigit += (i * i)
			.toString()
			.split("")
			.filter((n) => n == d).length;
	}
	return totalOfDigit;
}
