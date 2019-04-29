// Ellipse
var ellipseX = 320;
var ellipseY = 180;
var speedX = 5;
var speedY = 2;
var ellipseRadius = 50;

// Rect
var rectX =200;
var rectY =360;
var rectSpeedX =5;
var rectSpeedY =2;
var rectRadius =30;

// Star
var starX = 500;
var StarY = 200;
var starSpeedX =5;
var starspeedY =2;
var starRadius =90;

function setup() {
    createCanvas(800, 800)
    background('black')
}

function draw() {

    textSize(30)
    text('Click and Hold for fun', 100, 100) 
    text('Use Arrows', 100, 150) 
    
    if(frameCount % 40 == 0) {
        
        var r = random(200, 255);
        var g = random(200, 255);
        var b = random(200, 255);
    }
    
    // Ellipse
    noStroke();
    fill(r, g, b);
    ellipse(ellipseX, ellipseY, ellipseRadius * 1, ellipseRadius * 1);
    ellipseX += speedX;
    ellipseY += speedY;
    
    if(ellipseX > width - ellipseRadius || ellipseX < ellipseRadius) {
        speedX = -speedX
    }
    
    if(ellipseY > height - ellipseRadius || ellipseY < ellipseRadius){
        speedY = -speedY
    }

    
    // 2nd Ellipse

    if(mouseIsPressed) {
        background(25, 25,25 , 100)
        fill(r, g, b);
        ellipse(mouseX, mouseY, 50, 50);
    }
    
    
    // Rect
    noStroke();
    fill(r, g, b);
    rect(rectX, rectY, rectRadius * 2, rectRadius * 2);
    
    if(keyCode == RIGHT_ARROW) {
        rectX += 5;
        rectRadius += 1;
        
    } else if(keyCode == LEFT_ARROW) {
        rectX -= 5;
        rectRadius -= 1;
        
    } else if(keyCode == UP_ARROW) {
        rectY -= 5;
        rectRadius -= 1;
        
    } else if(keyCode == DOWN_ARROW) {
        rectY += 5;
        rectRadius += 1;
    }
    
}
