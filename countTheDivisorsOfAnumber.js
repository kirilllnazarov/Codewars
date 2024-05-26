function getDivisorsCnt(n) {
	let divisors = 0;
	if (n % Math.sqrt(n) == 0) {
		divisors++;
	}
	for (let i = 0; i < Math.sqrt(n); i++) {
		if (n % i == 0) {
			divisors += 2;
		}
	}
}
