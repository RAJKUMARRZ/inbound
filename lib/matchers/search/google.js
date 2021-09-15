module.exports = function (href, referrer, callback) {

  if (referrer.host && referrer.href &&
      referrer.host.indexOf('google') !== -1 && (
         referrer.href.indexOf('/url?') !== -1 ||
         referrer.href.indexOf('/search?') !== -1)) {

    var description = { type: 'search', engine: 'google', url : referrer.href, host : referrer.host};
    var query = referrer.searchParams.get("q");
    if (query) description.query = query;
    return callback(null, description);
  } else {
    return callback(null, false);
  }

};