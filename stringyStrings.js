function stringy(size) {
	var string = "";
	for (let i = 0; i < size; i++) {
		i % 2 === 0 ? (string += "1") : (string += "0");
	}
	return string;
}
