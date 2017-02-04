import { Calculator } from './index';

// chai setup
const chai = require('chai');
chai.should();

describe('Calculator', () => {

  let subject;

  beforeEach(function () {
    subject = new Calculator();
  });

  describe('add', () => {
    it('should add two numbers together', () => {
      const result = subject.add(2, 3);
      result.should.be.equal(5);
    });
  });

  describe('subtract', () => {
    it('should subtract a number from other', () => {
      const result = subject.subtract(3, 2);
      result.should.be.equal(1);
    });
  });

  describe('multiply', () => {
    it('should multiply two numbers together', () => {
      const result = subject.multiply(2, 3);
      result.should.be.equal(6);
    });
  });

  describe('divide', () => {
    it('should divide one number from other', () => {
      const result = subject.divide(3, 2);
      result.should.be.equal(1.5);
    });
  });

});