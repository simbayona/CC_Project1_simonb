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
  sora = new Creature(150,430,25); // i created each of the creatures as the little squares with their own position and possibly their own
  goofy = new Creature(560,275,25); // size even tough they are all the same
  donald = new Creature(0,475,25);
}

function draw(){
  currentMinute = minute(); // I'm creating a variable so that I can keep track of the current minute based on my computer
  currentSecond = millis() / 500; // and one to track how long the sketch has been running in half seconds
  background(0);
  drawMoon();
  if(currentMinute % 4 == 0){ // In order to get the feeling that I wanted I wanted to overwhelm the users with info and colors this is "Chaos Mode"
    fill(200); // I changed the color of the spotlight to be just gray
    ellipse(mouseX,mouseY,200,200); // changedd the movement back to what one would expect from mouse controls
    drawSky(currentSecond); // this one is to make the stars in the background grow
    fill(20);
    rect(0,500,800,100); // this is just redrawing the floor area so that the light would still be behind
  } else{ // this is the normal state of the sketch
    drawSky(3);
    fill(255,254,196);
    ellipse(width - mouseX,height - mouseY,200,200); // i wanted to make the "contols" weird so that they would take a bit to get used time to
    noStroke();
    find(sora); // the find function shows the creature objecs only when the spotlight is close if not on them
    find(goofy);
    donald.move(); // the move method moves only one of the objects so that the others would stay consistent
    find(donald);
    fill(20);
    rect(0,500,800,100); // floor
    drawBox(30,450); // three crate looking boxes at the left that dissapear in "Chaos Mode"
    drawBox(110,450);
    drawBox(80,380);
  }
  noStroke();
  drawLamp(); // drawing the lamp to the right

}

function mousePressed(){
  console.log(mouseX,mouseY); // this is just for me to track where my mouse was when drawing
  if(mouseX<75 && mouseY<75){
    setup(); // this one runs setup to change the color of the objects when the user clicks on the moon
  }
}

function drawLamp(){ // I wanted to go with older looking lamp post to get a specific aesthetic
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
  if(currentMinute % 4 == 0){ // my one change for "chaos mode" was to get rid of the "light" that the lamp emits to make the user
    fill(0);                  // even more uncomfortable
  }else{
  fill(255,254,147);
  }
  quad(555,162,570,162,579,128,546,128); // this part specifically represents the light
}

function drawSky(size){ // I drew a bunch of small stars in the background at first but when I decided to make chaos mode I thought
  noStroke();          // it would be freaky to make them get bigger and change color
  r=int(random(75,255)); // these make them change color whenever draw is run so its very frequent
  g=int(random(75,255)); // also because they are normally so small it just looks like they are flickering like real stars
  b=int(random(75,255));
  fill(r,g,b);
  ellipse(178,68,size,size); // and I added a parameter called size that's based on the amount of time the sketch has been runnung
  ellipse(244,186,size,size);// to make them grow as the sketch goes on
  ellipse(408,15,size,size);// it think it makes them look overwhelming and cool
  ellipse(436,131,size,size);// kinda like the blobs mr incredible gets hit with in the first incredibles movie
  ellipse(525,202,size,size);
  ellipse(278,103,size,size);
  ellipse(562,48,size,size);
  ellipse(650,176,size,size);// btw the first is like 20 times better than the second
  ellipse(680,66,size,size);
  ellipse(65,224,size,size);
  ellipse(32,104,size,size);
}

function drawBox(x,y){ // this functions is pretty simply just drawing a crate based on one x,y pairing
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
function drawMoon(){ // This will not be noticable but I was bored so the moon changes its shade depening on the time of day
  currentHour = hour();
  if (currentHour>=6 && currentHour<12){ // these are times that the moon should not be visible
    fill(5);
  } else if (currentHour>=12 && currentHour<18){ // here the moon will be ever so slightly visible
    fill(40);
  } else{ // and here the moon will be bright but not white
    fill(200);
  }
ellipse(54,32,50,50); //this draws the actual moon
fill(0);
ellipse(63,26,5,8); // these two draw the little spots to make it look like an actual moon
ellipse(68,40,10,20);
}

function find(creature){
  if(((abs(creature.x - (width - mouseX)))<100) && ((abs(creature.y - (height - mouseY)))<100)){
    if(((abs(creature.x -(width - mouseX)))<100) && ((abs(creature.y + creature.size - (height - mouseY)))<100)){
      if(((abs(creature.x + creature.size - (width - mouseX)))<100) && ((abs(creature.y - (height - mouseY)))<100)){
        creature.display();
      } // so this is a real racket but basically the function checks to make sure that three of the points (which are the only you need if you know you have a square and are seaching in a square)
    } // are within 200 pixels in x and y directions from the center of the spotlight in normal mode
  } // only if the spotlight is highlighting where the object should be will it appear
  // i designed it this way so that the objects would dissapear in chaos mode, adding to the confusion
}// here is why I made the class constructor take x,y, and size as paremeters, this function takes the name of the object and passes
// it through to compare the three points based on the top left corner at this.x and this.y and the other two by adding this.size to one and then the other

class Creature { // this is my creature class
 constructor(x,y,size){ // the contructor makes a couple a varialbes to make the find function possible
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
    this.x += (currentMinute % 4); // I wanted to have something change besides Chaos Mode so I made one of the objects speed up depending on the minute
  } else{ // the modulo just moves from 0 - 3 but because the object isn't visible for currentMinute % 4 == 0 it really speeds up
         // from a speed of 1 - 3 
    this.x = 0
  }
 }
}
