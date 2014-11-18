
module.exports = function (href, referrer, callback) {

  if (referrer.host && referrer.host.indexOf('facebook.com') !== -1) {
    return callback(null, { type: 'social', network: 'facebook', url : referrer.href, host : referrer.host});
  } else {
    return callback(null, false);
  }

};