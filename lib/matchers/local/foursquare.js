
module.exports = function (href, referrer, callback) {

  if (referrer.host && referrer.host.indexOf('foursquare.com') !== -1) {
    return callback(null, { type: 'local', site: 'foursquare', url : referrer.href, host : referrer.host});
  } else {
    return callback(null, false);
  }

};