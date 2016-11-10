var add = require('../src/index');
var expect = require('chai').expect;
describe('hello node borwser test', function() {
    it('1 加 1 应该等于 2', function() {
        expect(add(1, 1)).to.be.equal(2);
    });
    it('任何数加0应该等于它本身', function() {
        expect(add(2,0)).to.be.equal(2);
    });
});