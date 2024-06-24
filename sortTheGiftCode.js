function sortGiftCode(code) {
	return code.split("").sort().join("");
}

//second solution
function sortGiftCode(code) {
	let result = "";
	for (let i = 0; i < code.length; i++) {
		result = `${code[i]}${result}`;
	}
	return result;
}
