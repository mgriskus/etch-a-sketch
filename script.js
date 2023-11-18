const grid = document.querySelector('.grid');

for (let i = 0; i < 16**2; ++i) {
  let square = document.createElement('div');
  square.classList += 'square';
  grid.append(square);
}

let colorSqaure = (e) => {
  e.target.style.backgroundColor = 'black';
}
grid.addEventListener('mouseover', colorSqaure);
