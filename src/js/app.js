import { testObject } from './test.js';

const data = [
  {
    puzzle: [
      ['d', 'o', 'g'],
      ['f', 'u', 'd', 'g', 'e'],
      ['s', 'n', 'o', 'w'],
      ['i', 'a', 'n'],
      ['b', 'i', 'r', 'd'],
      ['f', 'r', 'o', 'g', 's'],
      ['p', 'a', 'r', 'r', 'o', 't'],
    ],
  },
];

const startGame = () => {
  const gameWord = newWord(setWord);

  getGuess(gameWord);
};

const newWord = (setWord) => {
  let words = Math.floor(Math.random() * data[0].puzzle.length);
  const selectedWord = data[0].puzzle[words];

  selectedWord.forEach((letter) => {
    setWord(hiddenLetter(letter));
  });

  return selectedWord;
};

// word borders only
const setWord = (setLetter) => {
  const paragraph = document.createElement('p');

  paragraph.appendChild(setLetter);
  document.getElementById('words').appendChild(paragraph);

  const paraClass = document.createAttribute('class');
  paraClass.value = 'border-bottom border-primary lineUp';
  paragraph.setAttributeNode(paraClass);
};

const hiddenLetter = (letter) => {
  const setLetter = document.createTextNode(letter);
  const span = document.createElement('span');
  const hiddenClass = document.createAttribute('class');

  hiddenClass.value = 'd-none';
  span.setAttributeNode(hiddenClass);

  span.appendChild(setLetter);

  return span;
};

const getGuess = (gameWord) => {
  const button = document.getElementById('button');

  button.addEventListener('click', () => {
    const playerGuess = document.getElementById('guess').value;

    guessToRegEx(playerGuess, gameWord);
  });
};

const guessToRegEx = (guess, gameWord) => {
  const RegExGuess = new RegExp(guess);

  parseGuess(RegExGuess, gameWord, guess);
};

const parseGuess = (RegExGuess, gameWord, guess) => {
  const word = gameWord.toString();

  const result = RegExGuess.test(word);

  result ? rightGuess(gameWord, guess) : wrongGuess();
};

const rightGuess = (gameWord, guess) => {
  const span = document.getElementsByTagName('span');
  const spanArray = [...span];

  gameWord.forEach((letter) => {
    if (letter === guess) {
      spanArray.forEach((letter) => {
        const setLetter = letter.textContent;

        if (setLetter === guess) {
          letter.classList.remove('d-none');
        }
      });
    }
  });

  winner(spanArray);
};

const wrongGuess = () => {
  const head = document.getElementById('head');
  const body = document.getElementById('body');
  const lHand = document.getElementById('lHand');
  const rHand = document.getElementById('rHand');
  const lLeg = document.getElementById('lLeg');
  const rLeg = document.getElementById('rLeg');

  countGuesses--;

  if (countGuesses === 8) {
    head.classList.remove('headOverlay');
  } else if (countGuesses === 6) {
    body.classList.remove('bodyOverlay');
  } else if (countGuesses === 4) {
    lHand.classList.remove('lHandOverlay');
    rHand.classList.remove('rHandOverlay');
  } else if (countGuesses === 2) {
    lLeg.classList.remove('lLegOverlay');
  } else if (countGuesses === 0) {
    rLeg.classList.remove('rLegOverlay');
    gameOver();
  }

  countGuess(countGuesses);
};

const winner = (word) => {
  const printWon = document.querySelector('.guessWord');
  const title = document.createElement('h1');
  const winnerClass = document.createAttribute('class');

  winnerClass.value = 'word';
  title.setAttributeNode(winnerClass);

  const won = word.every((letter) => {
    return letter.className !== 'd-none';
  });

  if (won) {
    title.innerHTML = 'WINNER';
    printWon.appendChild(title);
  }
};

const gameOver = () => {
  const printLost = document.querySelector('.guessWord');
  const title = document.createElement('h1');
  const loserClass = document.createAttribute('class');

  loserClass.value = 'word';
  title.setAttributeNode(loserClass);

  title.innerHTML = 'GAME OVER';
  printLost.appendChild(title);
};

const countGuess = (count = 10) => {
  const guessesLeft = document.querySelector('#guessAmount');
  guessesLeft.innerHTML = count;

  return count;
};

let countGuesses = countGuess();
startGame();
