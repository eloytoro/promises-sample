var chai = require('chai');
var expect = chai.expect;
var getTweets = require('../utils/getTweets');

describe('getTweets', function() {
  this.timeout(3000);
  it('should work for @eloytoro', () => {
    return getTweets('@eloytoro')
      .should.be.fulfilled
      .then(likes => {
        expect(likes).to.an('array');
        expect(likes).to.have.length(2);
      });
  });
  it('should fail for anyone else', () => {
    return getTweets('@notimportant')
      .should.be.rejectedWith(Error)
  });
});
