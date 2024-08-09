function hasUniqueChars(str) {
	return !/(.).*\1/.test(str);
}
