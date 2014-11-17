
module.exports = function (href, referrer, callback) {

  if (referrer.host && referrer.host.indexOf('opentable.com') !== -1) {
    return callback(null, { type: 'local', site: 'opentable', ref: referrer.href, refHost : referrer.host  });
  } else {
    return callback(null, false);
  }

};