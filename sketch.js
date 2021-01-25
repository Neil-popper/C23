const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;



    ground = new Ground (200,375,400,40)
    box = new Box (300,200,50,50)
    box2 = new Box (330,260,50,50)



    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    
    ground.display();
    box.display();
    box2.display();
}
