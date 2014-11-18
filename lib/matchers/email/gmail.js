

module.exports = function (href, referrer, callback) {

  if (referrer.host && referrer.host.indexOf('mail.google.com') !== -1) {
    return callback(null, {
      type: 'email',
      client: 'gmail',
        url : referrer.href,
        host : referrer.host,
      link: href.href
    });
  } else {
    return callback(null, false);
  }

};