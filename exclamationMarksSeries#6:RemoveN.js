function remove(s, n) {
	let input = s;
	while (n) {
		input = input.replace(/!/, "");
		n -= 1;
	}
	return input;
}
