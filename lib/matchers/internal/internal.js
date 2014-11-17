

module.exports = function (href, referrer, callback) {

	if (href.host && referrer.host && href.host === referrer.host) {
		return callback(null, {
			type: 'internal',
            ref : referrer.href,
            refHost : referrer.host
		});
	} else {
		return callback(null, false);
	}

};