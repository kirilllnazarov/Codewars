function flattenAndSort(array) {
	return [].concat(...array).sort((a, b) => a - b);
}

//second solution

function flattenAndSort(array) {
	var newArray = [];
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array[i].length; j++) {
			newArray.push(array[i][j]);
		}
	}

	return newArray.sort((a, b) => a - b);
}
