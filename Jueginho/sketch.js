// Estado 0 = Inicio
// Estado 1 = Jugando
// Estad6o 2 = Perdió
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
  fondoPierde= loadImage("Fotos/raul3.png")
  fondoGanador= loadImage("Fotos/multijugador.png")
  ganadorFue= loadImage("Fotos/ganador.png")
botonIncorrecto = loadSound("Sonidos/BotonIncorrecto.mp3");
  click = loadSound("Sonidos/clickbotones.mp3");
  sonidoCountdown = loadSound("Sonidos/countdown.mp3");
  sonidoPlayer1 = loadSound("Sonidos/player1.mp3");
    sonidoPlayer2 = loadSound("Sonidos/player2.mp3");
  sonidoGanador = loadSound("Sonidos/sonidoGanador-2.mp3");

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
//el random que va dentro de mis cuadros que se pintan de rojo
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

//fondo pantalla inicial juego
    image(fondoJuego,0,0,windowWidth,windowHeight)

    for (var k = 0; k < touches.length; k++) {
tamX = width / 4;
tamY = height / 4;

      if (touches[k].x > cuadros[10].x  && touches[k].x < cuadros[11].x&&
        touches[k].y > cuadros[10].y && touches[k].y > cuadros[14].y) {

          //si el boton es presionado cambia a modo instrucciones
          estado = 3;
if(click.isPlaying()==false){
       click.play();
       }
         else{
       
       click.pause();
       
       }


      } else if (touches[k].x >  cuadros[5].x && touches[k].x <  cuadros[6].x &&
        touches[k].y > cuadros[5].y && touches[k].y < cuadros[12].y){
      //si el boton es presionado cambia a modo juego
      estado=1;


      }
    }

  }
  //instrucciones
if(estado==3){


      image(fondoInstru,0,0,width,height)

       for (var d = 0; d < touches.length; d++){

      //botón de atrás
       if(touches[d].x > cuadros[10].x  && touches[d].x < cuadros[11].x&&
        touches[d].y > cuadros[10].y && touches[d].y <cuadros[14].y){
                 //si el boton es presionado cambia a modo pantalla inicio
                 estado=0;
if(click.isPlaying()==false){
       click.play();
       }
         else{
       
       click.pause();
       
       }

                 }
       }
       }

  //Modo jugar
  if (estado == 1) {

       if(sonidoPlayer1.isPlaying()==false){
       sonidoPlayer1.play();
       }
     

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
       textFont("Black Han Sans")
      fill(255, 0, 0)
      text(timer, width / 2, height / 2);
      if (frameCount % 60 == 0 && timer > 0) {
        timer = timer - 1
      }
//lo que me crea el countdown secreto
      if (frameCount % 60 == 0 && timerSecret > -2) {
        timerSecret = timerSecret - 1
      }

    }

    /* lo que dice que cuando el countdown llegue a 0, se pinten dos
    cuadros rojos, aún estoy tratando de que sean random*/
    if (timer == 0) {


      //decir que 5 cuadros random se ponen rojos cuando timer es 0
      cuadros[ran].colorito = 2;
      cuadros[ran2].colorito = 2
      cuadros[ran3].colorito = 2;
      cuadros[ran4].colorito = 2;
      cuadros[ran5].colorito = 2;

      //for que hace que cuando uno toque los rojos pierda
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
//si los toca pasa a estado de perder
          estado = 2;
if(botonIncorrecto.isPlaying()==false){
       botonIncorrecto.play();
       }
        } else{
       
       botonIncorrecto.pause();
       
       }
        
      //lo que me alarga visualmente los rojos por
      //un segundo extra después de que el countdown da 0
      if (timerSecret== -1) {
        //reseteo valores de los timer
        timer = 2;
        estadoTimer = 0;
        timerSecret = 2;
        //Doy de nuevo los valores a los random
 ran = (int)(Math.random() * 15) + 0
  ran2 = (int)(Math.random() * 15) + 0
  ran3 = (int)(Math.random() * 15) + 0
  ran4 = (int)(Math.random() * 15) + 0
  ran5 = 15

      }

    }
  }

    //contador de puntos
    textSize(32)
         fill(255);
  noStroke();
	miliseg = floor(millis() - tiempoAnterior);
	text(miliseg, width / 14, height / 24);

    push();
    textSize(30)
    textFont("Black Han Sans")
    fill(179, 218, 241)
    text('PLAYER 1', 95, height / 24+45)
pop();
   /* if (soniInicio.isPlaying() == false) {
        soniInicio.play();
      }
     else {
      soniInicio.stop();
    }
    */
  }
  else{
       if(sonidoPlayer1.isPlaying()){
       sonidoPlayer1.stop();
       
       }}

  //estado de perder
  if (estado == 2) {

   //if que hace que dure un poco la pantalla de juego
    //después de que una persona pierda
       if (frameCount % 60 == 0 && timerSecret1 > 0) {
        timerSecret1 = timerSecret1 - 1
      }
        if(timerSecret1==0){

        //fondo de perder
        image(fondoPierde,0,0,width,height)


         //contador
    fill(0)
    textSize(50)
      text(miliseg,width/3+25, height-height/3);

          //boton para  volver a jugar
    for (var p = 0; p < touches.length; p++) {

      if (touches[p].x > cuadros[10].x  && touches[p].x < cuadros[11].x&&
        touches[p].y > cuadros[10].y && touches[p].y < cuadros[14].y) {
if(click.isPlaying()==false){
       click.play();
       }
         else{
       
       click.pause();
       
       }

        //reseteo valores de timers y el contador
       estado= 6
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
  //pantalla jugador 2
  if(estado==6){
    
 if(sonidoPlayer2.isPlaying()==false){
       sonidoPlayer2.play();
       }
   //for que dibuja mis cuadros y juega con sus colores
    for (var l = 0; l < cuadros.length; l++) {

      cuadros[l].dibujarse();

      cuadros[l].colorito = 0;

      for (var t = 0; t < touches.length; t++) {
        //lo que me pinta los cuadros verde cuando paso con el dedo por ellos (JUGADOR 2)

        if (touches[t].x > cuadros[l].x && touches[t].x < cuadros[l].x + windowWidth / 4 &&
          touches[t].y > cuadros[l].y && touches[t].y < cuadros[l].y + windowHeight / 4) {

          cuadros[l].colorito = 4
          //lo que hace que vuelvan a estar negros los cuadros cuando no los toco
        } else {

         cuadros[l].colorito = 0

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
//lo que me crea el countdown secreto
      if (frameCount % 60 == 0 && timerSecret > -2) {
        timerSecret = timerSecret - 1
      }

    }

    /* lo que dice que cuando el countdown llegue a 0, se pinten dos
    cuadros rojos, aún estoy tratando de que sean random*/
    if (timer == 0) {


      //decir que 5 cuadros random se ponen rojos cuando timer es 0
      cuadros[ran].colorito = 2;
      cuadros[ran2].colorito = 2
      cuadros[ran3].colorito = 2;
      cuadros[ran4].colorito = 2;
      cuadros[ran5].colorito = 2;

      //for que hace que cuando uno toque los rojos pierda
      for (var e = 0; e < touches.length; e++) {
        if (touches[e].x > cuadros[ran].x && touches[e].x < cuadros[ran].x + cuadros[ran].tamX &&
          touches[e].y > cuadros[ran].y && touches[e].y < cuadros[ran].y + cuadros[ran].tamY ||
          touches[e].x > cuadros[ran2].x && touches[e].x < cuadros[ran2].x + cuadros[ran2].tamX &&
          touches[e].y > cuadros[ran2].y && touches[e].y < cuadros[ran2].y + cuadros[ran2].tamY ||
          touches[e].x > cuadros[ran3].x && touches[e].x < cuadros[ran3].x + cuadros[ran3].tamX &&
          touches[e].y > cuadros[ran3].y && touches[e].y < cuadros[ran3].y + cuadros[ran3].tamY ||
          touches[e].x > cuadros[ran4].x && touches[e].x < cuadros[ran4].x + cuadros[ran4].tamX &&
          touches[e].y > cuadros[ran4].y && touches[e].y < cuadros[ran4].y + cuadros[ran4].tamY ||
          touches[e].x > cuadros[ran5].x && touches[e].x < cuadros[ran5].x + cuadros[ran5].tamX &&
          touches[e].y > cuadros[ran5].y && touches[e].y < cuadros[ran5].y + cuadros[ran5].tamY) {
//si los toca pasa a estado de perder
          estado = 2.5;
if(botonIncorrecto.isPlaying()==false){
       botonIncorrecto.play();
       
        } else{
       
       botonIncorrecto.pause();
       
       }
        }
      //lo que me alarga visualmente los rojos por
      //un segundo extra después de que el countdown da 0
      if (timerSecret== -1) {
        //reseteo valores de los timer
        timer = 2;
        estadoTimer = 0;
        timerSecret = 2;
        //Doy de nuevo los valores a los random
 ran = (int)(Math.random() * 15) + 0
  ran2 = (int)(Math.random() * 15) + 0
  ran3 = (int)(Math.random() * 15) + 0
  ran4 = (int)(Math.random() * 15) + 0
  ran5 = 15

      }

    }
  }

    //contador de puntos
    textSize(32)
         fill(255);
  noStroke();
	miliseg1 = floor(millis() - tiempoAnterior);
	text(miliseg1, width / 14, height / 24);

    push();
    textFont("Black Han Sans")
    textSize(30)
    fill(152, 251, 152)
    text('PLAYER 2', 95, height / 24+45)
pop();






  }
   else{
       if(sonidoPlayer2.isPlaying()){
       sonidoPlayer2.stop();
       
       }}
 if(estado==2.5){

 image(fondoGanador,0,0,width,height)
   fill(0)
    textSize(50)
      text(miliseg,width/3+25, height-height/3);

          //boton para  volver a jugar
    for (var o = 0; o < touches.length; o++) {

      if (touches[o].x > cuadros[10].x  && touches[o].x < cuadros[11].x&&
        touches[o].y > cuadros[10].y && touches[o].y < cuadros[14].y) {
if(click.isPlaying()==false){
       click.play();
       }
         else{
       
       click.pause();
       
       }

        //reseteo valores de timers y el contador
       estado= 7
        timer = 2;
        estadoTimer = 0;
        timerSecret = 2;
        //estadoTimer=0
        setup();
      }

    }
 }

  if(estado==7){
    
    if(sonidoGanador.isPlaying()==false){
       sonidoGanador.play();
       }
    
    

  image(ganadorFue,0,0,width,height)


    if(miliseg>miliseg1){

      textSize(35)
      fill(179, 218, 241)
      textFont("Black Han Sans")
    text('PLAYER 1',tamX * 2+95, tamY * 2+120)
    }else {

    textSize(35)
      fill(152, 251, 152)
      textFont("Black Han Sans")
    text('PLAYER 2',tamX * 2+95, tamY * 2+120)
    }
    for (var g = 0; g < touches.length; g++) {
    if(touches[g].x > tamX, tamY * 3  && touches[g].x < tamX * 2, tamY * 3&&
        touches[g].y > cuadros[12].y  ){
      if(click.isPlaying()==false){
       click.play();
       }
         else{
       
       click.pause();
       
       }
      estado= 0
        timer = 2;
        estadoTimer = 0;
        timerSecret = 2;
        //estadoTimer=0
        setup();

    }
    }


  }else{
       if(sonidoGanador.isPlaying()){
       sonidoGanador.stop();
       
       }}




}



//la reticula de los cuadros
function cuadro(miX, miY) {

  this.tamX = width / 4
  this.tamY = height / 4
  this.x = miX
  this.y = miY
  this.colorito = 0
//CUADROS
  this.dibujarse = function() {
    //COLOR NEGRO(COLOR BASE)
    if (this.colorito == 0) {
      fill(0)
      //COLOR AZUL(JUGADOR 1)
    } else if (this.colorito == 1) {
      fill(179, 218, 241)
      //COLOR VERDE (JUGADOR 2)
    } else if(this.colorito==4){
      fill(152, 251, 152)
      //COLOR ROJO(PERDER)
    }else{
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
   if (estado == 6) {
   estado = 7
  }
  if (estado == 6) {
   estado = 2
  }
}
