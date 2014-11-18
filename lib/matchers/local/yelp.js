
module.exports = function (href, referrer, callback) {

  if (referrer.host && referrer.host.indexOf('yelp.com') !== -1) {
    return callback(null, { type: 'local', site: 'yelp', url : referrer.href, host : referrer.host});
  } else {
    return callback(null, false);
  }

};