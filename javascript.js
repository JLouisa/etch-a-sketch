// Create 16x16 squares
const container = document.querySelector('.middle');

//Add button container
const btnContainer = document.createElement('div');
    btnContainer.classList.add('btnContainer');

// Add button for prompt grid
const body = document.querySelector('body');
const web = document.querySelector('.web');
const btn = document.createElement('button');
    btn.classList.add('resize');
    btn.textContent = "Grid Resize";
    btn.setAttribute('style', 'padding: 10px; font-size: 20px; margin-left: 35px;');
    body.insertBefore(btnContainer, web);
    btnContainer.appendChild(btn);

let grid = 16;

let divs = [];
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
const greenColor = document.querySelectorAll('.square');
greenColor.forEach(square => square.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = 'green';}
  ));

// Adjust Padding for square
const test = document.querySelectorAll('.square');
test.forEach(square => square.setAttribute('style', `padding: ${(400-grid)/grid}px;`));

//Click Button
btn.addEventListener('click', (grid2) => {
    grid2 = +(prompt("What length and width do you want the gird?", 16));

    if(grid2 > 100) {grid2 = 100};
    if(grid2 == '' || grid2 < 1) {grid2 = 16};

    let web = document.querySelector('.web');
        middle = document.querySelector('.middle');
        web.removeChild(middle);
    let middle2 = document.createElement('section');
    let right = document.querySelector('.right');
        middle2.classList.add('middle', 'side');
        web.insertBefore(middle2, right);

//Create new grid
let divs2 = [];
for(n2 = 1; n2 <= grid2; n2++) {
    divs2[n2] = document.createElement('div');
    divs2[n2].classList.add(`head${n2}`, 'divs');
    middle2.appendChild(divs2[n2]);

        let square2 = [];
        for(let i2 = 1; i2 <= grid2; i2++) {
            square2[i2] = document.createElement('div');
            square2[i2].classList.add(`row${n}col${i2}`, 'square');
            divs2[n2].appendChild(square2[i2]);}
}

// Create hover effect
const sketch2 = document.querySelectorAll('.square');
sketch2.forEach(square => square.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = 'green';}
  ));

const squareBlack2 = document.querySelectorAll('.square');
    btnBlack.addEventListener('click', () => {
        squareBlack2.forEach(square => square.addEventListener("mouseover", (event2) => {
            event2.target.style.backgroundColor = `rgba(0, 0, 0, 0.900)`;}
          ));
    })

const rgbColor2 = document.querySelectorAll('.square');
    btnRGB.addEventListener('click', () => {
        rgbColor2.forEach(square => square.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = `rgb(${rgb()},${rgb()}, ${rgb()})`;}
    ))});

const greenColor2 = document.querySelectorAll('.square');
    btnGreen.addEventListener('click', () => {
        greenColor2.forEach(square => square.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = 'green';}
      ))});

// Adjust Padding for square
const squareSize = document.querySelectorAll('.square');
squareSize.forEach(square => square.setAttribute('style', `padding: ${(400-grid2)/grid2}px;`));

});

//Random
function rgb() {
    let calcRGB = Math.random().toFixed(2)*255;
    let calcRGB2 = calcRGB.toFixed(0);
    return calcRGB2;
}


//Multiple buttons for colors
const btnBlack = document.createElement('button');
    btnBlack.classList.add('black');
    btnBlack.textContent = "Black Color";
    btnBlack.setAttribute('style', 'padding: 10px; font-size: 20px; margin-left: 35px;');
    btnContainer.appendChild(btnBlack);

    const squareBlack = document.querySelectorAll('.square');
    btnBlack.addEventListener('click', () => {
        squareBlack.forEach(square => square.addEventListener("mouseover", (event2) => {
            event2.target.style.backgroundColor = `rgba(0, 0, 0, 0.900)`;}
          ));
    })

const btnRGB = document.createElement('button');
    btnRGB.classList.add('rbg');
    btnRGB.textContent = "RGB Colors";
    btnRGB.setAttribute('style', 'padding: 10px; font-size: 20px; margin-left: 35px;');
    btnContainer.appendChild(btnRGB);

    const rgbColor = document.querySelectorAll('.square');
    btnRGB.addEventListener('click', () => {
        rgbColor.forEach(square => square.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = `rgb(${rgb()},${rgb()}, ${rgb()})`;}
    ))});

const btnGreen = document.createElement('button');
    btnGreen.classList.add('green');
    btnGreen.textContent = "Green Color";
    btnGreen.setAttribute('style', 'padding: 10px; font-size: 20px; margin-left: 35px;');
    btnContainer.appendChild(btnGreen);

    btnGreen.addEventListener('click', () => {
        greenColor.forEach(square => square.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = 'green';}
      ))});