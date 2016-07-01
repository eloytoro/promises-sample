var superPromise = Promise.all([
  promise1,
  promise2
]);

// superPromise.then(results => {
//   results === [promise1, promise2];
// });

const tweets = getTweets('@eloytoro').then(tweets => {
  return tweets.concat(['More tweets']);
});

tweets.then(tweets => {
  console.log(tweets) // <- ['More Tweets','NodeJS is awesome' ...]
});

const superPromise = promise1.then(result1 => {
  return promise2.then(result2 => {
    return ?
  });
});

superPromise.then(result => console.log(result));
