
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var engine, world, paper1, ground, dustbin1, dustbin2, dustbin3,dustbinImage; 

function preload(){
dustbinImage=loadImage("dustbingreen.png");


}

function setup() {
    createCanvas(900, 550);
    rectMode(CENTER);

    engine = Engine.create();
    world = engine.world;

    //Create the Bodies Here.
    paper1 = new Paper(100,200,50);
    ground = new Ground(450,545,1000,10);
    dustbin1 = new Dustbin(605,535);
    //dustbin2 = new Dustbin(550,620,20,100);
    //dustbin3 = new Dustbin(670,620,20,100)
    

    Engine.run(engine);
  
}

function draw() {
  
  rectMode(CENTER);
  
  background("yellow");
  
  //Engine.update(engine);
    
  paper1.display();

  ground.display();

  dustbin1.display();
  //dustbin2.display();
  //dustbin3.display();

  
}

function keyPressed(){
    if (keyCode === UP_ARROW ) {
      Matter.Body.applyForce(paper1.body, paper1.body.position, {x: 130,y: -145})
    }
  }



