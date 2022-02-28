const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const body = document.querySelector('body');
body.style.margin = 0;
const c = canvas.getContext('2d');

class Circle {
    constructor(x, y, dx, dy, radius){
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.color = Math.floor(Math.random()*16777215).
        toString(16);
}
draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false );
        c.fillStyle = `#${this.color}`;
        c.fill();
        c.strokeStyle = `#${this.color}`;
        c.stroke();
    }
update() {
        if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
            this.dx = -this.dx
        }
        if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
            this.dy = -this.dy
        }
this.x += this.dx;
        this.y += this.dy;
this.draw()
    }
}
const circleArray = [];
for(let i = 0; i < 100; i++){
    let radius = Math.random() * 50
    let x = Math.random() * (innerWidth - radius * 2) + radius;
    let dx = (Math.random() - 1.5) * 5
    let y = Math.random() * (innerHeight - radius * 2) + radius;
    let dy = (Math.random() - 1.5) * 5
circleArray.push(new Circle(x, y, dx, dy, radius))
}
const animate = () => {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight)
for(let i = 0; i < circleArray.length; i++){
        circleArray[i].update()
    }
}
animate()