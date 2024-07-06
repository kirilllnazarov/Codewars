function myLanguages(results) {
	return Object.keys(results)
		.filter((el) => results[el] >= 60)
		.sort((a, b) => results[b] - results[a]);
}
