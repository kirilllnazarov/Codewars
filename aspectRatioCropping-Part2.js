function aspectRatio(x, y, constant) {
	let [newX, newY] = [x, y];
	const ratio = 16 / 9;
	switch (constant) {
		case "height":
			newX = y * ratio;
			break;
		case "width":
			newY = x / ratio;
			break;
		case "diagonal":
			const diagonal = Math.sqrt(x ** 2 + y ** 2);
			const theta = Math.atan(ratio);
			newX = diagonal * Math.sin(theta);
			newY = diagonal * Math.cos(theta);
			break;
		case "area":
			const area = x * y;
			newX = Math.sqrt(area * ratio);
			newY = area / newX;
	}
	return [Math.ceil(newX), Math.ceil(newY)];
}
