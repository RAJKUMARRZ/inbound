module.exports = function (href, referrer, callback) {

  if (referrer.host && referrer.host.indexOf('bing.com') !== -1 &&
      href.href.indexOf("utm_medium=cpc") !== -1) {
    var description = { type: 'ad', network: 'bing', url : referrer.href, host : referrer.host};
    var query = referrer.searchParams.get("q");
    if (query) description.query = query;
    return callback(null, description);
  } else {
    return callback(null, false);
  }

};