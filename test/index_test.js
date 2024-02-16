var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('correct calculation', () => {
      number = 5
      result = Calculate.factorial(number)
      expected = 120
      
      assert.equal(result, expected)
    })
  });
  it('returns 1 when you pass in 0.', () => {
    number = 0
    result = Calculate.factorial(number)
    expected = 1
    
    assert.equal(result, expected)
  })
});
