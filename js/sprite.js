let canvas;  //HTML canvas element
let ctx; //variable 2d context for drawing
const sWidth = 184; //width of the sprite sheet divided by the number of sprites
const sHeight = 325; // height of the sprite sheet
let nStartX = 0; //x axis position of slice starting
let canvasInterval;  //variable that stores setInterval method

const spriteImg = new Image();

window.onload = function() {
    canvas = document.getElementById('drawing-animation');  //getting canvas element and setting its width and height properties
    canvas.width = sWidth;
    canvas.height = sHeight;

    ctx = canvas.getContext('2d'); //creating context for drawing

    spriteImg.src = './images/sprite.png'; //setting sprite image

    spriteImg.onload = function() { //after the sprite sheet is loaded one of the sprite's states is drawn
        drawSprite();               //with drawSprite() function every 100ths of a second

        canvasInterval = setInterval( function() {
            nStartX += sWidth;

            if (nStartX >= 1472) {
                nStartX = 0;
            }
            drawSprite();

        }, 100);
    }
}

function drawSprite() { //draws one of the states of the sprite
    ctx.clearRect(0, 0, sWidth, sHeight);

    ctx.beginPath();

    ctx.moveTo(0,0);
    ctx.drawImage(spriteImg, nStartX, 0, sWidth, sHeight, 0, 0, sWidth, sHeight);

    ctx.closePath();
}