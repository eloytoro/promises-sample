var getLikes = require('./getLikes');
var getTweets = require('./getTweets');

module.exports = (user) => {
    return getLikes(user).then(likes => {
        return getTweets(user).then(tweets => {
            return [].concat(tweets, likes);
        });
    });
};
