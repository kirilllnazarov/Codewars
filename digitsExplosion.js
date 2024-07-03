function explode(s) {
	return s
		.split("")
		.map((n) => n.repeat(+n))
		.join("");
}

//second solution
function explode(s) {
	let result = "";
	for (let i = 0; i < s.length; i++) {
		for (let j = s[i]; j > 0; j--) {
			result += s[i];
		}
	}
	return result;
}
