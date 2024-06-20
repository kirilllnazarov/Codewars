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
function removeDuplicateWords(s) {
	s = s.split(" ");
	let result = [];
	for (let i = 0; i < s.length; i++) {
		if (result.includes(s[i])) {
			continue;
		} else {
			result.push(s[i]);
		}
	}
	return result.join(" ");
}

//third solution
function removeDuplicateWords(s) {
	s = s.split(" ");
	let result = [];
	for (let i = 0; i < s.length; i++) {
		if (!result.includes(s[i])) {
			result.push(s[i]);
		}
	}
	return result.join(" ");
}
