import {assert} from 'chai';
// import Node from '../scripts/Node';
import CompleteMe from '../scripts/CompleteMe';
// import locus from 'locus';

describe('Complete Me test', () => {
  let completeMe = new CompleteMe()

  it('Should have a class of CompleteMe', () => {

    assert.isFunction(CompleteMe)
  })

  it('Should istantiate a new Node that is equal to null', () => {

    assert.equal(completeMe.root.letter, null)
  })

  it('Should have a dictionary that is assigned an empty array', () => {

    assert.deepEqual(completeMe.dictionary, [])
  })

  it('Should return true when word is complete', () => {
    completeMe.insert('hat')
    assert.equal(
      completeMe.root.children
      .h.children
      .a.children
      .t.isWord, true
    )
  })

  it('Should count the number of words in the dictionary', () => {
    completeMe.insert('bat')
    completeMe.insert('cat')
    assert.deepEqual(completeMe.countWords, completeMe.dictionary.length)
  })

  it('Should find a node', () => {
    completeMe.insert('pig')
    let foundNode = completeMe.findNode('pig')
    
    assert.equal(foundNode.letter, 'g')
  })

})
