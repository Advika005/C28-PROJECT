var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload()
{
	dustbinImg = loadImage("dustbingreen (1).png");
}

function setup() {
    createCanvas(1200, 700);

    engine = Engine.create();
    world = engine.world;

    paper = new Paper(248,287);

    ground = new Ground(1800,10);
    
    dustbin1 = new Dustbin(980,650,150,20);
    dustbin2  = new Dustbin(910,610,20,110);
    dustbin3 = new Dustbin(1045,610,20,110);
    
    dustbin = createSprite(990,580,20,20);
    dustbin.addImage(dustbinImg);
    dustbin.scale = 0.5;

    slingshot = new Slingshot(paper.body,{x:250,y:285});
    
    Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(255);
  text(mouseX+","+mouseY,200,200);

  fill("green")
  textSize(40);
  text("CRUMPLED BALLS - 3",260,100)
  
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper.display();

  slingshot.display();
  
  drawSprites(); 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
   Matter.Body.applyForce(paper.body,paper.body.position,{x:65,y:-44})
  }
}
function mouseDragged(){
  Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  slingshot.fly();
}



