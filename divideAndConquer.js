function divCon(x) {
	return x.reduce(
		(acc, cur) => (typeof cur === "number" ? acc + cur : acc - Number(cur)),
		0
	);
}
