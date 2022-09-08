
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;


function preload()
{
	
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2

	}
	ball = Bodies.circle(50,500,20,ball_options)
	World.add(world,ball)
	ground = new Ground(width/2,679,width,20)
	leftSide = new Ground (900,600,20,120);
	rigthSide = new Ground(1100,600,20,120)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.show()
  leftSide.show()
  rigthSide.show();

  ellipse(ball.position.x,ball.position.y,20,20)
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})

	}
}


