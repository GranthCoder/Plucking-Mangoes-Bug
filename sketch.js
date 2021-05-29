
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boyImage;
var mango1,mango2,mango3,mango4,mango5;
var stone,tree,ground,parkBg;

var stoneState;
var sling;
function preload()
{
	boyImage = loadImage("boy.png");
	parkBg = loadImage("Park bg.jpg");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//boy = Bodies.rectangle()
	ground = new Ground();
	tree = new Tree();
	Engine.run(engine);
  
	mango1 = new Mango(650,300,30);
	mango2 = new Mango(700,350,40);
	mango3 = new Mango(650,400,30);
	mango4 = new Mango(600,350,40);
	mango5 = new Mango(750,375,50);

	stone = new Stone();
	//stoneState = "rest";

	sling = new SlingShot(stone.body,{x:225, y:height-175})
}


function draw() {
  rectMode(CENTER);
  background(parkBg);
  ground.display();
  tree.display();

  Engine.update(engine);
  image(boyImage,200,height-225,150,200);
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  stone.display();
  
  //drawSprites();
 
}

function mouseDragged(){
	if (stoneState==="rest"){
        Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
    }
}

function mouseReleased(){
	sling.fly();
   	stoneState = "launched";
}

