
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);
	fill("blue");
	
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper=new Paper(200,350,30);
	ground=new Ground(400,650,100500,50);
	dustbin1=new Ground(1000,610,300,35);
	dustbin2=new Ground(850,555,50,150);
	dustbin3=new Ground(1150,555,50,150);
       
   	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
paper.display();
ground.display();
dustbin1.display();
dustbin2.display();
dustbin3.display();
}
  
 function keyPressed(){
  if(keyCode===UP_ARROW){
     Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});	  
  }
 }




