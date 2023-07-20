// Create 16x16 squares
const container = document.querySelector('.middle');

// Add button for prompt grid
const body = document.querySelector('body');
const web = document.querySelector('.web');
const btn = document.createElement('button');
    btn.classList.add('resize');
    btn.textContent = "Grid Size";
    btn.setAttribute('style', 'padding: 10px; font-size: 20px; margin-left: 40px;');
    body.insertBefore(btn, web);

let grid = 2

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

//Click Button
btn.addEventListener('click', () => {
    alert("Nice isn't it?");
    let web = document.querySelector('.web');
        middle = document.querySelector('.middle');
        web.removeChild(middle);
    let middle2 = document.createElement('section');
    let right = document.querySelector('.right');
        middle2.classList.add('middle', 'side');
        web.insertBefore(middle2, right);
});


//instead of removing individual elements, why not remove the whole parentnode and readd it.

// row1col1 square