const container = document.querySelector('.middle');

let divs = []
for(n = 1; n <= 16; n++) {
    divs[n] = document.createElement('div');
    divs[n].classList.add(`head${n}`, 'divs');
    container.appendChild(divs[n]);

        let first = [];
        for(let i1 = 1; i1 <= 16; i1++) {
            first[i1] = document.createElement('div');
            first[i1].classList.add(`first${i1}`, 'square');
            divs[n].appendChild(first[i1]);}
}