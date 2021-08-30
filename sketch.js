const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

let engine;
let world;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  ball = Bodies.circle(200,100,15)
  World.add(world,ball)

  connect = Constraint.create({
    pointA:{x:200,y:20},
    bodyB:ball,
    length:100,
    stiffness:0.01
  })
  World.add(world,connect)
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
  ball2 = Bodies.circle(200,300,15)
  World.add(world,ball2)

  connect2 = Constraint.create({
    bodyA:ball,
    bodyB:ball2,
    length:100,
    stiffness:0.01
  })
  World.add(world,connect2)
}

function draw() 
{
  background(51);
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,15)
  ellipse(ball2.position.x,ball2.position.y,15)

  line(connect.pointA.x,connect.pointA.y,ball.position.x,ball.position.y)
  line(ball.position.x,ball.position.y,ball2.position.x,ball2.position.y)

}

function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(ball,ball.position,{x:0.05,y:0})
  }
}