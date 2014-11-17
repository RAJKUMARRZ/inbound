
module.exports = function (href, referrer, callback) {

  if (referrer.host && referrer.host.indexOf('groupon.com') !== -1) {
    return callback(null, { type: 'local', site: 'groupon', ref: referrer.href, refHost : referrer.host  });
  } else {
    return callback(null, false);
  }

};