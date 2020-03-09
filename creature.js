class Creature {
 public let x;
 public let y;

 constructor(){
 this.r = int(random(0,255));
 this.g = int(random(0,255));
 this.b = int(random(0,255));

 }

 display(){
  fill(this.r, this.g, this.b);
  rect(x,y,50,50);
 }
}
