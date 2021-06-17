import { testObject } from './test.js';

const data = [
  {
    puzzle: [
      // ['d', 'a'],
      ['d', 'o', 'g'],
      ['b', 'i', 'r', 'd'],
      // ['f', 'r', 'o', 'g', 's'],
      // ['p', 'a', 'r', 'r', 'o', 't'],
    ],
    guesses: [],
  },
];

const newWord = (setWord) => {
  let words = Math.floor(Math.random() * data[0].puzzle.length);
  const selectedWord = data[0].puzzle[words];

  selectedWord.forEach(() => {
    setWord();
  });

  return selectedWord;
};

const setWord = () => {
  const paragraph = document.createElement('p');

  document.getElementById('words').appendChild(paragraph);

  const paraClass = document.createAttribute('class');
  paraClass.value = 'border-bottom border-primary lineUp';
  paragraph.setAttributeNode(paraClass);
};

const getGuess = () => {
  const button = document.getElementById('button');

  button.addEventListener('click', () => {
    const playerGuess = document.getElementById('guess').value;

    toRegEx(playerGuess, gameWord);
  });
};

const toRegEx = (guess, gameWord) => {
  const RegExGuess = new RegExp(guess);

  parseGuess(RegExGuess, gameWord);
};

const parseGuess = (RegExGuess, gameWord) => {
  const word = gameWord.toString();

  const result = RegExGuess.test(word);

  testObject(result);
};

const gameWord = newWord(setWord);
getGuess();
