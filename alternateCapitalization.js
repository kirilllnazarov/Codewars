function capitalize(s) {
	return [
		s
			.split("")
			.map((el, index) =>
				index % 2 === 0 ? el.toUpperCase() : el.toLowerCase()
			)
			.join(""),
		
}
