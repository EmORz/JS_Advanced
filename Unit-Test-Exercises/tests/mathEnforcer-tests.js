let expect = require('chai').expect;
let should = require('chai').should;
let assert = require('chai').assert;
let mathEnforcer = require('../mathEnforcer').mathEnforcer;

describe("Main => mathEnforcer", function() {
    describe("addFive", function () {
        it("should return undefined when input is not number", function () {
            expect(mathEnforcer.addFive("Pesho")).to.be.equal(undefined, "Functionality has Bug!");
        });
        it("should return 0 when input is -5", function () {
            expect(mathEnforcer.addFive(-5)).to.be.equal(0, "Functionality has Bug!");
        });
        it("should return 15 when input is 10", function () {
            expect(mathEnforcer.addFive(10)).to.be.equal(15, "Functionality has Bug!");
        });
        it("should return 8.5 when input is 3.5", function () {
            expect(mathEnforcer.addFive(3.5)).to.be.equal(8.5, "Functionality has Bug!");
        });    
    });
    describe("substractTen", function () {
        it("should return undefined when input is not number", function () {
            expect(mathEnforcer.subtractTen("Pesho")).to.be.equal(undefined, "Functionality has Bug!");
        });
        it("should return -15 when input is -5", function () {
            expect(mathEnforcer.subtractTen(-5)).to.be.equal(-15, "Functionality has Bug!");
        });
        it("should return 0 when input is 10", function () {
            expect(mathEnforcer.subtractTen(10)).to.be.equal(0, "Functionality has Bug!");
        });
        it("should return 6.5 when input is 3.5", function () {
            expect(mathEnforcer.subtractTen(3.5)).to.be.equal(-6.5, "Functionality has Bug!");
        });    
    });
    describe("sum", function () {
        it("should return undefined when first num is not number", function () {
            expect(mathEnforcer.sum("Pesho", 6)).to.be.equal(undefined, "Functionality has Bug!");
        });
        it("should return undefined when second num is not number", function () {
            expect(mathEnforcer.sum(6, "PeshoForever")).to.be.equal(undefined, "Functionality has Bug!");
        });
        it("should return 10 when input is -5 + 10", function () {
            expect(mathEnforcer.sum(-5, 15)).to.be.equal(10, "Functionality has Bug!");
        });
        it("should return 6.3 when input is 3 + 3.3", function () {
            expect(mathEnforcer.sum(3, 3.3)).to.be.equal(6.3, "Functionality has Bug!");
        });
        it("should return 3 when input is 1.5 + 1.5", function () {
            expect(mathEnforcer.sum(1.5, 1.5)).to.be.equal(3, "Functionality has Bug!");
        });
        it("should return 3.11 when input is 1.5 + 1.61", function () {
            expect(mathEnforcer.sum(1.5, 1.61)).to.be.closeTo(3.11, 0.01);
        });
      
    });
});



// let mathEnforcer = {
//     addFive: function (num) {
//         if (typeof(num) !== 'number') {
//             return undefined;
//         }
//         return num + 5;
//     },
//     subtractTen: function (num) {
//         if (typeof(num) !== 'number') {
//             return undefined;
//         }
//         return num - 10;
//     },
//     sum: function (num1, num2) {
//         if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
//             return undefined;
//         }
//         return num1 + num2;
//     }
// };


