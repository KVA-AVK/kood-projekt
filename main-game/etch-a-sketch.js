console.log("Connected!"); 

// SELECT THE ELEMENTS ON THE PAGE -Canvas, SHAKE
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakeButton = document.querySelector(`.shake`);
const moveAmmount = 10;
let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)` //GET THIS FROM MOTHER-EFFINGHSL.COM
// SETUP OUR CANVAS FOR DRAWING
// -- MAKE A VARIABLE CALLED HEIGHT AND WIDTH FROM THE SAME PROPERTIES ON OUR CANVAS
const { width, height} = canvas;
// -- CREATE RANDOM X AND Y COORDINATES
let x = Math.floor(Math.random()* (width/2));
let y = Math.floor(Math.random()* (width/2));
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;
ctx.beginPath(); //STARTS THE DRAWING (PUTS PEN ON PAPER)
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke(); 

// WRITE  DRAW Function
function draw({key}) {
        //INCREMENT THE HUE
        hue += 10
        ctx.strokeStyle = `hsl(${hue}, 100%, 50%)` //GET THIS FROM MOTHER-EFFINGHSL.COM
        //START THE PATH
        ctx.beginPath();
        ctx.moveTo(x, y);
        //MOVE OUR X & Y VALUES DEPENDING ON WHAT THE USER PRESSED
        switch(key){
                default: 
                        break;
                case 'ArrowUp':
                        y -= moveAmmount;
                        break;
                case 'ArrowRight':
                        x += moveAmmount;
                        break;
                case 'ArrowDown':
                        y += moveAmmount;
                        break;
                case 'ArrowLeft':
                        x -= moveAmmount;
                        break;
        }
        ctx.lineTo(x,y);
        ctx.stroke();
};
// WRITE A HANDLER FOR THE ARROW KEYS
function handlekey (event) {
        if(event.key.includes('Arrow')) {
                event.preventDefault();
                draw({key: event.key});
        };
}
// CLEAR "SHAKE" Function
function clearCanvas () {
        canvas.classList.add('shake');
        ctx.clearRect(0, 0, width, height);
        console.log(`done the shake`);
        canvas.addEventListener('animationend',
                 ()=> {
                canvas.classList.remove('shake');
                },
                {once: true} // auto removes the listener when it's done
        );
}
// LISTEN FOR ARROW KEYS
window.addEventListener('keydown', handlekey);
shakeButton.addEventListener('click', clearCanvas);