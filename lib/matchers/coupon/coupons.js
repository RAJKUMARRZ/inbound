var couponsRegExp = new RegExp(".*\\.(groupon" +
    "|retailmenot" +
    "|zulily" +
    "|coupons" +
    "|shopathome" +
    "|slickdeals" +
    "|livingsocial" +
    "|woot" +
    "|ebates" +
    "|fatwallet" +
    "|gilt" +
    "|dealspl" +
    "|bradsdeals" +
    "|savings" +
    "|dealcatcher" +
    "|couponraja" +
    "|couponzguru" +
    "|couponrani" +
    "|taazacoupons" +
    "|cuponation" +
    "|freekaamaal" +
    "|coupondunia" +
    "|mydala" +
    "|cashkaro" +
    "|couponmom" +
    "|coolsavings" +
    "|couponcabin" +
    "|flipit" +
    "|cheaperseeker" +
    "|couponchief" +
    "|givingassistant" +
    "|bargainez" +
    "|mefindcoupon" +
    "|swagbucks" +
    "|smartsource" +
    "|valpak" +
    "|couponsmarty" +
    "|topincoupons" +
    "|CouponWorldz" +
    "|8coupons" +
    "|freebies4mom" +
    "|couponmountain" +
    "|getcouponcodes" +
    "|redplum" +
    "|dealseekingmom" +
    "|groceryalerts" +
    "|afullcup" +
    "|hip2save" +
    "|mycoupongirl" +
    "|couponconvenience" +
    ")\\..*");

module.exports = function (href, referrer, callback) {
    console.log("Inside Coupon Matcher");
    if (referrer.host && href.href.indexOf("utm_") !== -1) {
        var matchResult = referrer.host.match(couponsRegExp);
        console.log("matchResult : ", matchResult);
        if(matchResult) {
            var description = { type: 'coupon', network: matchResult[1], ref : referrer.href, refHost : referrer.host};
            return callback(null, description);
        } else {
            return callback(null, false)
        }
    } else {
        return callback(null, false);
    }

};