module.exports = function (href, referrer, callback) {

  if (referrer.host && referrer.host.indexOf('search.naver.com') !== -1) {
    var description = { type: 'search', engine: 'naver', url : referrer.href, host : referrer.host};
    var query = referrer.searchParams.get("query");
    if (query) description.query = query;
    return callback(null, description);
  } else {
    return callback(null, false);
  }

};