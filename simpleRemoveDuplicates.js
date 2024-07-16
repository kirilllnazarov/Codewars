function solve(arr) {
	let newArr = [];
	return arr.filter((el) => (!newArr.includes(el) ? newArr.push(el) : null));
}
