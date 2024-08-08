function findDigit(num, nth) {
	if (nth <= 0) return -1;
	else {
		num = Math.abs(num).toString().split("").reverse();
		if (num.length + 1 <= nth) {
			return 0;
		} else {
			return Number(num[nth - 1]);
		}
	}
}
