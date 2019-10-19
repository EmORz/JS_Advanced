let expect = require('chai').expect;
let should = require('chai').should;
let assert = require('chai').assert;
let StringBuilder = require('../string-builder');


describe("StringBuilder", function () {
    it("Can be instantiated without anything", function () {
        let expected = new StringBuilder();
        expect(expected).to.be.a("object")
    });
    it("Can be instantiated with a passed in string argument", function () {
        let expected = new StringBuilder("Pesho");
        expect(expected._stringArray).to.have.lengthOf(5)
    });
    it("prepend(string)", function () {
        let temp = new StringBuilder("Pesho");
        
        expect(temp._stringArray).to.have.lengthOf(5)
    });
    it("prepend(string) - last index", function () {
        let temp = new StringBuilder("Pesho");
        temp.append("Pesho")
        expect(temp._stringArray[0]).to.be.equal("P")
    });
    it("inserAt(string, index)", function () {
        let temp = new StringBuilder("Pesho");
        temp.insertAt("D", 1)
        expect(temp._stringArray[1]).to.be.equal("D")
    });
    it("inserAt(startIndex, length)", function () {
        let temp = new StringBuilder("Pesho");
        temp.remove(0, 1)
        expect(temp._stringArray[0]).to.be.equal("e")
    });
    it("toString()", function () {
        let temp = new StringBuilder("Pesho");
        expect(temp.toString()).to.be.equal("Pesho")
    });

})