//variables de mis especies
var cantante;
var fan1;
var fan2;
var guitarra;
var bateria;
var staff1;
var staff2;
var manager1;
var manager2;

//variables para el arreglo de mis fans

var misX = [];
var misY = [];
var misX1 = [];
var misY1 = [];
var misX2 = [];
var misY2 = [];

var gui;
var drum;
var sing;

var phineas;
var ferb;
var parl1;
var parl2;

var dir=2;

//subiendo las fotos de mis especies
function preload() {
  cantante = loadImage("Fotos/Cantante.png");
  fan1 = loadImage("Fotos/Fan1.png");
  fan2 = loadImage("Fotos/Fan2.png");
  guitarra = loadImage("Fotos/Guitarra.png");
  bateria = loadImage("Fotos/Bateria.png");
  staff1 = loadImage("Fotos/Staff1.png");
  staff2 = loadImage("Fotos/Staff2.png");
  manager1 = loadImage("Fotos/Manager1.png");
  manager2 = loadImage("Fotos/Manager2.png");
  parl1 = loadImage("Fotos/PARLANTE.png");
  parl2 = loadImage("PARLANTE2.png");
  gui = loadSound("sounds/guitarrasong.mp3");
  drum = loadSound("sounds/drums.mp3");
  sing = loadSound("sounds/sing.mp3");
  fondo=loadImage("Fotos/lola.jpg");

}

function setup() {
  createCanvas(400, 600);
  background(0)

  //for que le da valores a mis fans
  for (var i = 0; i < 100; i++) {
    misX[i] = random(25, 330);
    misY[i] = random(272, 510);
  }


  ferb = new cant(mouseX, mouseY);
  parlante1 = new parl(35, 111);
  parlante2 = new parle(330, 114)
  phineas = new guit(96, 117);
  perry= new staff(17,225);
  candace= new manager(35,26);
  rudolf= new bater(246,56);
 
}

function draw() {
// background(0);
 image(fondo,0,0)
if (mouseIsPressed) {
            fill(random(255), random(255), random(255));
            stroke(255)
            
            rect(random(0, 400), random(0, 600), 30, 10);}

  // las cosas que quiero que pasen

  ferb.dibujarse();
  ferb.cantar();

  parlante1.dibujarse();
  parlante1.vibrar();
  parlante1.vibrar1();
  parlante1.vibrar2();

  parlante2.dibujarse();
  parlante2.vibrar();
  parlante2.vibrar1();
  parlante2.vibrar2();

  phineas.dibujarse();
  phineas.tocar();

  perry.moverse();
  perry.dibujarse();
  
  candace.dibujarse();
  candace.brava();
  //perry.bravo();
  rudolf.dibujarse();
  rudolf.tocar();

  //fans
//que se enamoren del cantante y bailen 
  for (var i = 0; i < misX.length; i++) {
    image(fan1, misX[i], misY[i], 50, 70)
    if (mouseY > 145 && mouseY <= 240) {

      image(fan2, misX[i], misY[i], 50, 70)
      misX[i] = misX[i] + random(-1, 1)
      misY[i] = misY[i] + random(-1, 1)
    }
    else if (mouseY > 240 && mouseY < height) {

      image(fan2, misX[i], misY[i], 60, 80)
      misX[i] = misX[i] + random(-2, 2)
      misY[i] = misY[i] + random(-2, 2)
      }
    
    //que bailen con phineas
    if (mouseX > 96 && mouseX < 140 &&
      mouseY > 116 && mouseY < 145) {

      misX[i] = misX[i] + random(-1, 1)
      misY[i] = misY[i] + random(-1, 1)
    }
    //que bailen con el baterista
    if (mouseX > 205 && mouseX < 291 &&
      mouseY > 115 && mouseY < 145) {

      misX[i] = misX[i] + random(-1, 1)
      misY[i] = misY[i] + random(-1, 1)
    }
  }
//cambio apariencia perry
  
if(mouseY > 135 && mouseY < 159){
  perry.bravo();
}
  else{ 
  perry.estaVivo = true;
    perry.dibujarse();
    perry.moverse();
  
  }
  //Guitarrista y bateria

}

//GUITARRISTA
function guit(miX, miY) {

  //caracteristicas
  this.x = miX
  this.y = miY
  this.estaVivo = true;

  //habilidades
  this.dibujarse = function() {
    if (this.estaVivo == true) {
      image(guitarra, 96, 116, 50, 70)
    }
  }
  this.tocar = function() {
    if (mouseX > 96 && mouseX < 155 &&
      mouseY > 100 && mouseY < 160 == true) {

      if (gui.isPlaying() == false) {


        gui.play();


      }
    } else {
      gui.pause();


    }
  }
}

//BATERIA
function bater(miX,miY){
//caracteristicas
  this.x = miX
  this.y = miY
  this.estaVivo = true;

  //habilidades
  
  this.dibujarse=function(){
  if(this.estaVivo==true){
     image(bateria, 246, 117, 50, 70)
     }
   this.tocar=function(){
    if(mouseX > 200 && mouseX < 295 &&
      mouseY > 100 && mouseY < 160 == true){
       if(drum.isPlaying()==false){
       drum.play();
       }
    }  else{
       
       drum.pause();
       
       }
       
       
       
    }
  }
}

//PARLANTE1
function parl(miX, miY) {
  //caracteristicas
  this.x = miX
  this.y = miY
  this.estaVivo = true;

  //habilidades
  this.dibujarse = function() {
    if (this.estaVivo == true) {
      image(parl1, 35, 114, 50, 70)
    }
    this.vibrar = function() {
      if (mouseIsPressed) {
        image(parl1, 35, 114, random(50, 70), random(70, 90))

      }
      this.vibrar1 = function() {
        if (mouseX > 96 && mouseX < 155 &&
          mouseY > 100 && mouseY < 165 == true) {
          image(parl1, 35, 114, random(50, 70), random(70, 90))
        }
      }
    }

    this.vibrar2 = function() {
      if (mouseX > 200&& mouseX < 291 &&
        mouseY > 100 && mouseY < 160 == true) {
        image(parl1, 35, 114, random(50, 70), random(70, 90))
      }
    }
  }
}

//PARLANTE 2

function parle(miX, miY) {
  //caracteristicas
  this.x = miX
  this.y = miY
  this.estaVivo = true;

  //habilidades
  this.dibujarse = function() {
    if (this.estaVivo == true) {
      image(parl2, 326, 112, 50, 70)
    }
    this.vibrar2=function(){
     if (mouseX > 200 && mouseX < 296 &&
        mouseY > 100 && mouseY < 165 == true) {
        image(parl2, 326, 112, random(50, 70), random(70, 90))
      }
    
    }
    this.vibrar1=function(){
    if (mouseX > 96 && mouseX < 150 &&
          mouseY > 100&& mouseY < 160 == true) {
          image(parl2, 326, 112, random(50, 70), random(70, 90))
        }
    
    }
    this.vibrar = function() {
      if (mouseIsPressed) {
        image(parl2, 326, 112, random(50, 70), random(70, 90))
      }
    }

  }
}
//MANAGER

function manager(miX,miY){
//características
  this.x = miX;
  this.y = miY;
  this.estaVivo = true;
  
  //habilidades
  this.dibujarse=function(){
  if(this.estaVivo==true){
     image(manager1,35,26,50,70);  
  }
    this.brava=function(){
     
    if(mouseY<20){
      image(manager2,35,26,55,75);
    }
      
      this.gritar=function(){
      
      if(mouseY<20){
        
         
         
         }
      
      
      }
    }
  }
}
// STAFF

function staff(miX,miY){
  //caracteristicas
this.x = miX;
  this.y = miY;
  this.estaVivo = true;
  
  //habilidades
  this.dibujarse= function(){
  if (this.estaVivo == true) {
      image(staff1, this.x, this.y, 70, 50);
    }
  }
  this.bravo = function() {
      
    this.estaVivo = false
    image(staff2, this.x, this.y-10, 45, 65);
    
  } 
  this.moverse = function() {
    this.x = this.x + 1 * dir
    if (this.x > width - 70) {
      dir = -1
    }
    if (this.x < 0) {
      dir = 1
    }
  }
}


//cantante
function cant(miX, miY) {
  //caracteristicas
  this.x = miX;
  this.y = miY;
  this.estaVivo = true;
  //habilidades
  this.dibujarse = function() {
    if (this.estaVivo == true) {
      image(cantante, mouseX, mouseY, 50, 70)
    }
    this.cantar = function() {
      if (mouseIsPressed == true) {
        if (sing.isPlaying() == false) {

          sing.play();
        }
      } else {
        sing.pause();

      }
    }
  }
//LUCES DE COLORES 
  

}
