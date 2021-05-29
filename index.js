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

// Do the first tweet
tweet();

// Make callback function
function callback(err, data, response) {
  if (err) {
    console.log(err);
  } else {
    // Get date and time
    let t = new Date(Date.now());
    let o = {
      m: t.getMonth() + 1,
      d: t.getDate(),
      y: t.getFullYear(),
      h: t.getHours(),
      m: t.getMinutes(),
      s: t.getSeconds()
    }
    let s = `${o.m}/${o.d}/${o.y} ${o.h}:${o.m}:${o.s}`;
    console.log(`Updated board at ${s}`);
  }
};