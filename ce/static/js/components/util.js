function m() {
	var res = {};
	for (var i = arguments.length - 1; i >= 0; i--) {
		if(arguments[i]) {
			Object.assign(res, arguments[i]);
		}
	};
	return res
}