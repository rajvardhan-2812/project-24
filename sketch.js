
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Canvas;

function preload()
{
	
}

function setup() {
	Canvas=createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new ground(400,600,800,20)

	bin1 = new dustbin(600,540,20,100)

bin2 = new dustbin(685,583,150,15)

bin3 = new dustbin(770,540,20,100)

ball1 = new ball(100,500,25)
	Engine.run(engine);
  

}


function draw() {
  rectMode(CENTER);
  background(0);
  
  {
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:85,y:-85})
	}
}

  ground1.display()
 bin1.display()
 bin2.display()
 bin3.display()
 ball1.display()
  drawSprites();

}



