function smallEnough(a, limit) {
	return a.filter((el) => el > limit).length > 0 ? false : true;
}

//second solution
const smallEnough = (a, limit) =>
	a.filter((el) => el > limit).length > 0 ? false : true;
