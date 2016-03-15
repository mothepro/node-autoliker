var program = require('commander');
var autoLiker = require('../lib/twitter-liker');
const Twitter = require('twitter');

program
    .version('0.0.0')
    .option('--twitter-consumer-key [key]', 'Your Twitter application\'s key', process.env.TWITTER_CONSUMER_KEY || '')
    .option('--twitter-consumer-secret [secret]', 'Your Twitter application\'s secret', process.env.TWITTER_CONSUMER_SECRET || '')
    .option('--twitter-access-token [key]', 'Your user\'s token to access your application', process.env.TWITTER_ACCESS_TOKEN_KEY || '')
    .option('--twitter-access-secret [secret]', 'Your user\'s secret to access your application', process.env.TWITTER_ACCESS_TOKEN_SECRET || '')
    .option('-t, --terms [value]', 'Keyterms to search for in new tweets', function (val, all) {
        all.push(val);
        return all;
    }, [])
    .parse(process.argv);

var t = {
    consumer_key: program.twitterConsumerKey,
    consumer_secret: program.twitterConsumerSecret,
    access_token_key: program.twitterAccessToken,
    access_token_secret: program.twitterAccessSecret,
};

// check if should do twitter
var doTwitter = true;
for(var m in t) if(!t[m].length) doTwitter = false;
if(doTwitter)
    autoLiker(new Twitter(t), program.terms);
