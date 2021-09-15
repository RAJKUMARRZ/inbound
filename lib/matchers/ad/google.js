module.exports = function (href, referrer, callback) {

  if (referrer.host &&
      referrer.path &&
      referrer.path.indexOf("/aclk") !== -1 &&
      (referrer.host.indexOf('google') !== -1 ||
       referrer.host.indexOf('googleadservices.com') !== -1)) {
         
    var description = { type: 'ad', network: 'google', url : referrer.href, host : referrer.host};
    var queryParams = referrer.searchParams;
    var query = queryParams.get("q");
    var addUrl = queryParams.get("addUrl");
    if (query) description.query = query;
    if (addUrl) description.addUrl = addUrl;
         
    return callback(null, description);
  } else {
    return callback(null, false);
  }

};
