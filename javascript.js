// Create 16x16 squares

const container = document.querySelector('.middle');

let grid = 100

let divs = []
for(n = 1; n <= grid; n++) {
    divs[n] = document.createElement('div');
    divs[n].classList.add(`head${n}`, 'divs');
    container.appendChild(divs[n]);

        let square = [];
        for(let i = 1; i <= grid; i++) {
            square[i] = document.createElement('div');
            square[i].classList.add(`row${n}col${i}`, 'square');
            divs[n].appendChild(square[i]);}
}

// Create hover effect
const sketch = document.querySelectorAll('.square');
sketch.forEach(square => square.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "green";}
  ));

// Adjust Padding for square
const test = document.querySelectorAll('.square');
test.forEach(square => square.setAttribute('style', `padding: ${(800-grid)/grid}px;`));

// Add button for prompt grid
const body = document.querySelector('body');
const web = document.querySelector('.web');
const btn = document.createElement('button');
    btn.classList.add('resize');
    btn.textContent = "Grid Size";
    btn.setAttribute('style', 'padding: 10px; font-size: 20px; margin-left: 40px;');
    body.insertBefore(btn, web);