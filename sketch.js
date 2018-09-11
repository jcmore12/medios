var posXborr= 650
var posYborr= 40
 var tamBorr= 40
var posXbot1 = 30;
var posYbot1 = 40;
var tamBot1 = 20;
var posXbot2 = 30;
var posYbot2 = 65;
var tamBot2 = 20;
var posXbot3 = 30;
var posYbot3 = 90;
var tamBot3 = 20;
var posXbot4 = 30;
var posYbot4 = 145;
var tamBot4 = 20;
var posXbot5 = 30;
var posYbot5 = 170;
var tamBot5 = 20;
var posXbot6 = 30;
var posYbot6 = 215;
var tamBot6= 20;
var posXbot7 = 30;
var posYbot7 = 260;
var tamBot7= 20;
var posXbot8 = 30;
var posYbot8 = 285;
var tamBot8= 20;
var posXbot9 = 30;
var posYbot9 = 330;
var tamBot9= 20;
var posXbot10 = 30;
var posYbot10= 355;
var tamBot10 = 20;
var posXbot11 = 30;
var posYbot11= 400;
var tamBot11 = 20;

var posXcol1= 650
var posYcol1= 110
 var tamCol1= 40
 var posXcol2= 650
var posYcol2= 190
 var tamCol2= 40
 var posXcol3= 650
var posYcol3= 270
 var tamCol3= 40
 
 var posXcol4= 650
var posYcol4= 350
 var tamCol4= 40
 
 var posXcol5= 650
var posYcol5= 430
 var tamCol5= 40
 
 var posXcol6= 650
var posYcol6= 510
 var tamCol6= 40
 
var forma = 0;
var colSelect = 0;

function setup() {
  createCanvas(700, 700);
   
}

function draw() {
  //background(220);
  push();
  fill(255);
  //herramientas
 rect(posXbot1,posYbot1, tamBot1,tamBot1);
  rect(posXbot2,posYbot2, tamBot2,tamBot2);
  rect(posXbot3,posYbot3, tamBot3,tamBot3);
  rect(posXbot4,posYbot4, tamBot4,tamBot4);
  rect(posXbot5,posYbot5, tamBot5,tamBot5);
  rect(posXbot6,posYbot6, tamBot6,tamBot6);
  rect(posXbot7,posYbot7, tamBot7,tamBot7);
  rect(posXbot8,posYbot8, tamBot8,tamBot8);
  rect(posXbot9,posYbot9, tamBot9,tamBot9);
  rect(posXbot10,posYbot10, tamBot10,tamBot10);
   rect(posXbot11,posYbot11, tamBot11,tamBot11);
  
  //borrador
  ellipse(posXborr,posYborr,tamBorr,tamBorr);
           

  
  pop();
  
  //colores                                         
  push();
  fill(77,31,10);
  ellipse(posXcol1,posYcol1, tamCol1,tamCol1);
  pop();
  
   push();
  fill(223,185,151);
  ellipse(posXcol2,posYcol2, tamCol2,tamCol2);
  pop();
  
   push();
  fill(189,151,120);
  ellipse(posXcol3,posYcol3, tamCol3,tamCol3);
  pop();
  
  push();
  fill(76,189,23);
  ellipse(posXcol4,posYcol4, tamCol4,tamCol4);
  pop();
  
  push();
  fill(220,62,42);
  ellipse(posXcol5,posYcol5, tamCol5,tamCol5);
  pop();
  
  push();
  fill(random(255),0,0);
  ellipse(posXcol6,posYcol6, tamCol6,tamCol6);
  pop();
  
  //TEXTOS
  push();
  fill(0);
  textSize(17)
     text("Cabezas",8,30);
  text("Narices",10,135);
  text("Orejas",13,208);
  text("Ojos",21,255);
  text("Bocas",15,323);
  text("Pelo",20,395);
  text("Borrador",620,15);
  pop();
  
  if(mouseIsPressed){
    
     if (colSelect == 1) {
       
      fill(73,31,10);
      stroke(0);
    }
    if(colSelect == 2) {
      fill(223,185,151);
      stroke(0);
    }
    if(colSelect == 3) {
      fill(189,151,120);
      stroke(0);
    }
    if(colSelect == 4) {
      fill(76,189,23);
      stroke(0);
    }
    
    if(colSelect == 5) {
      fill(220,62,42);
      stroke(0);
    }
     if(colSelect == 6) {
     fill(random(255),0,0);
      stroke(0);
    }
//cabeza 1
  if (forma == 0) {
//fill(231,199,179)
ellipse(mouseX,mouseY, 270,270);
  }
 // cabeza 2
  if (forma == 1) {
  //fill(231,199,179)
ellipse(mouseX,mouseY, 240,290);
  }
  //cabeza 3
  
  if (forma == 2) {
  rect(mouseX,mouseY,220,270);
  }
  //orejas
  
  if (forma == 5) {
  ellipse(mouseX,mouseY,40,60);
    push();
    fill(0);
     ellipse(mouseX,mouseY+20,20,20);
    pop();
  }
  
  //narices 1
  if (forma == 3) {
ellipse(mouseX,mouseY,17,17)
  ellipse(mouseX+38,mouseY,17,17)
  rect(mouseX,mouseY-50,36,50)
  ellipse(mouseX+18,mouseY+10,56,30)
  }
 // narices 2
  if (forma == 4) {
  ellipse(mouseX,mouseY,17,17)
  ellipse(mouseX+38,mouseY,17,17)
  triangle(mouseX,mouseY,mouseX+16,mouseY-50,mouseX+36,mouseY)
  ellipse(mouseX+18,mouseY+10,56,30)
  }
  //ojos#1
  
  if (forma == 6) {
  fill(255)
  ellipse(mouseX,mouseY,60,30)
  push();
  fill(0)
  ellipse(mouseX,mouseY,30,15)
  pop();
  
  
  
  ellipse(mouseX+100,mouseY,60,30)
  
  push();
  fill(0)
  ellipse(mouseX+100,mouseY,30,15)
  pop();
  }
  //ojos#2
  
  if (forma == 7) {
  push();
  strokeWeight(3)
  line(mouseX,mouseY,mouseX+60,mouseY+15);
  line(mouseX+160,mouseY,mouseX+100,mouseY+15);
  pop();
  }
  
  // boca1 
  
  if (forma == 8) {
  push();
  strokeWeight(2);
  line(mouseX-40,mouseY,mouseX+40,mouseY);
  pop();
  }
  
  //boca 2
  if (forma == 9) {
    push();
  fill(255);
    strokeWeight(3)
  arc(mouseX, mouseY, 80, 80, 0, PI + QUARTER_PI, CHORD);
    pop();
    line(mouseX-40,mouseY-8,mouseX+35,mouseY+15)
  }
  //Pelo
    if (forma == 10) {
      line(mouseX,mouseY,mouseX+30,mouseY-5)
      line(mouseX,mouseY+3,mouseX+30,mouseY-2)
  
    }
    
    //borrador
    if(forma==11){
      push();
      noStroke();
      fill(255);
    ellipse(mouseX,mouseY,tamBorr,tamBorr);
      pop();
    }
  if(mouseX > posXbot1 && mouseX < posXbot1 + tamBot1 &&
     mouseY > posYbot1 && mouseY < posYbot1 + tamBot1){
    forma= 0;
}
    if(mouseX > posXbot2 && mouseX < posXbot2 + tamBot2 &&
     mouseY > posYbot2 && mouseY < posYbot2 + tamBot2){
    forma= 1;
}
    if(mouseX > posXbot3 && mouseX < posXbot3 + tamBot3 &&
     mouseY > posYbot3 && mouseY < posYbot3 + tamBot3){
    forma= 2;
}
   if(mouseX > posXbot4 && mouseX < posXbot4 + tamBot4 &&
     mouseY > posYbot4 && mouseY < posYbot4 + tamBot4){
    forma= 3;
}
    if(mouseX > posXbot5 && mouseX < posXbot5 + tamBot5 &&
     mouseY > posYbot5 && mouseY < posYbot5 + tamBot5){
    forma= 4;
}
    if(mouseX > posXbot6 && mouseX < posXbot6 + tamBot6 &&
     mouseY > posYbot6 && mouseY < posYbot6 + tamBot6){
    forma= 5;
}
    if(mouseX > posXbot7 && mouseX < posXbot7 + tamBot7 &&
     mouseY > posYbot7 && mouseY < posYbot7 + tamBot7){
    forma= 6;
}
    if(mouseX > posXbot8 && mouseX < posXbot8 + tamBot8 &&
     mouseY > posYbot8 && mouseY < posYbot8 + tamBot8){
    forma= 7;
}
    if(mouseX > posXbot9 && mouseX < posXbot9 + tamBot9 &&
     mouseY > posYbot9 && mouseY < posYbot9 + tamBot9){
    forma= 8;
}
    if(mouseX > posXbot10 && mouseX < posXbot10 + tamBot10 &&
     mouseY > posYbot10 && mouseY < posYbot10 + tamBot10){
    forma= 9;
}
    if(mouseX > posXbot11 && mouseX < posXbot11 + tamBot11 &&
     mouseY > posYbot11 && mouseY < posYbot11 + tamBot11){
    forma= 10;
}
    if(mouseX > posXborr && mouseX < posXborr + tamBorr &&
     mouseY > posYborr && mouseY < posYborr + tamBorr){
    forma= 11;
}
     if(mouseX > posXcol1+3 && mouseX < posXcol1 + tamCol1 &&
     mouseY > posYcol1+3 && mouseY < posYcol1 + tamCol1){
    colSelect= 1;
     }
}
   if(mouseX > posXcol2+3 && mouseX < posXcol2 + tamCol2 &&
     mouseY > posYcol2+3 && mouseY < posYcol2 + tamCol2){
    colSelect= 2;
     }
  if(mouseX > posXcol3+3 && mouseX < posXcol3 + tamCol3 &&
     mouseY > posYcol3+3 && mouseY < posYcol3 + tamCol3){
    colSelect= 3;
     }
  if(mouseX > posXcol4+3 && mouseX < posXcol4 + tamCol4 &&
     mouseY > posYcol4+3 && mouseY < posYcol4 + tamCol4){
    colSelect= 4;
     }
  if(mouseX > posXcol5+3 && mouseX < posXcol5 + tamCol5&&
     mouseY > posYcol5+3 && mouseY < posYcol5 + tamCol5){
    colSelect= 5;
     }
  if(mouseX > posXcol6+3 && mouseX < posXcol6 + tamCol6&&
     mouseY > posYcol6+3 && mouseY < posYcol6 + tamCol6){
    colSelect= 6;
     }
}
