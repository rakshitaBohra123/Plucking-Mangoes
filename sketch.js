
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree,stone
var ground,boy
var mango1,mango2,mango3


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   tree = new Tree(600,70)
   stone = new Stone(0,0,5,5)
   ground = new Ground(400,80)
   mango = new Mango(600,60)
   mango2 = new Mango(580,70)
   mango3 = new Mango(620,80)
   boy = new Boy(700,470)


   var options = {
    bodyA: boy.body,
    bodyB: stone.body,
    stiffness: 0.04,
    length: 5
   }

   var rope = Constraint.create(options);
   World.add(world,rope)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 ground.display();
 tree.display();
 stone.display();
 mango.display();
 mango2.display();
 mango3.display();
 rope.display();
  drawSprites();
 
}
function mouseDragged(){
Matter.Body.setPosition(boy,stone);

}

function mouseReleased(){
stone.fly();

}
