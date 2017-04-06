import {assert} from 'chai';
import CompleteMe from '../scripts/CompleteMe';
const fs = require('fs');

require('locus');

describe('CompleteMe test', () => {
  let completeMe = new CompleteMe()

  it('should have a class of CompleteMe', () => {

    assert.isFunction(CompleteMe)
  })

  it('should istantiate a new Node that is equal to null', () => {

    assert.equal(completeMe.root.letter, null)
  })

  it('should allow me to insert nodes and return true at end of word', () => {
    completeMe.insert('pass')

    assert.equal(
      completeMe.root.children
      .p.children
      .a.children
      .s.children
      .s.isWord, true
    )
  })

  it('should count the number nodes', () => {
    completeMe.insert('past')
    completeMe.insert('pastor')
    assert.equal(completeMe.count, 3)
  })

  it('should return children nodes that are words', () => {
    completeMe.insert('dog')
    completeMe.insert('dogged')

    let suggestion1 = completeMe.suggest('do');
    let suggestion2 = completeMe.suggest('pas');

    assert.deepEqual(suggestion1, ['dog', 'dogged'])
    assert.deepEqual(suggestion2, ['pass', 'past', 'pastor'])
  })

  it('should find a node', () => {
    completeMe.insert('pig')
    completeMe.insert('tomato')

    let foundNode1 = completeMe.findNode('pig')
    let foundNode2 = completeMe.findNode('tom')

    assert.equal(foundNode1.letter, 'g')
    assert.equal(foundNode2.letter, 'm')
  })

  // it('should select a word from recommendations array', () => {
  //   completeMe.select('do', 'dogged')
  //
  //   assert.deepEqual()
  // })

})

describe('Dictionary test', () => {
  let completeMe = new CompleteMe()
  const text = '/usr/share/dict/words';
  let array = fs.readFileSync(text).toString().trim().split('\n');

  it('should populate a dictionary', () => {
    completeMe.populate(array);
    assert.deepEqual(completeMe.count, 235886);
  });

  it('should suggest words from dictionary', () => {

    completeMe.populate(array);

    let suggestion = completeMe.suggest("piz")

    assert.deepEqual(suggestion, ["pize", "pizza", "pizzeria", "pizzicato", "pizzle"])
  })


})
