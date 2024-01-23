const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const colorBox = document.querySelector('.color-box');
const generateBtn = document.getElementById('generate-btn');

generateBtn.addEventListener('click', () => {
  const gradient = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
  colorBox.style.background = gradient;
});
