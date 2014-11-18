
module.exports = function (href, referrer, callback) {

  if (referrer.host &&
      (referrer.host.indexOf('twitter.com') !== -1 ||
      referrer.host === 't.co')) {
    return callback(null, {type: 'social',network: 'twitter', url : referrer.href, host : referrer.host});
  } else {
    return callback(null, false);
  }

};