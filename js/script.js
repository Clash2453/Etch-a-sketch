const squares = document.getElementById('amount-slider');
const canvas = document.getElementById('pixel-container');
const picker = document.getElementById('color_picker');
let color = picker.value;

picker.addEventListener('input', function(){
    color =  this.value;
});

function clearCanvas(e){
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
        pixel.addEventListener('mouseover', function(e){
            if(e.buttons ===1 || e.buttons === 3)
                this.style.backgroundColor = color; 
        });
        canvas.appendChild(pixel);
    }
}