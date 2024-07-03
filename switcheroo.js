function switcheroo(x) {
	let result = "";
	for (let i = 0; i < x.length; i++) {
		if (x[i] === "a") {
			result += "b";
		} else if (x[i] === "b") {
			result += "a";
		} else {
			result += x[i];
		}
	}
	return result;
}

//second solution
function switcheroo(x) {
	return x
		.split("")
		.map((letter) => (letter === "a" ? "b" : letter === "b" ? "a" : "c"))
		.join("");
}
