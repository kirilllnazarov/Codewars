function sumOfMinimums(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i].sort((a, b) => a - b)[0];
	}

}
