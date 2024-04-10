function nextItem(xs, item) {
	let found = false;
	let finalValue;

	for (let i of xs) {
		if (found) {
			finalValue = i;
			break;
		}

		if (i === item) found = true;
	}

	return finalValue;
}
