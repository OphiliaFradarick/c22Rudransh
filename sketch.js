const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, canvas, ground;

function setup(){
  canvas = createCanvas(400,400);
  engine = Engine.create();
  world= engine.world;

  var option1 ={
    isStatic:true
  }

  ground = Bodies.rectangle(200,380,400,10,option1);
  World.add(world,ground);

 

}

function draw(){
  background(0);
  Engine.update(engine);

  rectMode(CENTER);
  fill("lightgreen");
  rect (ground.position.x, ground.position.y, 400,10);

 

}




