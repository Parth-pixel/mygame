const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/backgroundimage2.jpg");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ball1 = new Ball(750,300,20);
    ground = new Ground(600,390,1200,20);
  

    box1 = new Box(900,100,70,70);
    box2 = new Box(900,20,70,70);
    

    box3 = new Box(900,300,70,70);
    box4 = new Box(900,350,70,70);
    

    box5 = new Box(900,350,70,70);
   
    slingshot = new SlingShot(ball1.body,{x:750,y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(5);
    push();
    textSize(50);
    fill("blue");
   // stroke(2);
    text("Use the up arrow key",50,50);
    pop();
    box1.display();
    box2.display();
    ground.display();
    //pig1.display();
    //log1.display();
    ball1.display();
    box3.display();
    box4.display();
   // pig3.display();
   // log3.display();

    box5.display();
   // log4.display();
    //log5.display();

    //bird.display();
   // platform.display();
    //log6.display();
 slingshot.display();    
}
function mouseDragged(){
   Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY});
}
function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(ball1.body, ball1.body.position,{x:-50,y:-50})
    }
}
   

