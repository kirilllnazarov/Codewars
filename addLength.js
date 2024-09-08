function addLength(str) {
	let arr = str.split(" ");
	arr = arr.map((el) => `${el} ${el.length}`);
	return arr;
}
