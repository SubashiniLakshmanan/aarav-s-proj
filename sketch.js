var ground, ball, wall1, base , wall2,dustbin
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
  
	createCanvas(1600, 700);
  rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;

	ball = new BallClass(200,450,40)
    ground = new Ground(width/2,670,width,20);
    dustbin = new Dustbin(1200,600,120,150)

  
  
    Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ground.display();
  ball.display();
  dustbin.display();
  drawSprites();
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
  
  }
}

