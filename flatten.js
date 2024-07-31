var flatten = function (array) {
	return [].concat(...array);
};

//second solution
function flatten(array) {
	return array.flat();
}
