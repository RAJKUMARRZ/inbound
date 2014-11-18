

module.exports = function (href, referrer, callback) {

  if (referrer.host && referrer.host.indexOf('linkedin.com') !== -1) {
    return callback(null, {type: 'social',network: 'linkedin', url : referrer.href, host : referrer.host});
  } else {
    return callback(null, false);
  }
};