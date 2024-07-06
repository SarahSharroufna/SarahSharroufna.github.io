// Setup canvas
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// Function to generate random number
function random(min, max) {
  let num = 0;
  while (num === 0) {
    num = Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return num;
}

// Function to generate random color
function randomRGB() {
  return `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
}

// Define Circle class
class Circle {
  constructor(x, y, velX, color, number,result) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.color = color;
    this.number = number; 
    this.result = result;
    this.radius = 50; 
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = 'white';
    ctx.font = '24px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(this.number.toString(), this.x, this.y);
  }

  update() {
    this.x += this.velX;
    if (this.x + this.radius < 0) {
      this.x = width + this.radius;
    } else if (this.x - this.radius > width) {
      this.x = -this.radius;
    }
  }
   // Check if the circle is clicked
   isClicked(mouseX, mouseY) {
    const dx = mouseX - this.x;
    const dy = mouseY - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    // Check if the distance is within the circle's radius
    return distance <= this.radius;
  }
}

//Array of circles
const circles = [];
const values = ["8-8", "76^0", "\u221A4", "10 % 7","5+5-6", "4+145^0","42/7","\u221A25+2","2^3","4*2+1"];
const numCircles = 10;

// Initialize circles with numbers and random properties
for (let i = 0; i < numCircles; i++) {
  const x = random(0 + 30, width - 30);
  const y = random(0 + 30, height - 30);
  const velX = random(-3, 3); 
  const color = randomRGB();
  const number = `${values[i]}`; 
  const result = i;

  circles.push(new Circle(x, y, velX, color, number, result));
}

let numberOfCirclesClicked = 0;

// Track mouse click event
canvas.addEventListener('mousedown', function(event) {
  const rect = canvas.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;


  circles.forEach(circle => {
    if (circle.isClicked(mouseX, mouseY))
    {
      console.log("circle clicked: ", circle.number);
      document.getElementById(numberOfCirclesClicked).textContent = circle.result;
      if (numberOfCirclesClicked == 9) {
        numberOfCirclesClicked = 0;
      } else {
        numberOfCirclesClicked ++;
      }
      console.log("numberOfCirclesClicked: ", numberOfCirclesClicked);
      return;
    }
  });
});

// Animation loop
function animate() {
  ctx.clearRect(0, 0, width, height);

  circles.forEach(circle => {
    circle.draw();
    circle.update();
  });

  requestAnimationFrame(animate);
}
// Start the loop
animate();


