function mergeArrays(arr1, arr2) {
	return arr1
		.filter((item) => !arr2.includes(item))
		.concat(arr2)
		.sort((a, b) => a - b);
}
