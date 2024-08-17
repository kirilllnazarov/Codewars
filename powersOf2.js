function powersOfTwo(n) {
	let result = [];
	for (let i = 0; i <= n; i++) {
		result.push(2 ** i);
	}
	return result;
}

//second solution
function powersOfTwo(n) {
	const result = [];
	let i = 0;
	while (i <= n) {
		result.push(2 ** i);
		i++;
	}
	return result;
}
