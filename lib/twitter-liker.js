function autolike (client, tags) {
    this.favs = {};
    var me = this;

    // stream the newest posts by tag
    tags.forEach(function(tag) {
        me.favs[tag] = 0;

        client.stream('statuses/filter', {track: tag}, function (stream) {

            // when stream finds data
            stream.on('data', function (tweet) {

                // favorite new tweet
                client.post('favorites/create', {id: tweet.id_str}, function (error, tweet, response) {
                    if(!error)
                        me.favs[tag]++;
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

/** Output favs
process.stdin.resume();//so the program will not close instantly

function exitHandler(options, err) {
    if (options.cleanup) console.log('clean');
    if (options.exit) process.exit();
}

//do something when app is closing
process.on('exit', exitHandler.bind(null,{cleanup:true}));

//catches ctrl+c event
process.on('SIGINT', exitHandler.bind(null, {exit:true}));

//catches uncaught exceptions
process.on('uncaughtException', exitHandler.bind(null, {exit:true}));
*/

module.exports = autolike;