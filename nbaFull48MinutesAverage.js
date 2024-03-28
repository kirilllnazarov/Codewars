function pointsPer48(ppg, mpg) {
	return ppg > 0 || mpg > 0 ? +((48 / mpg) * ppg).toFixed(1) : 0;
}
