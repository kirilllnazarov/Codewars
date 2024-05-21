function circleArea(radius) {
	if (radius <= 0) {
		throw Error("Error");
	} else {
		return +(Math.PI * radius * radius).toFixed(2);
	}
}
