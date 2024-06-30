function bump(x) {
	x = x.replace(/[_]/gi, "").length;
	return x <= 15 ? "Woohoo!" : "Car Dead";
}

//second solution
function bump(x) {
	x = x.replace(/[_]/gi, "").length;
	if (x <= 15) {
		return "Woohoo!";
	} 
}
