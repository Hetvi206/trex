//declare variables.
var monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var survivalTime=0;
var m;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  
//create monkey=m.
  m=createSprite(80,315,20,20);
  m.addAnimation("monkey",monkey_running);
  m.scale=0.1;
  
//create ground.
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  
//create griups.
  FoodGroup=createGroup();
  obstacleGroup=createGroup();
  
  
}


function draw() {
background("white")
  
//give survival time.
  stroke("white");
  textSize(20);
  fill("white");
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime= Math.ceil(frameCount/frameRate())
  text("SurvivalTime:"+survivalTime,100,20);
  
//to move ground.
if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
//to make m jump.
if(keyDown("space")&&m.y>=200){
  m.velocityY=-12;
}
  
//to give gravity to m.
  m.velocityY=m.velocityY+0.8;
  
//collide monkey with ground.
  m.collide(ground);
  
  
//declare obstacles and food.
  banana();
 // obstacle();
  
  drawSprites();

}
function obstacle(){
  if(frameCount%300===0){
    var obstacle=createSprite(350,200,10,10);
    obstacle.addImage("obstacle",obstacleImage);
    obstacle.setvelocityX=-5
    obstacle.scale=0.1;
    obstacle.lifetime=150;
    obstacleGroup.add(obstacle);
  }

}
function banana(){
  if(frameCount%80===0){
  var banana=createSprite(350,200,10,10);
  banana.addImage("banana",bananaImage);
  banana.y=Math.round(random(120,200));
  banana.scale=0.1;
  banana.velocityX=-5;
  banana.lifetime=150;
  FoodGroup.add(banana);
}
  
}






