function setup() {
  createCanvas(600, 600);
	  background(255, 245, 220);

  //cuadros del background
  
  //engaño fondo
  noStroke();
  fill(255,245,220);
  quad(0,315,0,600,356,600,328,319);
  
  noStroke();
  fill(217,227,2297,100);
  quad(0,315,0,600,90,600,90,315);
   noStroke();
  fill(217,227,2297,100);
  quad(0,315,0,600,90,600,90,315);
  
  
  noStroke();
  fill(238,212,221,110);
  beginShape();
vertex(25, 0) ;
vertex(169, 0) ;
vertex (240,241) ;
  vertex(115,252);
  vertex(0,152);
  vertex(0,86);
endShape() ;
  
  noStroke();
  fill(237,225,227,130);
  quad(259,31,302,97,345,68,305,1);
  
  noStroke();
  fill(200,212,212,100);
  triangle(0,152,0,310,117,254)
  
  
  
	//TRIANGULOS
	stroke(0)
	fill(197,166,46,220);
	strokeWeight(1)
	triangle(341,407,422,319,450,439);
	
	fill(181,114,35,170);
	strokeWeight(1)
	triangle(318,87,330,79,473,327);
	
	fill(180,113,35,170);
	strokeWeight(1)
	triangle(334,76,463,271,345,69);
	
	fill(180,113,35,170);
	strokeWeight(1)
	triangle(344,22,356,15,489,259);
	
	fill(127,107,36,234);
	strokeWeight(1)
triangle(9,198,192,80,227,198);
	
	fill(0);
	noStroke();
	triangle(114,0,284,94,126,0);
  


  //CUADRADOS
  
  //triki 1
  stroke(2)
  fill(114,0,15,240)
  rect(483,491,44,41);
  
    stroke(2)
  fill(255)
quad(519,62,549,63,549,93,518, 92);
  
  stroke(2)
  fill(226,82,97,240)
quad(550,64,580,65,580,94,550, 93);
  
  stroke(2)
  fill(255)
quad(549,93,580,93,580,127,548, 126);
  
  stroke(2)
  fill(243,167,154,240)
quad(518,92,549,93,548,126,517, 124);
  
  //triki 2
  
    stroke(2)
  fill(0)
quad(278,64,296,53,306,69,289, 81);
  
  
  stroke(2)
  fill(236,222,222)
quad(267,48,285,37,296,53,278, 64);
  
  stroke(2)
  fill(236,222,222)
quad(274,20,291,10,301,27,285, 37);
  
  stroke(2)
  fill(236,222,222)
quad(296,53,310,44,320,61,306, 70);
  
  stroke(2)
  fill(236,222,222)
quad(302,27,316,18,326,35,312, 43);
  
  stroke(2)
  fill(236,222,222)
quad(306,69,318,86,300,98,289, 81);
  
  stroke(2)
  fill(0)
  quad(306,69,320,60,330,78,318, 87);
  
  stroke(2)
  fill(0, 0,0,230)
quad(0,210,114,189,116,196,0, 219);
  
  stroke(2)
  fill(102, 20,24,230)
quad(0,233,69,212,73,215,0, 240);
  
  //CIRCULOS ESCONDIDOS ATRAS DE LO VERDE
  
  //piel y rojo
   strokeWeight(3)
  stroke(195,97,94);
  fill(254,239,220,200);
  ellipse(247,132,89,89);
  
  //amarillo y azul
  
  stroke(211,197,74);
  fill(224,221,238,240);
  ellipse(247,132,60,60);
  
  noStroke(195,97,94);
  fill(0);
  ellipse(247,132,26,26);
  
   //parte verde triangulo grande
  
  strokeWeight(1)
  stroke(2)
  fill(17,67,48)
quad(192,80,209,68,293,198,225, 198);
  
  //medias elipses
  
  strokeWeight(3)
  stroke(216,202,68);
  fill(241,231,230);
  ellipse(40,309,100,100);
  
  strokeWeight(3)
  stroke(237,50,20);
  fill(241,231,230);
  ellipse(146,313,100,100);
  
  strokeWeight(2)
  stroke(0);
  fill(241,231,230);
  ellipse(248,312,100,100);
  
   //engaño fondo
  noStroke();
  fill(255,245,220);
  quad(0,315,0,600,356,600,328,319);
  
 //ENGAÑOS MEDIAS ELIPSES
  
  //1
  
  strokeWeight(1)
  stroke(0);
  fill(255,245,220);
  ellipse(94,369,100,100);
  
  noStroke();
  fill(255,245,220);
  quad(0,377,152,377,152,600,0,600);
  
  
  //2
  
   strokeWeight(1)
  stroke(0);
  fill(255,245,220);
  ellipse(146,425,100,100);
  
  noStroke();
  fill(255,245,220);
  quad(90,445,206,445,206,600,90,600);
  
  
  
  //3
  
  strokeWeight(1)
  stroke(0);
  fill(255,245,220);
  ellipse(199,495,100,100);
  
  noStroke();
  fill(255,245,220);
  quad(90,504,270,504,270,600,90,600);
  
  
  
  //linea grande centro
  
  strokeWeight(1)
  stroke(2)
  fill(143,137,123)
quad(83,318,159,261,165,268,87,326);
  
  stroke(2)
  fill(0)
quad(159,261,198,230,206,238,165, 268);
  
  stroke(2)
  fill(185,10,0,236)
quad(198,230,324,135,329,143,206, 238);
  
  stroke(2)
  fill(61,132,71,220)
quad(324,135,329,143,398,92,393, 83);
  
  stroke(2)
  fill(0)
quad(393,83,398,92,523,0,508, 0);
  
  stroke(2)
  fill(255)
quad(35,353,38,360,87,326,83, 318);
	
  stroke(2)
  fill(0)
quad(18,365,23,371,38,360,35, 353);
  
  

  
  //CIRCULOS SIMPLES
  
  //morado
  stroke(1);
  fill(128,97,165);
  ellipse(284,395,72,72);
	
  //azul
   stroke(1);
  fill(43,87,156,200);
  ellipse(355,99,83,83);
  
  //verde gris
   stroke(1);
  fill(111,112,108,220);
  ellipse(430,459,119,122);
  
  //circulos complejos
  
  //negro
  noStroke(1);
  fill(0);
  ellipse(182,135,74,76);
  
  //piel
  noStroke(1);
  fill(216,207,210);
  ellipse(182,135,57,58);
  
  //negro chiquito
  noStroke(1);
  fill(0);
  ellipse(188,133,10,10);
  
  
  
  
  
  //lineas
	strokeWeight(1)
  stroke(0);
	line(198,209,424, 448);
	line(0,315,424, 319);
	line(168,0,326, 536);
	line(198,393,397, 393);
	line(257,492,406, 492);
	line(0,149,114, 250);
	
	//lineas triki
  strokeWeight(2)
	line(466,60,600,65);
	line(463,122,600, 128);
	line(466,91,600, 94);
  
  line(520,20,516, 173);
	line(550,20,547, 173);
	line(580,20,580, 173);
	
	line(257,31,591, 549);
	line(89,274,89, 600);
	
	//rayitas seguidas
  
  strokeWeight(1)
	line(42,397,181, 246);
	line(47,400,186, 250);
	line(38,396,177, 245);
	
	line(58,469,198, 318);
	line(62,470,202, 319);
	line(67,473,206, 323);
	
	//lineas cuadro rojito
	line(506,509,540, 509);
	line(506,516,540, 516);
	
	//lineas arriba izquierda
	line(23,0,0, 91);
	line(0,75,143, 0);
	line(0,44,92, 0);
	line(0,49,104, 0);
	line(58,128,193, 0);
	line(97,64,174, 0);
	line(132,78,233, 4);
	
	//triki 2 hori.
  
  strokeWeight(1)
	line(62,470,202, 319);
	line(257,31,306, 0);
	line(278,64,326, 35);
	line(267,48,316, 18);
	line(289,81,334, 51);
	line(300,98,352, 63);
	line(312,118,366,85);
	line(366,85,312, 118);
	
	//triki 2 vert
	line(274,20,317, 85);
	line(291,10,330, 78);
	line(291,10,333, 76);
	line(62,470,202, 319);
	line(306,0,344, 68);
  
  noFill();
  triangle(331,0,344,23,379,0)
	
	
	//lineas gruesas
	strokeWeight(5);
	line(0,102,76, 0);
	line(293,149,547, 230);
  line(199,211,425,450);
	
	//lineas de colores

  strokeWeight(4);
	stroke(49,75,50,220);
	line(4,104,80, 1);
  
  stroke(49,75,50,220);
	line(110,0,280, 94);
  
  strokeWeight (2)
  stroke(232,225,130,200);
	line(132,81,235, 6);
	
  strokeWeight (3)
  stroke(189,107,96,200);
  line(0,73,140,0);
  
  strokeWeight (3)
  stroke(185,211,214,200);
  line(0,317,424,321);
  
	
	
  
  
  
  //partes cuadradas y triangulos raros chiquitos
  
  //1
  
  noStroke(1)
  fill(186,194,85)
quad(296,267,305,254,240,187,235, 192);
  
  noStroke(1)
  fill(255)
quad(235,192,240,187,216,159,212, 162);
  
  noStroke();
  fill(221,6,3)
  triangle(216,159,212,162,199,143);
  
  //2
  
  noStroke(1)
  fill(221,6,3)
quad(229,76,235,81,218,97,214, 93);
  
  noStroke(1)
  fill(255)
quad(214,93,218,97,209,106,206, 103);
  
  noStroke();
  fill(221,6,3)
  triangle(206,103,209,106,195,118);
  
  
  //3
  noStroke(1)
  fill(110,109,107)
quad(107,93,128,103,126,114,102, 108);
  
  noStroke(1)
  fill(221,6,3)
quad(128,103,126,114,137,116,139, 108);
  
  noStroke(1)
  fill(255)
quad(137,116,139,108,149,113,147, 118);
  
  noStroke();
  fill(221,6,3)
  triangle(147,118,173,125,149,113);
  
  
}

