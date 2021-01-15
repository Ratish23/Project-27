
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof1;
var ball1,ball2,ball3,ball4,ball5;
var rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 1200);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof1 = new Roof(380,200,250,20);

	ball1 = new Ball(300,300,20);
	ball2 = new Ball(340,300,20);
	ball3 = new Ball(380,300,20);
	ball4 = new Ball(420,300,20);
	ball5 = new Ball(460,300,20);

	rope1 = new Slingshot(ball1.body,{x:300,y:200});
	rope2 = new Slingshot(ball2.body,{x:340,y:200});
	rope3 = new Slingshot(ball3.body,{x:380,y:200});
	rope4 = new Slingshot(ball4.body,{x:420,y:200});
	rope5 = new Slingshot(ball5.body,{x:460,y:200});
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("purple");
  
	roof1.display();
	ball1.display();
	ball2.display();
	rope1.display();
	ball3.display();
	rope2.display();
	rope3.display();
	ball4.display();
	rope4.display();
	ball5.display();
	rope5.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball1.body,ball2.position,{x:-30,y:0}); 
	} 
} 



