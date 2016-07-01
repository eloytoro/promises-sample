var chai = require('chai');
var expect = chai.expect;
var getEverything = require('../utils/getEverything');
var getEverythingSeries = require('../utils/getEverythingSeries');

describe('getEverything', function() {
  it('should give me everything', function() {
    this.timeout(6000);
    return getEverything('@eloytoro')
      .should.be.fulfilled
      .then(everything => {
        everything.should.be.an('array');
        everything.should.have.length(5);
      });
  });

  it('should give me everything', function() {
    this.timeout(8000);
    return getEverythingSeries('@eloytoro')
      .should.be.fulfilled
      .then(everything => {
        everything.should.be.an('array');
        everything.should.have.length(5);
      });
  });
});
