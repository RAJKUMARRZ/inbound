
module.exports = function (href, referrer, callback) {

  if (referrer.host && referrer.host.indexOf('me2day.net') !== -1) {
    return callback(null, {type: 'social', network: 'me2day', ref: referrer.href, refHost : referrer.host});
  } else {
    return callback(null, false);
  }

};