export const testObject = (object) => {
  const word = document.getElementById('words');
  const test = document.getElementById('buttonTwo');

  test.addEventListener('click', () => {
    word.innerHTML = object;
  });
};
