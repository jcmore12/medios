//El tiempo realmente solo es una acumulaciøn de eventos . 
//Esto quiere decir que todos los puntos son pasado, presente y futuro
//Considero que los relojes comunes solo muestran la hora como un punto
//en el dia, cuando realmente es un acumulado de lo que se ha perdido
//del día. Mi reloj propone presionar a las presonas a aprovechar mejor su 
//día


//variables minuto para barra lateral
var miMinuto;
var miMinutoModificado;

//variables segundo para barra lateral
var miSegundo;
var miSegundoModificado;

//variables Hora para reloj ascendente

var miHora;
var miHoraModificado;


function setup() {
  createCanvas(300, 600);
}

function draw() {
  background(0);

  //Fondo del reloj que representa si es de día  de noche
  push(); {
    if (hour() > 18 && hour()<6) { //PM

      //fondo noche
      background(0, 0, 64);

      //estrellitas 
      fill(255)
      noStroke();
      ellipse(100, 400, 2, 1);
      ellipse(230, 300, 2, 1);
      ellipse(170, 89, 3, 2);
      ellipse(150, 540, 3, 2);
      ellipse(290, 480, 1, 2);
      ellipse(69, 160, 2, 2);
      ellipse(200, 100, 3, 1);
      ellipse(100, 310, 2, 3);
      ellipse(40, 500, 1, 2);

      //luna lunera

      translate(70, 60)
      fill(255, 255, 255, 80);
      noStroke();
      ellipse(0, miHoraModificado, 70, 70)
      fill(255);
      ellipse(0, miHoraModificado, 60, 60)

    } else {

      //fondo Día
      background(131, 181, 221);

      push();

      //sol
      translate(70, 60)
      fill(250, 210, 1);
      noStroke();
      ellipse(0, miHoraModificado, 60, 60)

    }
    pop();

    //lo que representan las variables de tiempo
    miMinuto = minute();
    miHora = hour();
    miSegundo = second();

    //reglas de tres para conversion de medidas
    miHoraModificado = map(miHora, 0, 23, 0, 599)
    miMinutoModificado = map(miMinuto, 0, 59, 0, 599)
    miSegundoModificado = map(miSegundo, 0, 59, 0, 599)



    //EL RELOJ CENTRAL

    //cuadrantes verdes
    if (miHoraModificado > 0 && miHoraModificado < 100) {
      noStroke();
      fill(52, 155, 44)
      quad(0, 0, 300, 0, 300, miHoraModificado, 0, miHoraModificado)
    }
    if (miHoraModificado > 101 && miHoraModificado < 200) {
      noStroke();
      fill(98, 153, 44)
      quad(0, 0, 300, 0, 300, miHoraModificado, 0, miHoraModificado)
    }
    //cuadrantes naranjas
    if (miHoraModificado > 201 && miHoraModificado < 300) {
      noStroke();
      fill(243, 152, 9)
      quad(0, 0, 300, 0, 300, miHoraModificado, 0, miHoraModificado)
    }
    if (miHoraModificado > 301 && miHoraModificado < 400) {
      noStroke();
      fill(242, 93, 10)
      quad(0, 0, 300, 0, 300, miHoraModificado, 0, miHoraModificado)
    }
    //cuadrantes Rojos
    if (miHoraModificado > 401 && miHoraModificado < 500) {
      noStroke();
      fill(239, 34, 12)
      quad(0, 0, 300, 0, 300, miHoraModificado, 0, miHoraModificado)
    }
    if (miHoraModificado > 501 && miHoraModificado < 599) {
      noStroke();
      fill(178, 2, 2)
      quad(0, 0, 300, 0, 300, miHoraModificado, 0, miHoraModificado)
    }
    //barra lateral que baja por cada minuto que pasa

    noStroke();
    fill(238, 0, 0,150)
    quad(296, 0, 300, 0, 300, miMinutoModificado, 296, miMinutoModificado)

    //barra lateral que baja por cada segundo que pasa

    noStroke();
    fill(0, 0, 255,110)
    quad(0, 0, 3, 0, 3, miSegundoModificado, 0, miSegundoModificado)
  }

  
  //Silueta casas

  fill(0)
  beginShape();
  vertex(0, 600);
  vertex(0, 542);
  vertex(16, 542);
  vertex(16, 554);
  vertex(21, 554);
  vertex(21, 579);
  vertex(26, 579);
  vertex(26, 569);
  vertex(31, 569);
  vertex(31, 542);
  vertex(36, 542);
  vertex(36, 533);
  vertex(56, 533);
  vertex(56, 544);
  vertex(59, 544);
  vertex(59, 562);
  vertex(71, 562);
  vertex(71, 567);
  vertex(81, 567);
  vertex(81, 527);
  vertex(92, 527);
  vertex(92, 527);
  vertex(92, 556);
  vertex(100, 556);
  vertex(100, 536);
  vertex(104, 536);
  vertex(104, 528);
  vertex(111, 528);
  vertex(111, 510);
  vertex(117, 510);
  vertex(117, 528);
  vertex(121, 528);
  vertex(121, 535);
  vertex(126, 535);
  vertex(126, 554);
  vertex(132, 554);
  vertex(132, 561);
  vertex(137, 561);
  vertex(137, 534);
  vertex(145, 522);
  vertex(151, 534);
  vertex(151, 561);
  vertex(165, 561);
  vertex(165, 514);
  vertex(193, 560);
  vertex(199, 560);
  vertex(199, 534);
  vertex(225, 534);
  vertex(225, 559);
  vertex(237, 559);
  vertex(237, 513);
  vertex(259, 513);
  vertex(259, 557);
  vertex(282, 557);
  vertex(282, 570);
  vertex(289, 570);
  vertex(289, 534);
  vertex(300, 534);
  vertex(300, 600);
  endShape(CLOSE);
  
  //marcas de etapas del día
  strokeWeight(1)
  stroke(0)
  line(0,200,300,200)
  line(0,400,300,400)
}
