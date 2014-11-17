

module.exports = function (href, referrer, callback) {

  if (referrer.host && referrer.host.match(/mail[0-9]*.daum.net/) !== null) {
    return callback(null, {
      type: 'email',
      client: 'daum',
      ref: referrer.href,
      refHost : referrer.host,
      link: href.href

    });
  } else {
    return callback(null, false);
  }

};