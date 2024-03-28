function slope(points) {
	return points[0] - points[2] == 0
		? "undefined"
		: `${(points[1] - points[3]) / (points[0] - points[2])}`;
}
