function gps(s, x) {
	let arr = [];
	if (x.length <= 1) {
		return 0;
	}
	for (i = 0; i < x.length - 1; i++) {
		arr.push(((x[i + 1] - x[i]) * 3600) / s);
	}
	return Math.max(...arr);
}
