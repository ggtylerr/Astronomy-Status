// Get packages and register secrets
const Twit = require('twit');
const T = new Twit({
  consumer_key:         process.env['consumer_key'],
  consumer_secret:      process.env['consumer_secret'],
  access_token:         process.env['access_token'],
  access_token_secret:  process.env['access_token_secret']
});

// Make tweet function (so you can set it at an interval)
function tweet() {
  T.post('statuses/update', { status: 
    `MOON: Still there
    SUN: Still there
    STARS: Still there
    PLANETS: Still there
    GALAXIES: Still there`
  }, callback);
}

// Set to tweet every hour
setInterval(tweet, 60*60*1000);

// Make callback function
function callback(err, data, response) {
  if (err) {
    console.log(err);
  } else {
    console.log('Updated board.');
  }
};