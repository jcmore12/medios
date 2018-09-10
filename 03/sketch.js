 //VARIABLES
 var posx = 25;
 var posy = 50;
 var dirx = 1;

 var posx1 = 450;
 var posy1 = 140;
 var dirx1 = -1;

 var posx3 = 30;
 var posy3 = 95;
 var dirx3 = 1;

var posxWin = 350;

 var x = 200
 var y = 370
 var w = y - 5
 var z = x + 12
 var f = y - 18

 var posxn = 6
 var posyn = 370
 var dirxn = 1;

 var linex = 350
 var liney = 358;
 var liney2 = 345;

 var elipx = 350
 var elipy = 355

 var elipx1 = 300
 var elipy1 = 355
 //var elipx1=

 function setup() {
   createCanvas(1700, 1100);
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
   ellipse(random(0, width), random(0, height), 9, 9);
   ellipse(random(0, width), random(0, height), 9, 7);
   ellipse(random(0, width), random(0, height), 9, 9);
   ellipse(random(0, width), random(0, height), 4, 9);
   ellipse(random(0, width), random(0, height), 7, 4);
   ellipse(random(0, width), random(0, height), 7, 7);
   ellipse(random(0, width), random(0, height), 4, 4);
   ellipse(random(0, width), random(0, height), 4, 4);
   ellipse(random(0, width), random(0, height), 3, 1);

    //CIRCULO AZUL INDEPENDIENTE WIN GAME
   push();
   strokeWeight(6);
   stroke(random(0, 0, (0,255)))
   fill(77, 77, 255);
   ellipse(posx3 * width / 650, posy3 * height / 400, 20 * width / 650, 20 * height / 400)
   posx3 = posx3 + 7.5 * dirx3;
  
   
    //DEVOLVERSE DE LOS CÍRCULOS
   if (posx3 * width / 650 > 630 * width / 650) {
     dirx3 = -1
   }

   if (posx3 * width / 650 < 20 * width / 650) {
     dirx3 = 1
   }
   
   //DISPARO QUE GANA EL JUEGO
  
   if(frameCount>100){
       strokeWeight(2);
     stroke(225, random(0, 255), 0)
     fill(70, random(0, 255), 40)
      ellipse(posxWin * width / 650, elipy1 * height / 400, 10 * width / 650, 10 * height / 400)
     elipy1 = elipy1 - 15

     pop();
     
      
   }
    
   //CIRCULOS QUE VAN A LA DERECHA LINEA ARRIBA
   push();
   strokeWeight(6);
   stroke(random(0, 255), 0, 0)
   fill(255, 105, 180);
   ellipse(posx * width / 650, posy * height / 400, 50 * width / 650, 50 * height / 400)
   posx = posx + 0.3 * dirx;

   ellipse((posx + 60) * width / 650, posy * height / 400, 50 * width / 650, 50 * height / 400)
   posx = posx + 1 * dirx;

   ellipse((posx + 120) * width / 650, posy * height / 400, 50 * width / 650, 50 * height / 400)
   posx = posx + 1 * dirx;

   ellipse((posx + 180) * width / 650, posy * height / 400, 50 * width / 650, 50 * height / 400)
   posx = posx + 1 * dirx;

   
   
   //DEVOLVERSE DE LOS CÍRCULOS
   if (posx * width / 650 > 450 * width / 650) {
     dirx = -1
   }

   if (posx * width / 650 < 20 * width / 650) {
     dirx = 1
   }
   

    
   
   //CIRCULOS QUE VAN A LA DERECHA LINEA 3
   push();
   if (elipy * height / 400 <= 230 * height / 400) {
     noStroke();
     noFill();
   }
   ellipse(posx * width / 650, (posy + 150) * height / 400, 50 * width / 650, 50 * height / 400)
   posx = posx + 1 * dirx;
   pop();
   ellipse((posx + 60) * width / 650, (posy + 150) * height / 400, 50 * width / 650, 50 * height / 400)
   posx = posx + 1 * dirx;

   ellipse((posx + 120) * width / 650, (posy + 150) * height / 400, 50 * width / 650, 50 * height / 400)
   posx = posx + 1 * dirx;

   ellipse((posx + 180) * width / 650, (posy + 150) * height / 400, 50 * width / 650, 50 * height / 400)
   posx = posx + 1 * dirx;
   pop();

   //CIRCULOS QUE VAN A LA IZQUIERDA LINEA 2
   push();
   strokeWeight(6);
   stroke(0, random(0, 255), 0)
   fill(57, 255, 20);
   ellipse(posx1 * width / 650, posy1 * height / 400, 50 * width / 650, 50 * height / 400)
   posx1 = posx1 + 1 * dirx1;
   ellipse((posx1 + 60) * width / 650, posy1 * height / 400, 50 * width / 650, 50 * height / 400)
   posx1 = posx1 + 1 * dirx1;

   ellipse((posx1 + 120) * width / 650, posy1 * height / 400, 50 * width / 650, 50 * height / 400)
   posx1 = posx1 + 1 * dirx1;

   ellipse((posx1 + 180) * width / 650, posy1 * height / 400, 50 * width / 650, 50 * height / 400)
   posx1 = posx1 + 1 * dirx1;

   //DEVOLVERSE DE CIRCULOS
   if (posx1 * width / 650 < 30 * width / 650) {
     dirx1 = 1
   }

   if (posx1 * width / 650 > 450 * width / 650) {
     dirx1 = -1
   }

   //CIRCULOS QUE VAN A LA IZQUIERDA LINEA 4
   strokeWeight(6);
   stroke(0, random(0, 255), 0)
   fill(57, 255, 20);

   push();
   if (elipy1 * height / 400 <= 230 * height / 400) {
     noFill();
     noStroke()
   }
   ellipse(posx1 * width / 650, (posy1 + 150) * height / 400, 50 * width / 650, 50 * height / 400)
   posx1 = posx1 + 0.8 * dirx1;
   pop();

   ellipse((posx1 + 60) * width / 650, (posy1 + 150) * height / 400, 50 * width / 650, 50 * height / 400)
   posx1 = posx1 + 0.8 * dirx1;
   ellipse((posx1 + 120) * width / 650, (posy1 + 150) * height / 400, 50 * width / 650, 50 * height / 400)
   posx1 = posx1 + 0.8 * dirx1;
   ellipse((posx1 + 180) * width / 650, (posy1 + 150) * height / 400, 50 * width / 650, 50 * height / 400)
   posx1 = posx1 + 0.8 * dirx1;
   pop();
   //LINEA VERDE ABAJO DE LA NAVE
   push();
   strokeWeight(6);
   stroke(0, random(0, 255), 0)
   line(0, 385 * height / 400, 650 * width / 650, 385 * height / 400)

   line(192 * width / 650, 385 * height / 400, 192 * width / 650, 355 * height / 400);
   line(440 * width / 650, 385 * height / 400, 440 * width / 650, 355 * height / 400);
   pop();
   //noStroke()

   // NAVE QUE DISPARA
   push();
   strokeWeight(2);
   stroke(0, 60, random(0, 255));
   fill(0, 0, 255)
   beginShape();
   vertex(x * width / 650, y * height / 400)
   vertex((x + 5) * width / 650, (y - 5) * height / 400)
   vertex((x + 12) * width / 650, (y - 5) * height / 400)
   vertex((x + 12) * width / 650, (y - 12) * height / 400)
   vertex((x + 12) * width / 650, (y - 18) * height / 400)
   vertex((x + 23) * width / 650, (y - 18) * height / 400)
   vertex((x + 23) * width / 650, (y - 5) * height / 400)
   vertex((x + 31) * width / 650, (y - 5) * height / 400)
   vertex((x + 35) * width / 650, y * height / 400)
   vertex((x + 35) * width / 650, (y + 12) * height / 400)
   vertex(x * width / 650, (y + 12) * height / 400)
   endShape();
   x = x + 6 * dirxn;

   if (x * width / 650 > 400 * width / 650) {
     dirxn = -1
   }
   if (x * width / 650 < 200 * width / 650) {
     dirxn = 1
   }
   pop();


   if (x * width / 650 > 350 * width / 650) {

     strokeWeight(2);
     stroke(225, random(0, 255), 0)
     fill(70, random(0, 255), 40) //line(linex, liney, linex, liney2);
     //  liney = liney - 7;
     // liney2 = liney2 - 7;

     push();
     if (elipy * height / 300 < 230 * height / 300) {
       noStroke();
       noFill();
     }
     ellipse(elipx * width / 650, elipy * height / 400, 10 * width / 650, 10 * height / 400)
     elipy = elipy - 8
     pop();

   }
   if(elipy1<95){
       fill(0);
  rect(0,0,650* width / 650,385* height / 400)
     textSize(90)
     text("YOU WON",600,height/2);
     
   }
 }
  
 }
