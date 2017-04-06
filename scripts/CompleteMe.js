import Node from './Node';
require ('locus');

export default class CompleteMe {
  constructor () {
    this.root =  new Node(null)
    this.count = 0;
  }


  insert (word) {
    let wordArray = word.split('')
    let currentNode = this.root;

    wordArray.forEach( letter => {
      let newNode = new Node(letter)

      if (!currentNode.children[letter]) {
        currentNode.children[letter] = newNode
      }

      currentNode = currentNode.children[letter]
    })
    currentNode.isWord = true;
    this.count++
  }


  count () {
    return this.count;
  }


  suggest (input) {
    let suggestions = [];

    return this.getWord(this.findNode(input), input, suggestions)
  }


  getWord (currentNode, input, suggestions) {
    if (currentNode.isWord) {
      suggestions.push(input);
    }
    let nodeKeys = Object.keys(currentNode.children)

    nodeKeys.forEach( key => {
      let nextNode = currentNode.children[key];

      this.getWord(nextNode, input + key, suggestions)
    })
    return suggestions
  }


  findNode (word) {
    let currentNode = this.root;
    let charArray = word.split('')
    let currentChar = charArray.shift();

    while (currentNode.children[currentChar]) {

      currentNode = currentNode.children[currentChar];
      currentChar = charArray.shift()
    }
    return currentNode;
  }


  populate (array) {
    array.forEach((word) => {
      this.insert(word);
    });

  }


  // select (prefix, word) {
  //   // need to get suggestions => []
  //   let suggestions = this.suggest(prefix)
  //   // find word in suggestions array => 'string'
  //   suggestions.find( word => {
  //     currentNode.children ===
  //   })
  //   // findNode('string') => object
  //   // object.counter ++
  // }

}
