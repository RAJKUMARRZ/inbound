

module.exports = function (href, referrer, callback) {
  return callback(null, { type: 'unknown', ref: referrer.href, refHost : referrer.host});
};