let orderedCount = function (text) {
	const split = text.split("");
	const str = [...new Set(split)];

	let result = [];

	for (let i = 0; i <= str.length - 1; i += 1) {
		result.push([str[i], split.filter((s) => s === str[i]).length]);
	}

	return result;
};
