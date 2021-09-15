module.exports = function (href, referrer, callback) {

  if (referrer.host && 
      referrer.host.indexOf('bing.com') !== -1 &&
      referrer.path &&
      referrer.path.indexOf("/local") === 0) {
    var description = { type: 'local', site: 'bing', url : referrer.href, host : referrer.host};
    var query = referrer.searchParams.get("q");
    if (query) description.query = query;
    return callback(null, description);
  } else {
    return callback(null, false);
  }

};