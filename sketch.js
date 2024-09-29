function setup() {
    //Crea un lienzo del tamaño de la ventana del navegador (ajustando el ancho y el alto a las dimensiones actuales de la pantalla).
    createCanvas(windowWidth, windowHeight);
    frameRate(60); // Cuadors por segundo
    rectMode(CENTER); //Cambia el modo de dibujo de los rectángulos para que se dibujen desde su centro en lugar de desde una esquina.
}

function draw() {
    // Crear un fondo con una transparencia ligera
    background(0, 0, 30, 20); 
    
    // Círculo dinámico
    let circulo = map(mouseX, 0, width, 50, 300); // Tamaño varía con el mouseX
    noStroke();
    fill(50, 300, random(25, 300), 150); // Color dinámico con transparencia
    circle(mouseX, mouseY, circulo);

    // Rectángulo rotante
    push(); 
    translate(width / 2, height / 2); // Mover al centro
    rotate(frameCount * 0.10); // Rotación en función del tiempo
    stroke(255, random(150, 255), 0);
    strokeWeight(4);
    fill(50, random(100, 200), 255, 150); // Color variable
    rect(0, 0, mouseX / 2, mouseY / 2); // Tamaño depende de la posición del mouse
    pop();

    // Líneas que siguen el ratón
    stroke(100);
    strokeWeight(2);
    line(mouseX, 0, mouseX, height); // Línea vertical
    line(0, mouseY, width, mouseY);  // Línea horizontal

    // Líneas aleatorias
    stroke(255, 255, random(50, 200), 80);
    line(random(width), random(height), random(width), random(height)); // Líneas en posiciones aleatorias
}
