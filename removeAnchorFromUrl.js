function removeUrlAnchor(url) {
	let result = "";
	for (let i = 0; i < url.length; i++) {
		if (url[i] !== "#") {
			result += url[i];
		} else {
			break;
		}
	}
	return result;
}

//second solution
function removeUrlAnchor(url) {

}
