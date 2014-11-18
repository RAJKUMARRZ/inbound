
module.exports = function (href, referrer, callback) {

  if (referrer.host && referrer.host.indexOf('opentable.com') !== -1) {
    return callback(null, { type: 'local', site: 'opentable', url : referrer.href, host : referrer.host});
  } else {
    return callback(null, false);
  }

};