var chai = require('chai');
var expect = chai.expect;
var getLikes = require('../utils/getLikes');

describe('getLikes', function() {
  this.timeout(3000);
  it('should work for @eloytoro', () => {
    return getLikes('@eloytoro')
      .should.be.fulfilled
      .then(likes => {
        expect(likes).to.an('array');
        expect(likes).to.have.length(3);
      });
  });
  it('should fail for anyone else', () => {
    return getLikes('@notimportant')
      .should.be.rejectedWith(Error)
  });
});
