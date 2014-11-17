var querystring = require('querystring');

module.exports = function (href, referrer, callback) {

  if (referrer.host &&
      referrer.path &&
      referrer.path.indexOf("/aclk") !== -1 &&
      (referrer.host.indexOf('google') !== -1 ||
       referrer.host.indexOf('googleadservices.com') !== -1)) {
         
    var description = { type: 'ad', network: 'google', ref:  referrer.href, refHost : referrer.host};
    var queryParams = querystring.parse(referrer.query);
    var query = queryParams.q;
    var addUrl = queryParams.addUrl;
    if (query) description.query = query;
    if (addUrl) description.addUrl = addUrl;
    if (addUrl) description.addUrl = addUrl;
         
    return callback(null, description);
  } else {
    return callback(null, false);
  }

};
