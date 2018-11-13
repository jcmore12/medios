// Estado 0 = Inicio
// Estado 1 = Jugando
// Estado 2 = Perdió
// Estado 3 = Cómo jugar
//variables del x y Y
var x = 0
var y = 0
//variable del estado inicial
var estado = 0;

//variable del punto de comienzo de partida de mi timer
var timer = 2
var timerSecret = 2
var timerSecret1=1
//variable del arreglo de mis cuadros
var cuadros = [];
//variables tamaño de mi cuadros
var tamX;
var tamY;

//variable numero de cuadros
var numRects = 16;

var miliseg = 0;

//randomCuadro = random(0,15)



function preload(){
fondoJuego = loadImage("Fotos/raul.png");
fondoInstru= loadImage("Fotos/raul2.png")
  fondoPierde= loadImage("fotos/raul3.png")


}
function setup() {
  createCanvas(windowWidth, windowHeight);
  
  tiempoAnterior = millis();
//function resetSketch(){

//estado=0

//}
  //background(0)
  //tamaño fijo de mis cuadros
  var tamX = width / 4;
  var tamY = height / 4;
  //for que recorre todos mis cuadros pero que no hace nada aún
 
  /*literalmente cuadro por cuadro del grid para entender que cada uno
  tiene su X y Y independiente*/
  cuadros[0] = new cuadro(0, 0);
  cuadros[1] = new cuadro(tamX, 0);
  cuadros[2] = new cuadro(tamX * 2, 0);
  cuadros[3] = new cuadro(tamX * 3, 0);

  cuadros[4] = new cuadro(0, tamY);
  cuadros[5] = new cuadro(tamX, tamY);
  cuadros[6] = new cuadro(tamX * 2, tamY);
  cuadros[7] = new cuadro(tamX * 3, tamY);

  cuadros[8] = new cuadro(0, tamY * 2);
  cuadros[9] = new cuadro(tamX, tamY * 2);
  cuadros[10] = new cuadro(tamX * 2, tamY * 2);
  cuadros[11] = new cuadro(tamX * 3, tamY * 2);

  cuadros[12] = new cuadro(0, tamY * 3);
  cuadros[13] = new cuadro(tamX, tamY * 3);
  cuadros[14] = new cuadro(tamX * 2, tamY * 3);
  cuadros[15] = new cuadro(tamX * 3, tamY * 3);

  ran = (int)(Math.random() * 15) + 0
  ran2 = (int)(Math.random() * 15) + 0
  ran3 = (int)(Math.random() * 15) + 0
  ran4 = (int)(Math.random() * 15) + 0
  ran5 = 15
  estadoTimer = 0
   for (var i = 0; i <cuadros.length; i++) {
cuadros[i].colorito= 0
  }
}

function draw() {

 
  //Inicio
  if (estado == 0) {


    image(fondoJuego,0,0,windowWidth,windowHeight)
     
    for (var k = 0; k < touches.length; k++) {
tamX = width / 4;
tamY = height / 4;
      
      if (touches[k].x > cuadros[10].x  && touches[k].x < cuadros[11].x&&
        touches[k].y > cuadros[10].y && touches[k].y > cuadros[14].y) {

          //si el boton es presionado cambia a modo instrucciones
          estado = 3;

      

      } else if (touches[k].x >  cuadros[5].x && touches[k].x <  cuadros[6].x &&
        touches[k].y > cuadros[5].y && touches[k].y < cuadros[12].y){
      //si el boton es presionado cambia a modo juego
      estado=1;
            
    
      } 
    }
    
  }
  
if(estado==3){
      
      
      image(fondoInstru,0,0,width,height)
   
       for (var d = 0; d < touches.length; d++){
         
      
       if(touches[d].x > cuadros[10].x  && touches[d].x < cuadros[11].x&&
        touches[d].y > cuadros[10].y && touches[d].y <cuadros[14].y){
                 //si el boton es presionado cambia a modo pantalla inicio
                 estado=0;
                 
                 
                 }
       }
       }
      
  //Modo jugar
  if (estado == 1) {
   
  
    //for que dibuja mis cuadros y juega con sus colores
    for (var i = 0; i < cuadros.length; i++) {

      cuadros[i].dibujarse();

      cuadros[i].colorito = 0;

      for (var j = 0; j < touches.length; j++) {
        //lo que me pinta los cuadros azules cuando paso con el dedo por ellos

        if (touches[j].x > cuadros[i].x && touches[j].x < cuadros[i].x + windowWidth / 4 &&
          touches[j].y > cuadros[i].y && touches[j].y < cuadros[i].y + windowHeight / 4) {

          cuadros[i].colorito = 1
          //lo que hace que vuelvan a estar negros los cuadros cuando no los toco
        } else {

         cuadros[i].colorito = 0

        }

      }

    }




    //Lo que me crea el countdown

    if (estadoTimer == 0) {
      textAlign(CENTER, CENTER);
      textSize(200);
      noStroke();
      fill(255, 0, 0)
      text(timer, width / 2, height / 2);
      if (frameCount % 60 == 0 && timer > 0) {
        timer = timer - 1
      }

      if (frameCount % 60 == 0 && timerSecret > -2) {
        timerSecret = timerSecret - 1
      }

    }

    /* lo que dice que cuando el countdown llegue a 0, se pinten dos
    cuadros rojos, aún estoy tratando de que sean random*/
    if (timer == 0) {
       

      
      cuadros[ran].colorito = 2;
      cuadros[ran2].colorito = 2
      cuadros[ran3].colorito = 2;
      cuadros[ran4].colorito = 2;
      cuadros[ran5].colorito = 2;
     
      for (var m = 0; m < touches.length; m++) {
        if (touches[m].x > cuadros[ran].x && touches[m].x < cuadros[ran].x + cuadros[ran].tamX &&
          touches[m].y > cuadros[ran].y && touches[m].y < cuadros[ran].y + cuadros[ran].tamY ||
          touches[m].x > cuadros[ran2].x && touches[m].x < cuadros[ran2].x + cuadros[ran2].tamX &&
          touches[m].y > cuadros[ran2].y && touches[m].y < cuadros[ran2].y + cuadros[ran2].tamY ||
          touches[m].x > cuadros[ran3].x && touches[m].x < cuadros[ran3].x + cuadros[ran3].tamX &&
          touches[m].y > cuadros[ran3].y && touches[m].y < cuadros[ran3].y + cuadros[ran3].tamY ||
          touches[m].x > cuadros[ran4].x && touches[m].x < cuadros[ran4].x + cuadros[ran4].tamX &&
          touches[m].y > cuadros[ran4].y && touches[m].y < cuadros[ran4].y + cuadros[ran4].tamY ||
          touches[m].x > cuadros[ran5].x && touches[m].x < cuadros[ran5].x + cuadros[ran5].tamX &&
          touches[m].y > cuadros[ran5].y && touches[m].y < cuadros[ran5].y + cuadros[ran5].tamY) {

          estado = 2;
      
        }
      
      else if (timerSecret== -1) {
        timer = 2;
        estadoTimer = 0;
        timerSecret = 2;
        
 ran = (int)(Math.random() * 15) + 0
  ran2 = (int)(Math.random() * 15) + 0
  ran3 = (int)(Math.random() * 15) + 0
  ran4 = (int)(Math.random() * 15) + 0
  ran5 = 15
       
      }

    }
  }
    textSize(32)
         fill(255);
  noStroke();
	miliseg = floor(millis() - tiempoAnterior);
	text(miliseg, width / 14, height / 24);
    
   /* if (soniInicio.isPlaying() == false) {
        soniInicio.play();
      }
     else {
      soniInicio.stop();
    }
    */
  }
  if (estado == 2) {
    
   
       if (frameCount % 60 == 0 && timerSecret1 > 0) {
        timerSecret1 = timerSecret1 - 1
      }
        if(timerSecret1==0){
          
        
        image(fondoPierde,0,0,width,height)
          
    /* if (soniPierde.isPlaying() == false) {
        soniPierde.play();
      }
     else {
      soniPierde.stop();
    }
      */
          
          
    fill(0)
    textSize(50)
      text(miliseg,width/3+25, height-height/3);
    for (var p = 0; p < touches.length; p++) {

      if (touches[p].x > cuadros[10].x  && touches[p].x < cuadros[11].x&&
        touches[p].y > cuadros[10].y && touches[p].y < cuadros[14].y) {

          //si el boton es presionado cambia a modo jugar
        
       estado=0
        timer = 2;
        estadoTimer = 0;
        timerSecret = 2;
        //estadoTimer=0
        setup();
        // timerSecret1=1
          //resetSketch();

        }

  
    }
        }
    
 /* for (var r = 0; r < cuadros.length; r++) {
    cuadros[r].colorito=0
     
      
    }
    */
    
  }
}



//la reticula de los cuadros
function cuadro(miX, miY) {

  this.tamX = width / 4
  this.tamY = height / 4
  this.x = miX
  this.y = miY
  this.colorito = 0

  this.dibujarse = function() {
    if (this.colorito == 0) {
      fill(0)
    } else if (this.colorito == 1) {
      fill(179, 218, 241)
    } else {
      fill(255, 0, 0)
    }
    stroke(255);
    strokeWeight(2);
    rect(this.x, this.y, this.tamX, this.tamY)
    
    

    //     this.x = this.x + this.tamX

    //     if (this.x > windowWidth) {
    //       this.x = 0
    //       this.y = this.y + this.tamY
    //     } else if (this.y > windowHeight) {
    //       this.y = 0
    //     }
  }





}
//lo que hace que se quede quieta la pantalla
function mouseDragged() {
  //prevent default

  return false;

}

function touchMoved() {

  // prevent default
  return false;
}

function touchEnded() {
  if (estado == 1) {
   estado = 2
  } 
}
