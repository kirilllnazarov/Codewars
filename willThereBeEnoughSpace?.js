function enough(cap, on, wait) {
	return cap - on >= wait ? 0 : on + wait - cap;
}

//second solution
function enough(cap, on, wait) {
	switch (true) {
		case cap - on >= wait:
			return 0;
		case cap - on <= wait:
			return on + wait - cap;
	}
}
