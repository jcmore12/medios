// Estado 0 = Instrucciones
// Estado 1 = Jugando
// Estado 2 = Perdió
//variables del x y Y
var x = 0
var y = 0
//variable del estado inicial
var estado = 0;

//variable del punto de comienzo de partida de mi timer
var timer = 5;
//variable del arreglo de mis cuadros
var cuadros = [];
//variables tamaño de mi cuadros
var tamX;
var tamY;

//variable numero de cuadros
var numRects = 16;


function setup() {
  createCanvas(windowWidth, windowHeight);
  //background(0)
  //tamaño fijo de mis cuadros
  var tamX = width / 4;
  var tamY = height / 4;
  //for que recorre todos mis cuadros pero que no hace nada aún
  for (var i = 0; i < numRects; i++) {

  }
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

}

function draw() {

  //Instrucciones
  if (estado == 0) {


    fill(0);
    rect(0, 0, windowWidth, windowHeight);
    fill(255);
    textSize(20);
    textAlign(CENTER, CENTER);
    text("Toca en cualquier parte para comenzar", width / 2, height / 2);
    for (var k = 0; k < touches.length; k++) {

      if (touches[k].x > 0 && touches[k].x < windowWidth) {
        if (touches[k].y > 0 && touches[k].y < windowHeight) {

          //si el boton es presionado cambia a modo jugar
          estado = 1;

        }

      }
    }
  }

  //Modo jugar
  if (estado == 1) {

    //lo que proximamente sera el contador de puntos
    fill(0);
    rect(0, 0, 100, 50);
    fill(255);
    textSize(12);
    text(frameCount, 20, 20);

    //for que dibuja mis cuadros y juega con sus colores
    for (var i = 0; i < cuadros.length; i++) {

      cuadros[i].dibujarse();

      cuadros[i].color = 0

      for (var j = 0; j < touches.length; j++) {
        //lo que me pinta los cuadros azules cuando paso con el dedo por ellos

        if (touches[j].x > cuadros[i].x && touches[j].x < cuadros[i].x + windowWidth / 4 &&
          touches[j].y > cuadros[i].y && touches[j].y < cuadros[i].y + windowHeight / 4) {

          cuadros[i].colorito = 1
          //lo que hace que vuelvan a estar negros los cuadros cuando no los toco
        } else {

          cuadros[i].colorito = 0

        }



        //Posible pantalla de perdió

        // if(estado==3){
        //if(touches[j].x<cuadros[7].x && touches[j].x < cuadros[7].x + width/2 &&
        //touches[j].y > cuadros[7].y && touches[j].y < cuadros[7].y +height/2){
        //background(255,0,0)
        // fill(255)
        // textSize(50)
        // text("Perdió", width/2,height/2)
        //}

      }

    }


  }


  //Lo que me crea el countdown
  if (estado == 1) {

    textAlign(CENTER, CENTER);
    textSize(200);
    noStroke();
    fill(255, 0, 0)
    text(timer, width / 2, height / 2);
    if (frameCount % 60 == 0 && timer > 0) {
      timer = timer - 1
    }

    /* lo que dice que cuando el countdown llegue a 0, se pinten dos
    cuadros rojos, aún estoy tratando de que sean random*/
    if (timer == 0) {

      //ran=(int) (Math.random()*15)+0;
      cuadros[7].colorito = 2;
      cuadros[13].colorito = 2;

      estado = 0;
    }

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