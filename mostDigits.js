function findLongest(array) {
	return array.reduce((a, b) => (`${b}`.length > `${a}`.length ? b : a));
}

//second solution
const findLongest = (array) => array.reduce((a, b) => (`${b}`.length > `${a}`.length ? b : a));
