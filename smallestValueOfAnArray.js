function min(arr, toReturn) {
	if (toReturn === "value") return Math.min(...arr);
	else return arr.indexOf(Math.min(...arr));
}
