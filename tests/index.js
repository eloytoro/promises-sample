var chai = require('chai');
chai.should();
chai.use(require('chai-as-promised'));
require('./getLikes');
require('./getTweets');
require('./getEverything');
