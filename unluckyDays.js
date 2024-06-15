function unluckyDays(year) {
	let date = new Date(year, 0).getTime();
	let d = 1000 * 60 * 60 * 24;
	let friday = 0;
	for (let i = 0; i < 365; i++) {
		date += d;
		if (new Date(date).getDay() === 5 && new Date(date).getDate() === 13)
			friday++;
	}
	return friday;
}
