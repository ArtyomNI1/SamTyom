const carusel = document.getElementById("carusel");

let position = 0

const goRight = () => {
    if(position == 3000) {
        position = 0;
        carusel.style.right = 0;
        return;
    }
    position += 1000
    carusel.style.right = `${position}px`

};
const goLeft = () => {
    if(position == 0) {
        position = 3000;
        carusel.style.right = "300px";
        return;
    }
    position -= 1000
    carusel.style.right = `${position}px`

};