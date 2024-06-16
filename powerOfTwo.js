function isPowerOfTwo(n) {
	return Number.isInteger(Math.log2(n));
}

//second solution
function isPowerOfTwo(n) {
	return n === 0 ? false : (n & (n - 1)) == 0;
}
