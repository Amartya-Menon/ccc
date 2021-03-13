const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var superImg;
var hero,backgroundImg;
var engine,world;
var fly;
function preload() {
//preload the images here
backgroundImg=loadImage("sprites/background.jpg")


}

function setup() {
  createCanvas(3000, 800);
  // create sprites here
  engine = Engine.create();
  world = engine.world;
  
  hero = new Hero(1500,400,(500/2))

  fly = new Fly(superHero.body, { x: 500, y: 50 });

  
  ground = new Ground(600, 600, 1200, 20);



}

function draw() {
  background(0);
ground.display(); 
fly.display();


 

  drawSprites();
}

