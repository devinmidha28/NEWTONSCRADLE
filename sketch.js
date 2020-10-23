const constraint = Matter.Constraint
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	bob1 = new Bob(200,200,20,20);
	bob2 = new Bob(210,200,20,20);
	bob3 = new Bob(220,200,20,20);
	bob4 = new Bob(230,200,20,20);
	bob5 = new Bob(240,200,20,20);

	roof1 = new Roof(450,50,500,20);
	
	rope1 = new Rope (bob1.object,roof1.object, -100, 0);
	rope2 = new Rope (bob2.object,roof1.object, -100, 0);
	rope3 = new Rope (bob3.object,roof1.object, -100, 0);
	rope4 = new Rope (bob4.object,roof1.object, -100, 0);
	rope5 = new Rope (bob5.object,roof1.object, -100, 0);


	Engine.run(engine);

	
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof1.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}



