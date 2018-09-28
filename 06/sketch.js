   //VARIABLES

      var posXbot1 = 200;
      var posYbot1 = 90;
      var tamBot1 = 102;

      //mi canción
      var bee;
      //duración de la canción
      var dur;
      //Lo que hace que el programa escuche la musica
      var miAnalizador;
      //el volumen de la musica
      var miVol;

      var deg;
      var rad;


      //subir la canción
      function preload() {
        bee = loadSound('assets/Earth__Wind_&_Fire_-_September.mp3');
      }

      function setup() {
        createCanvas(400, 400);

        //Play a la canción
        bee.play();

        //Duración de la canción
        dur = bee.duration();

        //Analizador
        miAnalizador = new p5.Amplitude();
        miAnalizador.setInput(bee);
      }

      function draw() {
        background(0);

        //Para cambiar el volumen según eje Y
        var miVol = map(mouseY, height, 0, 0, 1);
        bee.setVolume(miVol);


        //CAMBIO DE COLORES DEL BACKGROUND GENERAL POR EJE Y
        if (miVol > 0 && miVol < 0.3) {
          background(224, 241, 70);
        }
        if (miVol > 0.3 && miVol < 0.7) {
          background(210, 20, 210);
        }
        if (miVol > 0.7 && miVol < 1) {
          background(160, 90, 210);
        }

        //BRILLOS
        fill(255)
        noStroke();
        frameRate(24);
        ellipse(random(0, width), random(0, height), 2, 1);
        ellipse(random(0, width), random(0, height), 3, 2);
        ellipse(random(0, width), random(0, height), 2, 2);
        ellipse(random(0, width), random(0, height), 1, 3);
        ellipse(random(0, width), random(0, height), 1, 2);
        ellipse(random(0, width), random(0, height), 3, 2);
        ellipse(random(0, width), random(0, height), 3, 1);
        ellipse(random(0, width), random(0, height), 3, 3);
        ellipse(random(0, width), random(0, height), 2, 2);


        /*CAMBIO DE COLORES DEL BACKGROUND POR MOVIMIENTO EJE Y 
        SINCRONIZADO CON MÚSICA
        */
        if (bee.currentTime() > 0 && bee.currentTime() < 9) {
          background(254, 221, 0);
          if (miVol > 0 && miVol < 0.5) {
            background(254, 221, 0);
          }
          if (miVol > 0.5 && miVol < 1) {
            background(254, 240, 0);
          }
        }

        if (bee.currentTime() > 9 && bee.currentTime() < 10) {
          background(57, 255, 20);
          if (miVol > 0 && miVol < 0.5) {
            background(57, 255, 20);
          }
          if (miVol > 0.5 && miVol < 1) {
            background(55, 230, 25);
          }
        }

        if (bee.currentTime() > 10 && bee.currentTime() < 11) {
          background(20, 61, 42)
          if (miVol > 0 && miVol < 0.5) {
            background(20, 61, 42);
          }
          if (miVol > 0.5 && miVol < 1) {
            background(22, 42, 45);
          }
        }
        if (bee.currentTime() > 11 && bee.currentTime() < 12) {
          background(254, 221, 0)
          if (miVol > 0 && miVol < 0.5) {
            background(254, 221, 0)
          }
          if (miVol > 0.5 && miVol < 1) {
            background(244, 230, 5)
          }
        }
        if (bee.currentTime() > 12 && bee.currentTime() < 13) {
          background(20, 61, 0)
          if (miVol > 0 && miVol < 0.5) {
            background(20, 61, 0)
          }
          if (miVol > 0.5 && miVol < 1) {
            background(25, 85, 4)
          }
        }

        if (bee.currentTime() > 13 && bee.currentTime() < 14) {
          background(57, 255, 20)
          if (miVol > 0 && miVol < 0.5) {
            background(57, 255, 20)
          }
          if (miVol > 0.5 && miVol < 1) {
            background(55, 230, 25)
          }

        }

        if (bee.currentTime() > 14 && bee.currentTime() < 15) {
          background(220, 61, 42);
          if (miVol > 0 && miVol < 0.5) {
            background(220, 61, 42);
          }
          if (miVol > 0.5 && miVol < 1) {
            background(210, 61, 22);
          }
        }
        if (bee.currentTime() > 15 && bee.currentTime() < 16) {
          background(254, 221, 0);
          if (miVol > 0 && miVol < 0.5) {
            background(254, 221, 0);
          }
          if (miVol > 0.5 && miVol < 1) {
            background(234, 211, 0);
          }
        }
        if (bee.currentTime() > 16 && bee.currentTime() < 17) {
          background(57, 255, 20);
          if (miVol > 0 && miVol < 0.5) {
            background(57, 255, 20);
          }
          if (miVol > 0.5 && miVol < 1) {
            background(47, 255, 50);
          }
        }

        if (bee.currentTime() > 17 && bee.currentTime() < 18) {
          background(220, 61, 42);
          if (miVol > 0 && miVol < 0.5) {
            background(220, 61, 42);
          }
          if (miVol > 0.5 && miVol < 1) {
            background(200, 61, 32);
          }
        }
        if (bee.currentTime() > 18 && bee.currentTime() < 19) {
          background(254, 221, 0);
          if (miVol > 0 && miVol < 0.5) {
            background(254, 221, 0);
          }
          if (miVol > 0.5 && miVol < 1) {
            background(234, 211, 0);
          }
        }
        if (bee.currentTime() > 19 && bee.currentTime() < 20.3) {
          background(57, 255, 20);
          if (miVol > 0 && miVol < 0.5) {
            background(57, 255, 20);
          }
          if (miVol > 0.5 && miVol < 1) {
            background(37, 211, 20);
          }
        }

        //COMIENZO CANTO
        if (bee.currentTime() > 0 && bee.currentTime() < 20.3) {

          //TITULO DE CANCION
          fill(255);
          textFont("Righteous");
          textSize(50)
          textAlign(CENTER);
          text("SEPTEMBER", 200, 200);

          fill(255);
          textFont("Righteous");
          textSize(20);
          textAlign(CENTER);
          text("EARTH WIND & FIRE", 200, 230);

          fill(255);
          textFont("Times");
          textSize(10)
          textAlign(CENTER);
          text("Puedes desplazarte por la pantalla con el mouse", 200, 280);
          text("para interactuar con el video. Al mantener presionado el mouse", 200, 290)
          text("también encontraras distintas interacciones.", 200, 300)

        }


        //CONTROL LUCES
        if (bee.currentTime() > 20.3 && bee.currentTime() < 330) {
          //PISO y PAREDES
          fill(0);
          stroke(255)
          strokeWeight(1)
          quad(0, 400, 31, 366, 370, 366, 400, 400);
          quad(0, 400, 31, 366, 31, 0, 0, 0);
          quad(400, 400, 368, 366, 368, 0, 400, 0);
          // luz 1
          var deg = mouseX - 140;
          var rad = radians(deg);

          if (mouseIsPressed) {
            fill(random(255), random(255), random(255));

            push();
            rect(random(0, 400), random(0, 400), 50, 20);

            pop();
            if (mouseX > 0 && mouseX < 180) {
              push();
              rotate(rad);
              fill(249, 166, 2, 200);
              triangle(46, 0, 8, 341, 86, 352);
              pop();
              //luz 2

              push();
              rotate(rad);
              fill(255, 43, 2, 200);
              triangle(52, 0, 138, 340, 189, 303);
              pop();
            }
            if (mouseX > 240 && mouseX < 400) {
              //luz 3
              push();
              translate(300, 0);
              rotate(rad);
              fill(254, 168, 119, 200);
              triangle(0, 0, -110, 308, -60, 358);

              //luz 4

              rotate(rad);
              fill(21, 171, 0);
              triangle(6, 0, -31, 358, 40, 352);
              pop();


            }
          }

          //BOLA DISCO
          noStroke();
          fill(255, 255, 255, 70);
          ellipse(posXbot1, posYbot1, 125, 125);

          strokeWeight(1);
          stroke(250, 250, 250, 100)
          fill(255, 255, 255)
          ellipse(posXbot1, posYbot1, tamBot1, tamBot1);

          //Palito de la bola
          stroke(250);
          strokeWeight(3);
          line(200, 0, 200, 41);

          if (mouseIsPressed) {

            // cuadros de la bola disco
            if (forma == 0) {
              noStroke();
              fill(random(0, 255), 70, 90)
              rect(169, 74, 15, 15);
              rect(181, 74, 15, 15);
              rect(209, 87, 15, 15);
              rect(168, 108, 15, 15);
              rect(181, 119, 15, 15);
              rect(210, 112, 15, 15);
              rect(221, 112, 15, 15);
              rect(209, 87, 15, 15);
              rect(220, 75, 15, 15);

              //cuadrados chiquitos bola disco
              fill(50, random(0, 255), 80)
              rect(192, 63, 6, 6);
              rect(181, 94, 6, 6);
            }
          }
        }

        if (mouseX > posXbot1 - 20 && mouseX < posXbot1 - 20 + tamBot1 &&
          mouseY > posYbot1 - 50 && mouseY < posYbot1 - 50 + tamBot1) {
          forma = 0;
        }

        //OBJETOS QUE VAN A APARECER EN MOMENTOS

        //1 Calendario
        if (bee.currentTime() > 23 && bee.currentTime() < 27) {
          push();
          fill(255);
          strokeWeight(1);
          textFont("Times")
          textSize(10)
          textAlign(CENTER);
          text("SEPTEMBER", mouseX + 40, mouseY - 7)

          pop();

          push();
          fill(255);
          strokeWeight(1);
          textFont("Times")
          textSize(50)
          textAlign(CENTER);
          text("21", mouseX + 60, mouseY + 50)

          pop();
          noFill();
          strokeWeight(3);
          stroke(255)
          rect(mouseX, mouseY, 91, 91)


          noFill();
          strokeWeight(3);
          stroke(255)
          rect(mouseX, mouseY - 20, 91, 21)

        }
        // 2 corazones 1
        if (bee.currentTime() > 27 && bee.currentTime() < 30) {
          noStroke();
          fill(255);
          ellipse(mouseX, mouseY, 17, 23);
          ellipse(mouseX + 10, mouseY, 17, 23);

          beginShape();
          vertex(mouseX - 3, mouseY + 30);
          vertex(mouseX + 17, mouseY + 9);
          vertex(mouseX + 19, mouseY);
          vertex(mouseX - 7, mouseY - 6);
          vertex(mouseX - 8, mouseY);
          endShape(CLOSE);
        }
        // 3 nubes
        if (bee.currentTime() > 30 && bee.currentTime() < 36) {
          noStroke();
          fill(255);
          ellipse(mouseX, mouseY, 80, 70);
          ellipse(mouseX + 43, mouseY - 24, 75, 61);
          ellipse(mouseX + 52, mouseY + 17, 60, 53);
          ellipse(mouseX + 73, mouseY, 40, 30);

        }

        // 4 corazones
        if (bee.currentTime() > 36 && bee.currentTime() < 38) {
          noStroke();
          fill(255);
          ellipse(mouseX, mouseY, 17, 23);
          ellipse(mouseX + 10, mouseY, 17, 23);

          beginShape();
          vertex(mouseX - 3, mouseY + 30);
          vertex(mouseX + 17, mouseY + 9);
          vertex(mouseX + 19, mouseY);
          vertex(mouseX - 7, mouseY - 6);
          vertex(mouseX - 8, mouseY);
          endShape(CLOSE);
        }
        // 5 Signo musica
        if (bee.currentTime() > 38 && bee.currentTime() < 41) {
          
          stroke(0);
        line(mouseX,mouseY,mouseX+55,mouseY);
        line(mouseX+55,mouseY,mouseX+55,mouseY+48);
        line(mouseX,mouseY,mouseX,mouseY+50);
          
          push();
          fill(0);
        ellipse(mouseX-10,mouseY+50,21,21);
        ellipse(mouseX+44,mouseY+50,21,21);
          pop();
        }
        //6 luna
         if (bee.currentTime() > 41 && bee.currentTime() < 49) {
        push();
        strokeWeight(2)
           fill(255)
        quad(mouseX,mouseY,mouseX+90,mouseY+76,mouseX-31,mouseY+146,mouseX+35,mouseY+69);
        pop();
         }
        //7 estrella
        if (bee.currentTime() > 49 && bee.currentTime() < 51) {
          //8 HEY HEY HEY
          push();
          fill(255);
          strokeWeight(1);
          textFont("Times")
          textSize(20)
          textAlign(CENTER);
          text("HEY HEY HEY", mouseX + 40, mouseY - 7)
          pop();
        }
        if (bee.currentTime() > 50 && bee.currentTime() < 60) {
          // 9 BA DE YA

          push();
          fill(255);
          strokeWeight(1);
          textFont("Times")
          textSize(20)
          textAlign(CENTER);
          text("BA DE YA", mouseX + 40, mouseY - 7)
          pop();
        }

        //10 nubes
            if (bee.currentTime() > 61 && bee.currentTime() < 66) {
          noStroke();
          fill(255);
          ellipse(mouseX, mouseY, 80, 70);
          ellipse(mouseX + 43, mouseY - 24, 75, 61);
          ellipse(mouseX + 52, mouseY + 17, 60, 53);
          ellipse(mouseX + 73, mouseY, 40, 30);
            }
        //11 BA DU DUDU

  
        if (bee.currentTime() > 66 && bee.currentTime() < 80) {
          push();
          fill(255);
          strokeWeight(1);
          textFont("Times")
          textSize(20)
          textAlign(CENTER);
          text("BA DU DUDU", mouseX + 40, mouseY - 7)
          pop();
        }
                  // 12 pensamiento
        if (bee.currentTime() > 80 && bee.currentTime() < 87) {
          noStroke();
          fill(255);
          ellipse(mouseX, mouseY, 80, 70);
          ellipse(mouseX + 43, mouseY - 24, 75, 61);
          ellipse(mouseX + 52, mouseY + 17, 60, 53);
          ellipse(mouseX + 73, mouseY, 40, 30);
          
          ellipse(mouseX-10,mouseY+30,10,10)
          ellipse(mouseX-20,mouseY+40,10,10)
            }
        

        //14 blue
        if (bee.currentTime() > 87 && bee.currentTime() < 97) {
          push();
          fill(0,20,255);
          ellipse(mouseX,mouseY,50,50)
        pop();
        }
        // 15 DECEMBER
        if (bee.currentTime() > 97 && bee.currentTime() < 100) {
          push();
          fill(255);
          strokeWeight(1);
          textFont("Times")
          textSize(10)
          textAlign(CENTER);
          text("DECEMBER", mouseX + 40, mouseY - 7)

          pop();

          push();
          fill(255);
          strokeWeight(1);
          textFont("Times")
          textSize(50)
          textAlign(CENTER);
          text("21", mouseX + 60, mouseY + 50)

          pop();
          noFill();
          strokeWeight(3);
          stroke(255)
          rect(mouseX, mouseY, 91, 91)


          noFill();
          strokeWeight(3);
          stroke(255)
          rect(mouseX, mouseY - 20, 91, 21)
        }
          // 16 september
          if (bee.currentTime() > 100 && bee.currentTime() < 104) {
            push();
            fill(255);
            strokeWeight(1);
            textFont("Times")
            textSize(10)
            textAlign(CENTER);
            text("SEPTEMBER", mouseX + 40, mouseY - 7)

            pop();

            push();
            fill(255);
            strokeWeight(1);
            textFont("Times")
            textSize(50)
            textAlign(CENTER);
            text("21", mouseX + 60, mouseY + 50)

            pop();
            noFill();
            strokeWeight(3);
            stroke(255)
            rect(mouseX, mouseY, 91, 91)


            noFill();
            strokeWeight(3);
            stroke(255)
            rect(mouseX, mouseY - 20, 91, 21)

          }
          //17 blue
          if (bee.currentTime() > 104 && bee.currentTime() < 110) {
          push();
          fill(0,20,255);
          ellipse(mouseX,mouseY,50,50)
        pop();
          }
          //18 hey hey hey
           if (bee.currentTime() > 110 && bee.currentTime() < 113) {
          
          push();
          fill(255);
          strokeWeight(1);
          textFont("Times")
          textSize(20)
          textAlign(CENTER);
          text("HEY HEY HEY", mouseX + 40, mouseY - 7)
          pop();
        }
          //19 badeya
           if (bee.currentTime() > 113 && bee.currentTime() < 400) {
          

          push();
          fill(255);
          strokeWeight(1);
          textFont("Times")
          textSize(20)
          textAlign(CENTER);
          text("BA DE YA", mouseX + 40, mouseY - 7)
          pop();
        }
          //20 september
          //21 badeya
          //22 nubes
          //23badeya
        
      }
