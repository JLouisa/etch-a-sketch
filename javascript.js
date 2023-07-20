const container = document.querySelector('.middle');

// ------------- 1st Line -------------
const firstLine = document.createElement('div');
    firstLine.classList.add('first', 'divs');
    container.appendChild(firstLine);

    let first = [];
    for(let i1 = 1; i1 <= 16; i1++) {
        first[i1] = document.createElement('div');
        first[i1].classList.add(`first${i1}`, 'square');
        firstLine.appendChild(first[i1]);}