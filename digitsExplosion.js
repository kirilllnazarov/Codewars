function explode(s) {
	return s
		.split("")
		.map((n) => n.repeat(+n))
		.join("");
}
