function vowelIndices(word) {
	let resultVovels = [];
	for (let i = 0; i < word.length; i++) {
		if (/[aeuoiy]/gi.test(word[i])) {
			resultVovels.push(i + 1);
		}
	}
	return resultVovels;
}
