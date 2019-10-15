let expect = require("chai").expect;
let subSum = require('../subSum').subSum;

describe('sub sum(arr) - sum sequence of numbers from array', function () {
    it("should return 150 from [10, 20, 30, 40, 50, 60], 3, 300", function () {
        expect(subSum([10, 20, 30, 40, 50, 60], 3, 300)).to.be.equal(150);
    });
    it("should return 3.3 from [1.1, 2.2, 3.3, 4.4, 5.5], -3, 1", function () {
        expect(subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1)).to.be.equal(3.3);
    });
    it("should return NaN from [10, 'twenty', 30, 40], 0, 2", function () {
        expect(subSum([10, 'twenty', 30, 40], 0, 2)).to.be.NaN;
    });
    it("should return 0 from  [], 1, 2", function () {
        expect(subSum( [], 1, 2)).to.be.equal(0);
    });
    it("should return NaN from 'text', 0, 2", function () {
        expect(subSum( 'text', 0, 2)).to.be.NaN;
    })



   
})