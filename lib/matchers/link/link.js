

module.exports = function (href, referrer, callback) {

  // if the link has a valid host and link then its a link
  if (referrer.host && referrer.href && (!referrer.protocol || referrer.protocol != 'about:')) {
    return callback(null, {
      type: 'link',
      ref: referrer.href,
      link: href.href,
      refHost : referrer.host
    });
  } else {
    return callback(null, false);
  }

};