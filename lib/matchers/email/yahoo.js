var tldextract = require('tldextract');

module.exports = function (href, referrer, callback) {

  if (!referrer.host || referrer.host.indexOf('mail.yahoo') === -1) {
    return callback(null, false);
  }
  
  tldextract(referrer.href, function(e, tld) {
    if (!e && tld.domain === "yahoo" && tld.subdomain.indexOf("mail") !== -1) {
      return callback(null, {
        type: 'email',
        client: 'yahoo',
          url : referrer.href,
          host : referrer.host,
        link: href.href
      });
    } else {
      return callback(null, false);
    }
  });

};