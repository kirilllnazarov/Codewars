function vaporcode(string) {
	return string.toUpperCase().replace(/ /g, "").split("").join("  ");
}
