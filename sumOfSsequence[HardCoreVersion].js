function sequenceSum(begin, end, step) {
	let result = 0;
	for (let i = begin; step > 0 ? i <= end : i >= end; i += step) result += i;
	return result;
}
