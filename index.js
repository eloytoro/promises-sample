var getTweets = require('./utils/getTweets');

var eloy = getTweets('@eloytoro');

eloy
  .then(() => console.log('success'))

var notrelevant = getTweets('@notrelevant');

notrelevant
  .catch(() => console.log('catched'))
