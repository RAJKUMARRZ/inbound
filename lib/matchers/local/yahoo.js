module.exports = function (href, referrer, callback) {

  if (referrer.host && 
      (referrer.host.indexOf('local.yahoo') !== -1 || 
       referrer.host.indexOf('local.search.yahoo') !== -1)) {
    var description = { type: 'local', site: 'yahoo', url : referrer.href, host : referrer.host};
    var qs = referrer.searchParams;
    if (qs.get("p")) description.query = qs.get("p");
    if (qs.get("addr")) description.location = qs.get("addr");
    return callback(null, description);
  } else {
    return callback(null, false);
  }

};