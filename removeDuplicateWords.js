function removeDuplicateWords(s) {
	let sentence = s.split(" ");
	let res = [];
	for (let i = 0; i < sentence.length; i++) {
		console.log(sentence.indexOf(sentence[i]));
		if (sentence.indexOf(sentence[i]) === i) res.push(sentence[i]);
	}
	return res.join(" ");
}

//second solution