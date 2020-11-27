var a;
var b;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var ground;

var ball;

function setup() {
  createCanvas(400,400);
  
  engine = Engine.create();
  world = engine.world;
  var ground_options={
    isStatic:true
  }

  ground = Bodies.rectangle(200,390,200,50,ground_options);
  World.add(world, ground);
  
  var ball_option={
    restitution=1.0
  }

  ball = Bodies.circle(200,100,20,ball_option);
  World.add(world, ball);
}

function draw() {
  background(0);  
  ellipseMode(RADIUS);
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20,20);
  rect(ground.position.x,ground.position.y,50,50);
  
  rectMode(CENTER);
  drawSprites();
}