function bump(x) {
	x = x.replace(/[_]/gi, "").length;
	return x <= 15 ? "Woohoo!" : "Car Dead";
}
