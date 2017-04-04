import {assert} from 'chai';
import Node from '../scripts/Node';

describe('Node test', () => {
  var node = new Node('p')

  it('Should have a class of node', () => {

    assert.isFunction(Node)
  })

  it('Should have a letter', () => {

    assert.equal(node.letter, 'p')
  })

  it('Should have isWord with a default of false', () => {

    assert.equal(node.isWord, false)
  })

})
