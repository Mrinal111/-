var fixedRect,movingRect;
var gameObject,gameObject2,gameObject3,gameObject4

function setup() {
  createCanvas(1200,800);
  gameObject=createSprite(100,100,50,50);
  gameObject.shapeColor="gray"

  gameObject2=createSprite(200,100,50,50);
  gameObject.shapeColor="gray"

  gameObject3=createSprite(300,100,50,50);
  gameObject.shapeColor="gray"

  gameObject4=createSprite(400,100,50,50);
  gameObject.shapeColor="gray"
  
  movingRect=createSprite(400,200,80,30);
  movingRect.shapeColor="gray"
  //movingRect.debug=true
  R1=createSprite(1000,100,50,80);
  R1.shapeColor="lightBlue";
  R2=createSprite(1000,800,80,30);
  R2.shapeColor="lavender";
  R1. velocityY=5;

  R2.velocityY=-5
}

function draw() {
  background("black"); 
  movingRect.x=World.mouseX 
  movingRect.y=World.mouseY

  if(isTouching(movingRect,gameObject2)){
    movingRect.shapeColor="lightBlue"
    gameObject2.shapeColor="pink"
  }
  else{
    movingRect.shapeColor="gray"
    gameObject2.shapeColor="gray"
  }
bounceOff(R1,R2)
  drawSprites();
}
