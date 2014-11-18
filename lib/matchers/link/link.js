

module.exports = function (href, referrer, callback) {

  // if the link has a valid host and link then its a link
  if (referrer.host && referrer.href && (!referrer.protocol || referrer.protocol != 'about:')) {
    return callback(null, {
      type: 'link',
        url : referrer.href,
        host : referrer.host,
      link: href.href
    });
  } else {
    return callback(null, false);
  }

};