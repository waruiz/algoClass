const chai = require('chai');
const should = chai.should();

const { Queue } = require('../data-structures/queue.js');

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
