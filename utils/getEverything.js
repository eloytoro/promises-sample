var getLikes = require('./getLikes');
var getTweets = require('./getTweets');

module.exports = (user) => {
    return Promise.all([
        getLikes(user),
        getTweets(user)
    ]).then(results => {
        return [].concat(results[0], results[1]);
    });
};
