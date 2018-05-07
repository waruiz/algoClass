const chai = require('chai');
const should = chai.should();

const { Stack, sortStack } = require('../data-structures/stack.js');

describe('Stack data structure', function () {
  before(function () {
    myStack = new Stack();
  });
  it('should instantiate a new stack', function () {
    myStack.should.be.an('object');
  });
  it('should return a count zero when empty', function () {
    myStack.count().should.equal(0);
  });
  it('should increment count after adding new item to stack', function () {
    myStack.push('whale');
    myStack.count().should.equal(1);
  });
  it('should show most recently added item', function () {
    myStack.push('tucan');
    myStack.peek().should.equal('tucan');
  });
  it('should show count until a searched item can be popped off', function () {
    myStack.push('pelican');
    myStack.until('whale').should.equal(2);
  });
  it('should return false when an item is not in the stack', function () {
    myStack.contains('baby').should.equal(false);
  });
  it('should return true when an item is in the stack', function () {
    myStack.contains('pelican').should.equal(true);
  });
  it('should be count zero when all items have been popped off', function () {
    myStack.pop();
    myStack.pop();
    myStack.pop();
    myStack.count().should.equal(0);
  });
  it('should be count zero when pop called more times than stack contains', function () {
    myStack.pop();
    myStack.pop();
    myStack.count().should.equal(0);
  });
});

describe('A stack that contains integers', () => {
  before(() => {
    numStack = new Stack();
  });
  it('should reveal minimum value', function () {
    numStack.push(10);
    numStack.push(2);
    numStack.push(34);
    numStack.push(17);
    numStack.push(4);
    numStack.min().should.equal(2);
    numStack.push(-7);
    numStack.min().should.equal(-7);
  });
  it('should sort an unsorted object', function () {
    sortStack(numStack).storage.should.eql({1: -7, 2: 2, 3: 4, 4: 10, 5: 17, 6: 34});
  });
});