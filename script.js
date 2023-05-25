const buttonNegative = document.getElementById('optNegative');
const buttonPositive = document.getElementById('optPositive');
const myText = document.getElementById('meuTexto');

buttonNegative.addEventListener('click', (e) => {
  e.preventDefault();
  alert('Opcão não válida');
});

buttonPositive.addEventListener('click', (e) => {
  e.preventDefault();
  myText.style.display = 'block';
});