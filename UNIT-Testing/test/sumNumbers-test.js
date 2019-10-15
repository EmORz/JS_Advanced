let expect = require("chai").expect;
let sum = require('../sumNumbers').sum;

describe('sum(arr) - sum numbers from array', function () {
    it("should return 30 from [10, 20]", function () {
        expect(sum([10, 20])).to.be.equal(30);
    });
    it("should return 10 from [10]", function () {
        expect(sum([10])).to.be.equal(10);
    });
    it("should return 0 from []", function () {
        expect(sum([])).to.be.equal(0);
    });
    it("should return Nan from ['Pesho']", function () {
        expect(sum(['Pesho'])).to.be.NaN;
    });   
})