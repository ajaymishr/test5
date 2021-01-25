var bg,bgimage,ground1,groundimage1,ground2;
var score=0;

function preload(){
    bgimage=loadImage("tower.png");
    groundimage1=loadImage("grounds.png");
}
function setup(){
    createCanvas(1300,600);
    bg=createSprite(650,250,1550,700);
    ground1=createSprite(650,480,0,20);
    ground2=createSprite(650,20,0,20);
    ground1.addImage(groundimage1)
    ground2.addImage(groundimage1)
    bg.addImage(bgimage);
    bg.scale=1.85;
}
function draw(){
background("black");
bg.velocityX=-(score/2+1.5);
ground1.x=bg.x;
ground2.x=bg.x;
if(bg.x<550){
    bg.x=750
}
drawSprites();
}