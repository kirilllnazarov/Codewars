function twoOldestAges(ages) {
	return ages.sort((a, b) => a - b).slice(-2);
}

//second solution
const twoOldestAges = (ages) => ages.sort((a, b) => a - b).slice(-2);
