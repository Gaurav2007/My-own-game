var bg,bgImg,bgImg2,bg2,bgImg3,bg3;

function preload(){
bgImg= loadImage("images/tree.png") 
bgImg2= loadImage("images/tree1.png") 
bgImg3= loadImage("images/tree1.png") 
}

function setup() {
  createCanvas(1500, 900);
  bg=createSprite(750,450,1500,900)
  bg.addImage(bgImg)
  bg.scale=2;
  
  bg2=createSprite(2420,450,1500,900)
  bg2.addImage(bgImg2)
  bg2.scale=2;

  bg3=createSprite(4040,450,1500,900)
  bg3.addImage(bgImg3)
  bg3.scale=2;
}

function draw() {
  
  background('black');
  
  bg.velocityX = -8;
  bg2.velocityX = -8;
  bg3.velocityX = -8;
  if(bg.x<-850){
    bg.destroy();
  }
  if(bg2.x<-850){
    bg2.x = 2420;
  }
  if(bg3.x<-850){
    bg3.x = 2420;
  }
 
  drawSprites();
}
