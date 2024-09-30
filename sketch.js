function setup() {
    //Crea un lienzo del tamaño de la ventana del navegador (ajustando el ancho y el alto a las dimensiones actuales de la pantalla).
    createCanvas(windowWidth, windowHeight);
    frameRate(60); // Cuadors por segundo
    rectMode(CENTER); //Cambia el modo de dibujo de los rectángulos para que se dibujen desde su centro en lugar de desde una esquina.
    noCursor();  // Oculta el cursor predeterminado
}
/*function draw() {
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
}*/


function draw() {
    // Crear un fondo con una transparencia ligera
    background(0, 0, 30, 20);

    // Triángulo dinámico
    let tamanoTriangulo = map(mouseX, 0, width, 50, 300); // Tamaño varía con el mouseX
    noStroke();
    fill(50, 200, random(50, 255), 150); // Color dinámico con transparencia

    // Dibujar un triángulo en función del mouseX y mouseY
    let x1 = mouseX, y1 = mouseY - tamanoTriangulo / 2;
    let x2 = mouseX - tamanoTriangulo / 2, y2 = mouseY + tamanoTriangulo / 2;
    let x3 = mouseX + tamanoTriangulo / 2, y3 = mouseY + tamanoTriangulo / 2;
    triangle(x1, y1, x2, y2, x3, y3);

    // Rombro rotante
    push();
    translate(width / 2, height / 2); // Mover al centro de la pantalla
    rotate(frameCount * 0.05); // Rotación en función del tiempo
    stroke(255, random(150, 255), 0);
    strokeWeight(4);
    fill(50, random(100, 200), 255, 150); // Color variable

    // Dibujar un rombo (polígono de 4 lados con ángulos iguales)
    let tamanoRomboX = mouseX / 2;
    let tamanoRomboY = mouseY / 2;
    beginShape();
    vertex(0, -tamanoRomboY);  // Arriba
    vertex(tamanoRomboX / 2, 0);  // Derecha
    vertex(0, tamanoRomboY);  // Abajo
    vertex(-tamanoRomboX / 2, 0);  // Izquierda
    endShape(CLOSE);
    pop();

    // Líneas que siguen el ratón
    stroke(100);
    strokeWeight(2);
    line(mouseX, 0, mouseX, height); // Línea vertical
    line(0, mouseY, width, mouseY);  // Línea horizontal

    // Líneas aleatorias
    stroke(255, 255, random(50, 200), 80);
    line(random(width), random(height), random(width), random(height)); // Líneas en posiciones aleatorias

    // Dibujar un cursor personalizado (círculo pequeño)
    noStroke();
    fill(255, 50, 50); // Color rojo para el cursor personalizado
    circle(mouseX, mouseY, 20); // Un círculo pequeño como cursor en la posición del mouse
}

