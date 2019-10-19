let expect = require('chai').expect;
let should = require('chai').should;
let assert = require('chai').assert;
let PaymentPackage = require('../PaymentPackage');

describe("PaymentPackage tests", function() {
       it("Can be instantiated with two parameters - a string name and number value", function () {
        let temp = new PaymentPackage("fee", 96);
        
        expect(temp).to.be.a("object")
    });
    it("check toString with active", function () {
        let temp = new PaymentPackage("fee", 10);

        expect(temp.toString()).to.be.equal(`Package: fee\n- Value (excl. VAT): 10\n- Value (VAT 20%): 12`);
    
    });
    it("check toString with inactive", function () {
        let temp = new PaymentPackage("fee", 10);

        temp.active = false;
        expect(temp.toString()).to.be.equal(`Package: fee (inactive)\n- Value (excl. VAT): 10\n- Value (VAT 20%): 12`);
    
    });
   it("Constrctor with two parameters", function () {
        let temp = new PaymentPackage("fee", 96);
        expect(temp).to.be.instanceOf(PaymentPackage);
        expect(temp.name).to.be.equal("fee");
        expect(temp.value).to.be.equal(96);
        expect(temp.VAT).to.be.equal(20);
        expect(temp.active).to.be.equal(true);
    });
    it("Check with no parameters", function () {
        expect(() => (new PaymentPackage())).to.throw('Name must be a non-empty string');
 
    });
    it("Check with one parameter", function () {
        expect(() => (new PaymentPackage("pesho"))).to.throw('Value must be a non-negative number'); 
        expect(() => (new PaymentPackage("pesho", "pesho"))).to.throw('Value must be a non-negative number'); 
        expect(() => (new PaymentPackage("pesho", -1))).to.throw('Value must be a non-negative number'); 
        expect(() => (new PaymentPackage(1))).to.throw('Name must be a non-empty string'); 
        expect(() => (new PaymentPackage('',1))).to.throw('Name must be a non-empty string'); 
    });
    it("Check with one parameter", function () {
        expect(() => (new PaymentPackage("pesho"))).to.throw('Value must be a non-negative number'); 
    });
    it("no string name get/set", function () {
        let temp = new PaymentPackage("fee", 96);

        expect(temp.name).to.be.equal("fee");

        expect(()=> temp.name =[]).to.throw('Name must be a non-empty string');
       
    });
    it("empty string name get/set", function () {
        let temp = new PaymentPackage("fee", 96);

        expect(temp.name).to.be.equal("fee");

        expect(()=> temp.name ="").to.throw('Name must be a non-empty string');
       
    });
    it("name get/set", function () {
        let temp = new PaymentPackage("fee", 96);

        expect(temp.name).to.be.equal("fee");

        temp.name = "pesho";
        expect(temp.name).to.be.equal("pesho");     
       
    });
    it("value get/set", function () {
        let temp = new PaymentPackage("fee", 96);

        expect(temp.value).to.be.equal(96);

        temp.value = 6;
        expect(temp.value).to.be.equal(6);     
       
    });
    it("zero value get/set", function () {
        let temp = new PaymentPackage("fee", 96);      
        temp.value = 0;
        expect(temp.value).to.be.equal(0);     
       
    });    

    it("boolean active get/set", function () {
        let temp = new PaymentPackage("fee", 96);      
     
        expect(temp.active).to.be.equal(true);   
        temp.active = false;
        expect(temp.active).to.be.equal(false);         
    });  
    it("no boolean active get/set", function () {
        let temp = new PaymentPackage("fee", 96);        
        expect(temp).to.have.property("name")       
        expect(temp).to.have.property("VAT")       
        expect(temp).to.have.property("value")       
        expect(temp).to.have.property("toString")       
        expect(temp).to.have.property("active")       
    });      
    it("check all Methods", function () {
        let temp = new PaymentPackage("fee", 96);        
        expect(()=> temp.active ="pesho").to.throw('Active status must be a boolean');        
    });    

   
});
