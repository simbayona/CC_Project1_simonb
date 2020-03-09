let currentSecond;
let currentMinute;
let currentHour;
let sora;
let donald;
let goofy;
let r,g,b;


function setup(){
  createCanvas(800,600);
  background(0);
  sora = new Creature(150,430,25);
  goofy = new Creature(560,275,25);
  donald = new Creature(0,475,25);
}

function draw(){
  currentMinute = minute();
  currentSecond = millis() / 500;
  background(0);
  drawMoon();
  if(currentMinute % 4 == 0){
    fill(200);
    ellipse(mouseX,mouseY,200,200);
    fill(20);
    rect(0,500,800,100);
    drawSky(currentSecond);
  } else{
    drawSky(3);
    fill(255,254,196);
    ellipse(width - mouseX,height - mouseY,200,200);
    noStroke();
    find(sora);
    find(goofy);
    donald.move();
    find(donald);
    fill(20);
    rect(0,500,800,100);
    drawBox(30,450);
    drawBox(110,450);
    drawBox(80,380);
  }
  noStroke();
  drawLamp();

}

function mousePressed(){
  console.log(mouseX,mouseY);
  if(mouseX<75 && mouseY<75){
    setup();
  }
}

function drawLamp(){
  noStroke();
  fill(35);
  rect(550,480,25,75);
  rect(535,545,55,10);
  rect(540,540,45,7);
  rect(554,300,17,180);
  rect(550,295,25,10);
  rect(557,165,11,135);
  rect(540,190,45,5);
  quad(552,165,573,165,583,125,542,125);
  rect(542,123,40,2);
  triangle(554,124,571,124,562,110);
  if(currentMinute % 4 == 0){
    fill(0);
  }else{
  fill(255,254,147);
  }
  quad(555,162,570,162,579,128,546,128);
}

function drawSky(size){
  noStroke();
  r=int(random(75,255));
  g=int(random(75,255));
  b=int(random(75,255));
  fill(r,g,b);
  ellipse(178,68,size,size);
  ellipse(244,186,size,size);
  ellipse(408,15,size,size);
  ellipse(436,131,size,size);
  ellipse(525,202,size,size);
  ellipse(278,103,size,size);
  ellipse(562,48,size,size);
  ellipse(650,176,size,size);
  ellipse(680,66,size,size);
  ellipse(65,224,size,size);
  ellipse(32,104,size,size);
}

function drawBox(x,y){
  noStroke();
  fill(38,21,8);
  rect(x,y,70,70);
  stroke(0);
  strokeWeight(1);
  rect(x,y,70,15);
  rect(x,y+55,70,15);
  rect(x,y,15,70);
  rect(x+55,y,15,70);
}
function drawMoon(){
  currentHour = hour();
  if (currentHour>=6 && currentHour<12){
    fill(5);
  } else if (currentHour>=12 && currentHour<18){
    fill(40);
  } else{
    fill(200);
  }
ellipse(54,32,50,50);
fill(0);
ellipse(63,26,5,8);
ellipse(68,40,10,20);
}

function find(creature){
  if(((abs(creature.x - (width - mouseX)))<100) && ((abs(creature.y - (height - mouseY)))<100)){
    if(((abs(creature.x -(width - mouseX)))<100) && ((abs(creature.y + creature.size - (height - mouseY)))<100)){
      if(((abs(creature.x + creature.size - (width - mouseX)))<100) && ((abs(creature.y - (height - mouseY)))<100)){
        creature.display();
      }
    }
  }
}

class Creature {
 constructor(x,y,size){
 this.r = int(random(0,255));
 this.g = int(random(0,255));
 this.b = int(random(0,255));
 this.x = x;
 this.y = y;
 this.size = size
 }

 display(){
  fill(this.r, this.g, this.b);
  rect(this.x,this.y,this.size,this.size);
 }
 move(){
  if(this.x<=width){
    this.x += (currentMinute % 4);
  } else{
    this.x = 0
  }
 }
}
