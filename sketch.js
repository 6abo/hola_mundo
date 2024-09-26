function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(50);
    background(0);
    rectMode(CENTER);
}

function draw() {
    background(20, random(0, 100), 255, 10); // Mantiene algo de transparencia

    // Dibujar el círculo
    strokeWeight(5);
    stroke(mouseY, 255, 0);
    fill(0, 20, 200); 
    circle(mouseX + 80, mouseY, mouseX);

    // Dibujar el rectángulo
    strokeWeight(5);
    stroke(0, 255, 0);
    fill(100, 200, 20);
    rect(mouseX, mouseY, 100, 100);
}