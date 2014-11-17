
module.exports = function (href, referrer, callback) {

  if (referrer.host && referrer.host.indexOf('mapquest.com') !== -1) {
    return callback(null, { type: 'local', site: 'mapquest', ref: referrer.href, refHost : referrer.host  });
  } else {
    return callback(null, false);
  }

};