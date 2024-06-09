function comp(array1, array2) {
	if (array1 === null || array2 === null) {
		return false;
	}

	function sortArr(arr) {
		return arr.sort((a, b) => a - b);
	}

	array1 = sortArr(array1);

}
