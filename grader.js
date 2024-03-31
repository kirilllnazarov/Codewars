function grader(score) {
	return score > 1 || score < 0.6
		? "F"
		: score === 0.6
		? "D"
		: score < 0.7
		? "D"
		: score < 0.8
		? "C"
		: score < 0.9
		? "B"
		: "A";
}

//second solution
function grader(score) {
	if (score > 1 || score < 0.6) return "F";
	else if (score >= 0.9) return "A";
	else if (score >= 0.8) return "B";
	else if (score >= 0.7) return "C";
	else if (score >= 0.6) return "D";
}
