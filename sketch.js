const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var box3;
var box4;
var Pigs1;
var Logs1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,100,70,70);

    ground = new Ground(600,height,1200,20);

    Pigs1 = new Pigs(810,350);
    Logs1 = new Logs(810, 260, 300, PI/2);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    Pigs1.display();
    Logs1.display();
    ground.display();
}