let expect = require('chai').expect;
let should = require('chai').should;
let assert = require('chai').assert;
let lookupChar = require('../lookupChar').lookupChar;

describe("lookUpChar testing", function () {

    it("with second parameter floating point should return undefined", function () {
        let arrStr = ["pesho", "nikola", "bai ivan"];
        let arrInd = [3.14, 15.66, 6.56];

        for (let i = 0; i < arrStr.length; i++) {
        expect(lookupChar(arrStr[i], arrInd[i])).to.equal(undefined, "Function didnt return correct");            
        }
    });
    it("with no string first parameter should return undefined", function () {
        let arrStr = ["pesho", "nikola", "bai ivan"];
        let arrInd = ["pesho", ["ceco"], {}];

        for (let i = 0; i < arrStr.length; i++) {
        expect(lookupChar(arrStr[i], arrInd[i])).to.equal(undefined, "Function didnt return correct");            
        }
    });
    it("with no string first parameter should return undefined", function () {
        let arrStr = [9, 1, 0];
        let arrInd = [0, 2, 0];

        for (let i = 0; i < arrStr.length; i++) {
        expect(lookupChar(arrStr[i], arrInd[i])).to.equal(undefined, "Function didnt return correct");            
        }
    });
    it("with no number second parameter should return undefined", function () {
        let arrStr = ["pesho", "ivan", "dragan"];
        let arrInd = ["pesho", "ivan", "dragan"];

        for (let i = 0; i < arrStr.length; i++) {
        expect(lookupChar(arrStr[i], arrInd[i])).to.equal(undefined, "Function didnt return correct");            
        }
    });
    it("with no correct index should return  => Incorrect index", function () {
        let arrStr = ["pesho", "ivan", "dragan"];
        let arrInd = [-9, 1599565, arrStr[2].length+2];

        for (let i = 0; i < arrStr.length; i++) {
        expect(lookupChar(arrStr[i], arrInd[i])).to.equal("Incorrect index", "Function didnt return correct");            
        }
    });
    it("with correct string and index should return  => p i n", function () {
        let arrStr = ["pesho", "ivan", "dragan"];
        let arrInd = [0, 0, arrStr[2].length-1];
        let results = ["p", "i", "n"]

        for (let i = 0; i < arrStr.length; i++) {
        expect(lookupChar(arrStr[i], arrInd[i])).to.equal(results[i], "Function didnt return correct");            
        }
    });


})