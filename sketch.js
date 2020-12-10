const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon,polygonImg;
var backgroundIMG;

function preload(){
  polygonImg=loadImage("polygon.png");
 
}
function setup() {
  var canvas = createCanvas(1000,400);
  engine = Engine.create();
  world = engine.world;
  b1=new Block(480,275,30,4);
  b2=new Block(510,275,30,40);
  b3=new Block(540,275,30,40);
  b4=new Block(570,275,30,40);
  b5=new Block(600,275,30,40);
  b6=new Block(450,275,30,40);
  b7=new Block(630,275,30,40);
  b8=new Block(480,235,30,40);
  b9=new Block(510,235,30,40);
  b10=new Block(540,235,30,40);
  b11=new Block(570,235,30,40);
  b12=new Block(600,235,30,40);
  b13=new Block(510,195,30,40);
  b14=new Block(530,195,30,40);
  b15=new Block(560,195,30,40);
  b16=new Block(530,155,30,40);
  b17=new Block(800,100,30,40);
  b18=new Block(800,140,30,40);
  b19=new Block(830,140,30,40);
  b20=new Block(770,140,30,40);
  b21=new Block(800,180,30,40);
  b22=new Block(830,180,30,40);
  b23=new Block(860,180,30,40);
  b24=new Block(770,180,30,40);
  b25=new Block(740,180,30,40);
  ground1=new Ground(500,390,1000,20);
  ground2=new Ground(550,305,250,20);
  ground3=new Ground(800,205,250,20);
  var options={
    density:2.5,
    restitution:0.5,
    friction:1.2,
  }
  polygon=Bodies.circle(200,200,20,options);
  World.add(world,polygon);
  slingshot=new SlingShot(this.polygon,{x:200,y:200});
}
function draw() {
  background("white"); 
  Engine.update(engine);
  fill(135,206,234);
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  fill(254,192,203);
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  fill(63,224,208);
  b13.display();
  b14.display();
  b15.display();
  fill(128,128,128);
  b16.display();
  fill(254,192,203);
  b17.display();
  fill(63,224,208);
  b18.display();
  b19.display();
  b20.display();
  fill(135,206,234);
  b21.display();
  b22.display();
  b23.display();
  b24.display();
  b25.display();
  slingshot.display();
  ground1.display();
  ground2.display();
  ground3.display();
  imageMode(CENTER);
  image(polygonImg,this.polygon.position.x,this.polygon.position.y,40,40);
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  slingshot.fly();
}
