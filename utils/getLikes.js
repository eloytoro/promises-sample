module.exports = function getTweets(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (user !== '@eloytoro') {
                reject(new Error('user not relevant'));
                return;
            }

            resolve([
                '@nodejs',
                '@hackernews',
                '@eggheadio'
            ]);
        }, 2000);
    });
};
