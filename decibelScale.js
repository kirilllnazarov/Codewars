function dBScale(intensity) {
	return 10 * Math.log10(intensity / Math.pow(10, -12));
}

//second solution
const dBScale = (intensity) => 10 * Math.log10(intensity / Math.pow(10, -12));
