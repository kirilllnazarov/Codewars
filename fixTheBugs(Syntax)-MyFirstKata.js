function myFirstKata(a, b) {
	if (typeof a !== "number" || typeof b !== "number") {
		return false;
	} else {
		return (a % b) + (b % a);
	}
}

//second solution
const myFirstKata = (a, b) => (typeof a !== "number" || typeof b !== "number" ? false : (a % b) + (b % a));
