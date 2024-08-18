String.prototype.toAlternatingCase = function () {
	let str = "";
	for (let i = 0; i < this.length; i++) {
		if (this[i] === this[i].toLowerCase()) {
			str += this[i].toUpperCase();
		}  
	}
	return str;
};
