
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var drops = [];
var lightning;
var lightningGroup;
var rain1;
var man;
var maxDrops = 100;
var lightning1_img, lightning2_img, lightning3_img, lightning4_img;

function preload() {
    lightning1_img = loadImage("images/1.png");
    lightning2_img = loadImage("images/2.png");
    lightning3_img = loadImage("images/3.png");
    lightning4_img = loadImage("images/4.png");
}

function setup() {
    createCanvas(500, 600);
    
	engine = Engine.create();
    world = engine.world;

    man = new Umbrella(250,420,100,100);

    rain1 = new Drop(random(50,450),0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");

  if(frameCount % 1 === 0) {
    drops.push(new Drop(random(50, 450), 10))
  }

  for(var i = 0; i < drops.length; i++) {
    drops[i].display();
  }

  rain1.display();

  man.display();

  lightning(250,0);
  
  drawSprites();
 
}

function lightning(x,y) {
    if(frameCount % 60 === 0) {
        lightning = createSprite(x,y,30,30);
        var rand = Math.round(random(1,4));
        switch(rand){
            case 1: lightning.addImage("lightning1",lightning1_img);
            break;
            case 2: lightning.addImage("lightning2", lightning2_img);
            break;
            case 3: lightning.addImage("lightning3", lightning3_img);
            break;
            case 4: lightning.addImage("lightning4", lightning4_img);
            break;
        }

        lightning.lifeTime = 10;

    }
}