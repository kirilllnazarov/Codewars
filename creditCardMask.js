function maskify(cc) {
	if (cc.length <= 3) {
		return cc;
	} else {
		return `${cc.slice(0, -4).replace(/\w/g, "#")}${cc.slice(-4)}`;
	}
}
