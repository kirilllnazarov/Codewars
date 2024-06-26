function wordsToMarks(string) {
	let letterSum = 0;
	for (let i = 0; i < string.length; i++) {
		letterSum = letterSum + string.charCodeAt(i) - 96;
	}
	return letterSum;
}
