module.exports = function (href, referrer, callback) {

  if (referrer.host && referrer.host.indexOf('baidu.com') !== -1) {
    var description = { type: 'search', engine: 'baidu', url : referrer.href, host : referrer.host};
    var query = referrer.searchParams.get("wd");
    if (query) description.query = query;
    return callback(null, description);
  } else {
    return callback(null, false);
  }

};