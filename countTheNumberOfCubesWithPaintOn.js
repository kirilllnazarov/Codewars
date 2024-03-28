function countSquares(cuts) {
	return cuts ? 6 * Math.pow(cuts, 2) + 2 : 1;
}
