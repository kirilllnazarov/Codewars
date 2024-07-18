function solution(pairs) {
	return Object.keys(pairs)
		.map((el) => `${el} = ${pairs[el]}`)
		.join(", ");
}
