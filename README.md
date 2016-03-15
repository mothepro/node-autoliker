# AutoLiker
> Makes it easy to like posts related to what your account are all about.

## Self host instructions
1. Make a developer Twitter account [http://dev.twitter.com/](here).
2. Install the application using `npm i autoliker -g`
3. run the autoliker command with your consumer and application credentials.
3b. add as many terms as you wish to narrow results to what you want.

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