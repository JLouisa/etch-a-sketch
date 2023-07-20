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

    // ------------- 2nd Line -------------
const secondLine = document.createElement('div');
    secondLine.classList.add('second', 'divs');
    container.appendChild(secondLine);

    let second = [];
    for(let i2 = 1; i2 <= 16; i2++) {
        first[i2] = document.createElement('div');
        first[i2].classList.add(`second${i2}`, 'square');
        secondLine.appendChild(first[i2]);}

// ------------- 3rd Line -------------
const thirdLine = document.createElement('div');
    thirdLine.classList.add('third', 'divs');
    container.appendChild(thirdLine);

    for(let i3 = 1; i3 <= 16; i3++) {
        first[i3] = document.createElement('div');
        first[i3].classList.add(`second${i3}`, 'square');
        thirdLine.appendChild(first[i3]);}

// ------------- 4th Line -------------
const fourthLine = document.createElement('div');
    fourthLine.classList.add('fourth', 'divs');
    container.appendChild(fourthLine);

    for(let i4 = 1; i4 <= 16; i4++) {
        first[i4] = document.createElement('div');
        first[i4].classList.add(`second${i4}`, 'square');
        fourthLine.appendChild(first[i4]);}