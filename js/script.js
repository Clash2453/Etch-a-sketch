const squares = document.getElementById('amount-slider');
const canvas = document.getElementById('pixel-container');
function clearCanvas(){
    while(canvas.firstChild){
        canvas.removeChild(canvas.firstChild)
    }
}
clearCanvas();
function populateCanvas(){
    if(canvas.childNodes.length !== 0){
        return;
    }
    for (let i = 0; i < Math.pow(squares.value, 2); i++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.style.width = `${100/squares.value}%`;
        pixel.style.height = `${100/squares.value}%`;
        canvas.appendChild(pixel);
    }
}


