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
  // Add current time to workaround duplicate status error
  let t = new Date();
  T.post('statuses/update', { status: 
    `As of ${("0" + t.getHours()).slice(-2)}:00 UTC:
MOON: Still there
SUN: Still there
STARS: Still there
PLANETS: Still there
GALAXIES: Still there`
  }, callback);
}

// Set to tweet every hour
setInterval(tweet, 60*60*1000);

// Do the first tweet
tweet();

// Make callback function
function callback(err, data, response) {
  if (err) {
    console.log(err);
  } else {
    // Get date and time
    let t = new Date();
    let o = {
      m: ("0" + (t.getMonth() + 1)).slice(-2),
      d: ("0" + t.getDate()).slice(-2),
      y: t.getFullYear(),
      h: ("0" + t.getHours()).slice(-2),
      mi: ("0" + t.getMinutes()).slice(-2),
      s: ("0" + t.getSeconds()).slice(-2)
    }
    let s = `${o.m}/${o.d}/${o.y} ${o.h}:${o.mi}:${o.s}`;
    console.log(`Updated board at ${s}`);
  }
};