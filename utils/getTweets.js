module.exports = function getTweets(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (user !== '@eloytoro') {
                reject(new Error('user not relevant'));
                return;
            }

            resolve([
                'NodeJS is awesome',
                'Webpack confuses me'
            ]);
        }, 2000);
    });
};
