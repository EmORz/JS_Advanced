let expect = require('chai').expect;
let should = require('chai').should;
let assert = require('chai').assert;
let isOddOrEven = require('../isOddOrEven').isOddOrEven;

describe("isOdOrEven", function () {
    it("should return undefined when input is not string", function () {
        expect(isOddOrEven(13)).to.equal(undefined);
    });
    it("should return undefined when input is object", function () {
        expect(isOddOrEven({name: "Pesho"})).to.equal(undefined, "Function didnt returna correct result");
    });
    it("should return eve when input lenght is even", function () {
        expect(isOddOrEven("EpakPeshoO")).to.equal("even", "Function didnt returna correct result");
    });
    it("should return odd when input lenght is odd", function () {
        expect(isOddOrEven("EpakPesho")).to.equal("odd", "Function didnt returna correct result");
    });
    it("should return correct values with multiple consectutive checks", function () {
        expect(isOddOrEven("EPesho")).to.equal("even", "Function didnt returna correct result")
        expect(isOddOrEven("EPesh")).to.equal("odd", "Function didnt returna correct result")
        expect(isOddOrEven("EPeshoForever")).to.equal("odd", "Function didnt returna correct result")
    });
})