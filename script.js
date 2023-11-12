const grid = document.querySelector('.grid');

for (let i = 0; i < 16**2; ++i) {
  let square = document.createElement('div');
  square.classList += 'square';
  grid.append(square);
}

let mouseDown = false;

window.addEventListener('mousedown', () => mouseDown = true);
window.addEventListener('mouseup', () => mouseDown = false);

let colorSqaure = (e) => {
  if (mouseDown) e.target.style.backgroundColor = 'black';
}
grid.addEventListener('mouseover', colorSqaure);
