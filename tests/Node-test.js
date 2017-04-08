import {assert} from 'chai';
import Node from '../scripts/Node';

describe('Node test', () => {
  var node = new Node('p')

  it('should have a class of node', () => {

    assert.isFunction(Node)
  })

  it('should have a letter', () => {

    assert.equal(node.letter, 'p')
  })

  it('should have isWord with a default of false', () => {

    assert.equal(node.isWord, false)
  })

  it('should determine number of times node is selected with a default of 0', () => {
    assert.equal(node.timesSelected, 0)
  })

})
