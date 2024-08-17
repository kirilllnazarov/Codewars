function correct(string) {
	return string
		.replace(/[5]/gi, "S")
		.replace(/[0]/gi, "O")
		.replace(/[1]/gi, "I");
}

//second solution
function correct(s) {
	s = s.split("");
	let i = 0;
	while (i < s.length) {
		if (s[i] === "5") s[i] = "S";
		else if (s[i] === "0") s[i] = "O";
		else if (s[i] === "1") s[i] = "I";
		i++;
	}
	return s.join("");
}
