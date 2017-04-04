import Node from './Node';

export default class CompleteMe {
  constructor () {
    this.root =  new Node(null)
    this.dictionary = []
    this.countWord;
  }

  insert (word) {
    let currentNode = this.root;
    let wordArray = word.split('')


    wordArray.forEach((letter) => {
      let newNode = new Node(letter)

      if (!currentNode.children[letter]) {
        currentNode.children[letter] = newNode
      }
      currentNode = currentNode.children[letter]
    })
    currentNode.isWord = true;
    this.count(word)
  }

  count (word) {
    this.dictionary.push(word)
    this.countWords = this.dictionary.length
  }

  findNode (word) {
    let charArray = word.split('')
    let currentChar = charArray.shift();
    let currentNode = this.root;

    while (currentNode.children[currentChar]) {

      currentNode = currentNode.children[currentChar];
      currentChar = charArray.shift()
    }
    return currentNode;

  }

  suggest () {

  }

  populate () {

  }

  select () {

  }

}
