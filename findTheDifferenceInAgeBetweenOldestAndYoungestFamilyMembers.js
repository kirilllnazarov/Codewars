function differenceInAges(ages) {
	let arrMinToMax = ages.sort((a, b) => a - b);
	let arrMin = arrMinToMax[0];
	let arrMax = arrMinToMax[arrMinToMax.length - 1];
	let difference = arrMax - arrMin;
	let result = [arrMin, arrMax, difference];
	return result;
}
