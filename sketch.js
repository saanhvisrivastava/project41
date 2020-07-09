const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies
var  raindrop=[]

var symbol
var batman;
var man;

function preload(){
batman=loadImage("batman.png");
}


function setup() {
  createCanvas(1200,400);
  engine= Engine.create();
  world=engine.world;

  
  
 
 

  /*for(i=0;i<26;i++)
  {
    symbol="B"
    raindrop[i]=new RainDrops(symbol)
    console.log(symbol)
  } */
for(i=0;i<500;i++)
{
  
 
  raindrop[i]=new RainDrops();
}



  man=new Man(400,250,300,400);
}

function draw() {
  background("black");  

  Engine.update(engine)
  man.display();

  
  for(i=0;i<raindrop.length;i++)
  {
    raindrop[i].display();
    raindrop[i].fall();
  }
  

  
 // raindrop.display()
 // drawSprites();
}

