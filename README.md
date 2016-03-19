# AutoLiker
> Makes it easy to like posts related to what your account are all about.

## Self host instructions
1. Make a [Twitter Developer account](http://dev.twitter.com/).
2. Install the application using `npm i autoliker -g`
3. run the autoliker command with your consumer and application credentials.
4. add as many terms as you wish to narrow results to what you want.

### Example
`$ TWITTER_CONSUMER_KEY='' TWITTER_CONSUMER_SECRET='' TWITTER_ACCESS_TOKEN_KEY='' TWITTER_ACCESS_TOKEN_SECRET='' autoliker -t JavaScript -t Cool`

1. First set the tokens & keys as environment variables (or using the command line arguments listed in the [usage](#usage).)
2. The stream tweet for "javascript" & "cool"
3. Automatically like them!

## Usage
```
  Usage: autoliker [options]

  Options:

    -h, --help                          output usage information
    -V, --version                       output the version number
    --twitter-consumer-key [key]        Your Twitter application's key
    --twitter-consumer-secret [secret]  Your Twitter application's secret
    --twitter-access-token [key]        Your user's token to access your application
    --twitter-access-secret [secret]    Your user's secret to access your application
    -t, --terms [value]                 Keyterms to search for in new tweets
```