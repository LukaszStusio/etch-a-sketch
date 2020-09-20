// select elements on the page - canvas & shake button:
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakebutton = document.querySelector('.shake');
// when const is permamently const some devs use uppercase and underscore for better distinction in later code
const MOVE_AMOUNT = 10;

// const width = canvas.width;
// const height = canvas.height;
// destructuring above to:
const {width, height} = canvas;
console.log(width, height);

// create random x & y starting points on canvas:
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

// setup our canvas for drawing:
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;
let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();


// write a draw function: destructuring again an object in: function draw(options) to key variable
function draw({key}) {
    // increment the hue value:
    hue += 1;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    console.log(key);
// start the path
    ctx.beginPath();
    ctx.moveTo(x, y);
// move our x & y values depending on what the user just did:
    switch (key) {
        case 'ArrowUp':
            y -= MOVE_AMOUNT;
            // above - shorthand to: y - MOVE_AMOUNT
            break;
        case 'ArrowRight':
            x += MOVE_AMOUNT;
            break;
        case 'ArrowDown':
            y += MOVE_AMOUNT;
            break;
        case 'ArrowLeft':
            x -= MOVE_AMOUNT;
            break;
        default:
            break;
    }
    ctx.lineTo(x, y);
    ctx.stroke();

};

// write a handler for the arrow keys:
function handleKey(e) {
    if(e.key.includes('Arrow')) {
        e.preventDefault();
        draw({key: e.key});
        // console.log(e.key)
        // console.log('handling key');

    };
};

// clear / shake function:
// listen for arrow keys:
window.addEventListener('keydown', handleKey);