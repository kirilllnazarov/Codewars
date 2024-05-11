var capitals = function (word) {
	let resultArr = [];
	for (let i = 0; i < word.length; i++) {
		if (word[i] !== word[i].toLowerCase()) {
			resultArr.push(i);
		}
	}
	return resultArr;
};

//second solution
function capitals(word) {
	return resultArr(word);
}

function resultArr(arr) {
	let result = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== arr[i].toLowerCase()) {
			result.push(i);
		}
	}
	return result;
}
