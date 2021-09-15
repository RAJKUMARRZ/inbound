module.exports = function (href, referrer, callback) {

  if (referrer.host && referrer.host.indexOf('search.nate.com') !== -1) {
    var description = { type: 'search', engine: 'nate', url : referrer.href, host : referrer.host};
    var query = referrer.searchParams.get("q");
    if (query) description.query = query;
    return callback(null, description);
  } else {
    return callback(null, false);
  }

};