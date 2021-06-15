const data = [
  {
    puzzle: [
      ['d', 'a'],
      ['d', 'o', 'g'],
      ['b', 'i', 'r', 'd'],
      ['f', 'r', 'o', 'g', 's'],
      ['p', 'a', 'r', 'r', 'o', 't'],
    ],
    guesses: [],
    storedGuesses: {},
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

const test = ['j'];
('');
console.log(test);
console.log(test.includes('j'));

const storeGuess = () => {
  const button = document.getElementById('button');

  button.addEventListener('click', () => {
    const playerGuess = document.getElementById('guess').value;
    test.push(playerGuess);
  });
};

const parseGuess = (newWord) => {
  const guesses = data[0].guesses;
  // const storedGuesses = data[0].storedGuesses;

  const storedGuesses = { ...guesses };

  // console.log(guesses);
  // console.log(guesses);
  // console.log(guesses.join());

  // console.log(guesses);
  // console.log(storedGuesses);

  console.log(
    newWord.every((letter) => {
      return letter.match(/b|i|r|d/);
    })
  );
};

storeGuess();
parseGuess(newWord(setWord));
