function peopleWithAgeDrink(old) {
	if (old < 14) {
		return "drink toddy";
	} else if (old < 18) {
		return "drink coke";
	} else if (old < 21) {
		return "drink beer";
	} else {
		return "drink whisky";
	}
}

//second solution
function peopleWithAgeDrink(old) {
	switch (true) {
		case old < 14:
			return "drink toddy";
		case old < 18:
			return "drink coke";
		case old < 21:
			return "drink beer";
		case old >= 21:
			return "drink whisky";
	}
}
