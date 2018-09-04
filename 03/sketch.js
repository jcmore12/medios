 //VARIABLES
var posx = 25;
var posy = 65;
var dirx = 1;

var posx1 = 450;
var posy1 = 135;
var dirx1 = -1;

var x = 200
var y = 370
var w = y - 5
var z = x + 12
var f = y - 18

var posxn = 6
var posyn = 370
var dirxn = 1;

var linex = 350;
var liney = 358;
var liney2 = 345;

var elipx=350
var elipy=355

var elipx1=450
var elipy1=285
//var elipx1=

function setup() {
  createCanvas(650, 400);
  background(0);

  frameRate(4);
}

function draw() {
  background(0)



  //TEXTO


  //ESTRELLITAS

  fill(255)
  noStroke();
  frameRate(24);
  ellipse(random(0, 650), random(0, 400), 3, 3);
  ellipse(random(0, 650), random(0, 400), 3, 2);
  ellipse(random(0, 650), random(0, 400), 3, 3);
  ellipse(random(0, 650), random(0, 400), 1, 3);
  ellipse(random(0, 650), random(0, 400), 2, 1);
  ellipse(random(0, 650), random(0, 400), 2, 2);
  ellipse(random(0, 650), random(0, 400), 1, 1);
  ellipse(random(0, 650), random(0, 400), 1, 2);
  ellipse(random(0, 650), random(0, 400), 3, 1);

  //CIRCULOS QUE VAN A LA DERECHA LINEA ARRIBA
  push();
  strokeWeight(3);
  stroke(random(0, 255), 0, 0)
  fill(255, 105, 180);
  ellipse(posx, posy, 50, 50)
  posx = posx + 0.3 * dirx;

  ellipse(posx + 60, posy, 50, 50)
  posx = posx + 1 * dirx;

  ellipse(posx + 120, posy, 50, 50)
  posx = posx + 1 * dirx;

  ellipse(posx + 180, posy, 50, 50)
  posx = posx + 1 * dirx;

  //DEVOLVERSE DE LOS CÍRCULOS
  if (posx > 450) {
    dirx = -1
  }

  if (posx < 20) {
    dirx = 1
  }
  //CIRCULOS QUE VAN A LA DERECHA LINEA 3
push();
  if(elipy<=230){
  noStroke();
  noFill();
}
  ellipse(posx, posy + 150, 50, 50)
  posx = posx + 1 * dirx;
pop();
  ellipse(posx + 60, posy + 150, 50, 50)
  posx = posx + 1 * dirx;

  ellipse(posx + 120, posy + 150, 50, 50)
  posx = posx + 1 * dirx;

  ellipse(posx + 180, posy + 150, 50, 50)
  posx = posx + 1 * dirx;
  pop();

  //CIRCULOS QUE VAN A LA IZQUIERDA LINEA 2
  push();
  strokeWeight(3);
  stroke(0, random(0, 255), 0)
  fill(57, 255, 20);
  ellipse(posx1, posy1, 50, 50)
  posx1 = posx1 + 1 * dirx1;
  ellipse(posx1 + 60, posy1, 50, 50)
  posx1 = posx1 + 1 * dirx1;

  ellipse(posx1 + 120, posy1, 50, 50)
  posx1 = posx1 + 1 * dirx1;

  ellipse(posx1 + 180, posy1, 50, 50)
  posx1 = posx1 + 1 * dirx1;

  //DEVOLVERSE DE CIRCULOS
  if (posx1 < 30) {
    dirx1 = 1
  }

  if (posx1 > 450) {
    dirx1 = -1
  }

  //CIRCULOS QUE VAN A LA IZQUIERDA LINEA 4
  strokeWeight(3);
  stroke(0, random(0, 255), 0)
  fill(57, 255, 20);
  
  push();
  if(elipy1<=230){
    noFill();
    noStroke()
  }
  ellipse(posx1, posy1 + 150, 50, 50)
  posx1 = posx1 + 0.8 * dirx1;
  pop();

  ellipse(posx1 + 60, posy1 + 150, 50, 50)
  posx1 = posx1 + 0.8 * dirx1;
  ellipse(posx1 + 120, posy1 + 150, 50, 50)
  posx1 = posx1 + 0.8 * dirx1;
  ellipse(posx1 + 180, posy1 + 150, 50, 50)
  posx1 = posx1 + 0.8 * dirx1;
  pop();
  //LINEA VERDE ABAJO DE LA NAVE
  push();
  strokeWeight(3);
  stroke(0, random(0, 255), 0)
  line(0, 385, 650, 385)

  line(192, 385, 192, 355);
  line(440, 385, 440, 355);
  pop();
  //noStroke()

  // NAVE QUE DISPARA
  push();
  strokeWeight(2);
  stroke(0, 60, random(0, 255));
  fill(0, 0, 255)
  beginShape();
  vertex(x, y)
  vertex(x + 5, y - 5)
  vertex(x + 12, y - 5)
  vertex(x + 12, y - 12)
  vertex(x + 12, y - 18)
  vertex(x + 23, y - 18)
  vertex(x + 23, y - 5)
  vertex(x + 31, y - 5)
  vertex(x + 35, y)
  vertex(x + 35, y + 12)
  vertex(x, y + 12)
  endShape();
  x = x + 6 * dirxn;

  if (x > 400) {
    dirxn = -1
  }
  if (x < 200) {
    dirxn = 1
  }
  pop();

  
  if (x > 350) {

    strokeWeight(2);
    stroke(225, random(0, 255), 0)
    fill(70,random(0,255),40)    //line(linex, liney, linex, liney2);
  //  liney = liney - 7;
   // liney2 = liney2 - 7;
    
 push();
    if(elipy<230){
      noStroke();
      noFill();}
    ellipse(elipx, elipy, 10, 10)
    elipy= elipy -8
    pop();
    
    push();
    
    if(x>450)
if(elipy1<285){
  ellipse(elipx1, elipy1, 10, 10)
    elipy= elipy -8
    pop();
}
  }
   if(frameCount<400){
     if(frameCount %4 == 0){
    // saveCanvas("miFlipbookito" + frameCount,"jpg");
   }
   }

}