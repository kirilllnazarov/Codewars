function isPalindrome(x) {
	x = x.toLowerCase();
	return x === x.split("").reverse().join("");
}
