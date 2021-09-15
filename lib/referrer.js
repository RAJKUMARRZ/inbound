

var _             = require('underscore'),
    async         = require('async'),
    matchers      = require('./matchers');

/**
 * Parses a location href and document referrer
 * into semantic information about how that visitor
 * got to the page.
 * @param  {string}   href     Location href, equivalent to window.location.href
 * @param  {string}   referrer Referrer url, equivalent to document.referrer
 * @param  {Function} callback callback(err, in);
  * where "in" is a object containing referrer and campaign information
  * about this inbound visitor.
 */
var parse = exports.parse = function parse(href, referrer, callback) {

  var parsedHref = new URL(href || '');
  var parsedReferrer = new URL(referrer || '');

  async.parallel([

    async.apply(parseReferrer, parsedHref, parsedReferrer),
    async.apply(parseCampaign, parsedHref, parsedReferrer)

  ], function (err, results) {

    if (err)  {
      if (callback) return callback(err);

    } else {

      var ref = results[0];
      var campaign = results[1];

      var description = {};
      if (ref) {
          var referrer = {};
          _.each(ref, function (value, key) {
              referrer["ref_"+key] = value;
          });
          description.referrer = referrer;
      };
      if (campaign) description.campaign = campaign;

      return callback(err, description);
    }

  });
};

var parseReferrer = function parseReferrer(href, referrer, callback) {
  var numOfMatchers  = _.size(matchers);

  var processMatcher = function (matcherIndex, done) {
    if (matcherIndex >= numOfMatchers) return done(null, null);
    else {
      var matcher = matchers[matcherIndex];
      process.nextTick(function () {
        matcher(href, referrer, function (err, description) {
          if (err) return done(err);
          else if (description) return done(null, description);
          else return processMatcher(matcherIndex + 1, done);
        });
      });
    }
  };

  if (numOfMatchers > 0) return processMatcher(0, callback);
  else callback(null, null);
};

var campaignKeyMap = {

  'utm_campaign' : 'campaign_id',
  'utm_source'   : 'campaign_source',
  'utm_term'     : 'campaign_term',
  'utm_medium'   : 'campaign_medium',
  'utm_content'  : 'campaign_content',
  'gclid'        : 'campaign_gclid'
};

var parseCampaign = function parseCampaign (href, referrer, callback) {
  var query = href.searchParams
  var campaign = {};
  _.each(campaignKeyMap, function (ourKey, queryKey) {
    if (query.get(queryKey)) campaign[ourKey] = query.get(queryKey)
  });
  return callback(null, _.size(campaign) > 0 ? campaign: null);
};