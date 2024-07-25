function solution(start, finish) {
	if (start === finish) {
		return 0;
	}
	let now = start;
	let sum = 0;
	while (finish - now >= 3) {
		now += 3;
		sum++;
	}
	return sum + ((finish - now) % 3);
}
