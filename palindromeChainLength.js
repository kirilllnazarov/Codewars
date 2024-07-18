var palindromeChainLength = function (n) {
	var count = 0;
	var palindrome = parseInt((n + "").split("").reverse().join(""));
	while (palindrome !== n) {
		n = parseInt(n) + parseInt(palindrome);
		palindrome = parseInt((n + "").split("").reverse().join(""));
		++count;
	}

	return count;
};
