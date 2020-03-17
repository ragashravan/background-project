const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ball;


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

   var ball_options ={
    isStatic: true
   }

   ball = Bodies.circle(200,100,20,ball_options);
   World.add(world,ball);
   
}

function draw(){
    background(230,40,45);
    Engine.update(engine);
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20,20);
}



 
