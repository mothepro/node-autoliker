function autolike (client, tags) {
    // stream the newest posts by tag
    tags.forEach(function(tag) {
        client.stream('statuses/filter', {track: tag}, function (stream) {

            // when stream finds data
            stream.on('data', function (tweet) {

                // favorite new tweet
                client.post('favorites/create', {id: tweet.id_str}, function (error, tweet, response) {
                    //console.log('Liked', tweet.text, ' by ', tweet.user.screen_name);
                    console.log('Liked');
                });
            });

            stream.on('error', function (error) {
                //throw error;
                console.log('Unable to stream tweets for', tag);
            });

            console.log('Now streaming tweets for', tag);
        });
    });
}

module.exports = autolike;