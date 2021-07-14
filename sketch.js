var trex, trexImg;

function preload(){
trexImg = loadAnimation("trex1.png","trex3.png","trex4.png");
}

function setup(){
createCanvas(600,200);

trex = createSprite(50,100,20,20);
trex.addAnimation("running",trexImg);
trex.scale = 0.5;

edges = createEdgeSprites();
}

function draw(){
background("lightgrey");

if(keyDown("space")){
  trex.velocityY = -14;
}

trex.velocityY = trex.velocityY + 1;

trex.collide(edges);

drawSprites();
}
