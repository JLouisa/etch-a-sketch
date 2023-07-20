// Create 16x16 squares

const container = document.querySelector('.middle');

let divs = []
for(n = 1; n <= 16; n++) {
    divs[n] = document.createElement('div');
    divs[n].classList.add(`head${n}`, 'divs');
    container.appendChild(divs[n]);

        let square = [];
        for(let i = 1; i <= 16; i++) {
            square[i] = document.createElement('div');
            square[i].classList.add(`row${n}col${i}`, 'square');
            divs[n].appendChild(square[i]);}
}

// Create hover effect
const sketch = document.querySelectorAll('.square');
sketch.forEach(square => square.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "gold";}
  ));