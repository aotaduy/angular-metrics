"use strict";
var index_1 = require('./index');
// chai setup
var chai = require('chai');
chai.should();
describe('Calculator', function () {
    var subject;
    beforeEach(function () {
        subject = new index_1.Calculator();
    });
    describe('add', function () {
        it('should add two numbers together', function () {
            var result = subject.add(2, 3);
            result.should.be.equal(5);
        });
    });
    describe('subtract', function () {
        it('should subtract a number from other', function () {
            var result = subject.subtract(3, 2);
            result.should.be.equal(1);
        });
    });
    describe('multiply', function () {
        it('should multiply two numbers together', function () {
            var result = subject.multiply(2, 3);
            result.should.be.equal(6);
        });
    });
    describe('divide', function () {
        it('should divide one number from other', function () {
            var result = subject.divide(3, 2);
            result.should.be.equal(1.5);
        });
    });
});
//# sourceMappingURL=index.spec.js.map