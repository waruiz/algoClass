const chai = require('chai');
const should = chai.should();

const { Queue, TwoStackQueue } = require('../data-structures/queue.js');

describe('Queue data structure', function () {
  before('should instantiate a new queue', function () {
    myQueue = new Queue();
  });
  it('should enqueue items', function () {
    myQueue.enqueue('a');
    myQueue.peek().should.equal('a');
    myQueue.enqueue('b');
    myQueue.enqueue('c');
    myQueue.count().should.equal(3);
  });
  it('should dequeue items', function () {
    myQueue.dequeue();
    myQueue.peek().should.equal('b');
  });
});

describe('TwoStackQueue data structure', function () {
  before('should instantiate a new two-stack queue', function () {
    myTwoStackQueue = new TwoStackQueue();
  });
  it('should contain an empty two-stack queue', function () {
    myTwoStackQueue.count().should.equal(0);
  });
  it('should add items to two-stack queue', function () {
    myTwoStackQueue.enqueue(1);
    myTwoStackQueue.enqueue(2);
    myTwoStackQueue.enqueue(3);
    myTwoStackQueue.count().should.equal(3);
    myTwoStackQueue.peek().should.equal(1);
  });
  it('should remove the first item from the two-stack queue', function () {
    myTwoStackQueue.dequeue().should.equal(1);
    myTwoStackQueue.dequeue().should.equal(2);
    myTwoStackQueue.enqueue(4);
    myTwoStackQueue.enqueue(5);
    myTwoStackQueue.dequeue().should.equal(3);
    myTwoStackQueue.peek().should.equal(4);
    myTwoStackQueue.count().should.equal(2);
  });
});
