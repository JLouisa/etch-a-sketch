const container = document.querySelector('.middle');

let divs = []
for(n = 1; n <= 16; n++) {
    divs[n] = document.createElement('div');
    divs[n].classList.add(`head${n}`, 'divs');
    container.appendChild(divs[n]);

        let first = [];
        for(let i = 1; i <= 16; i++) {
            first[i] = document.createElement('div');
            first[i].classList.add(`first${i}`, 'square');
            divs[n].appendChild(first[i]);}
}