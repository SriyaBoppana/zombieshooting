var bg,bgImg;
var player, shooterImg, shooter_shooting;
var shooter_2img,shooter_3img,heart1Img,heart2Img;
var winSound,explosionSound,loseSound,zombieImg;

function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png");
  shooter_shooting = loadImage("assets/shooter_3.png");
  heart1Img = loadImage("assets/heart_1.png");
  heart2Img = loadImage("assets/heart_2.png");
  shooter_2img = loadImage("assets/shooter_2.png");
  shooter_3img = loadImage("assets/shooter_3.png");
  winSound = loadSound("assets/win.mp3");
  explosionSound = loadSound("assets/explosion.mp3");
  loseSound = loadSound("assets/lose.mp3");
  bgImg = loadImage("assets/bg.jpeg");
  zombieImg =  loadImage("assets/zombie.png");

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-250, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.48
   player.debug = false
   player.setCollider("rectangle",0,0,300,300)

   zombie = createSprite(displayWidth-200, displayHeight-310, 80, 80);
   zombie.addImage(zombieImg)
     zombie.scale = 0.4
     zombie.debug = false
     zombie.setCollider("rectangle",0,0,300,300)
     zombie.velocityY=-7;
    


}

function draw() {
  background(0); 
  if(keyDown("RIGHT_ARROW")){
    zombie.addImage(zombieImg)
  }

  

  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
  zombie.remove()
}

edges=createEdgeSprites();
zombie.bounceOff(edges);
drawSprites();

}
