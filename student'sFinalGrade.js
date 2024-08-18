function finalGrade(exam, projects) {
	if (exam > 90 || projects > 10) {
		return 100;
	} else if (exam > 75 && projects >= 5) {
		return 90;
	} else if (exam > 50 && projects >= 2) {
		return 75;
	} else {
		return 0;
	}
}

//second solution
function finalGrade(exam, projects) {
	switch (true) {
		case exam > 90 || projects > 10:
			return 100;
		case exam > 75 && projects >= 5:
			return 90;
		case exam > 50 && projects >= 2:
			return 75;
		default:
			return 0;
	}
}
