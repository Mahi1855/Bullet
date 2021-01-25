var wall,thickness
var bullet,speed,weight



function setup() {
  createCanvas(1600,400);
  thickness=random(22,83)
  wall = createSprite(1200,200,thickness,height/2)
  bullet = createSprite(500,200,70,30)
  speed=random(223,321)
  weight=random(30,52)
  bullet.velocityX = speed
}

function draw() {
  background(255,255,255);  
  drawSprites();
  if(hascollided(bullet,wall)){
  bullet.velocityX = 0
  var damage = 0.5 * weight * speed* speed/(thickness *thickness *thickness)

  if (damage>10){
    wall.shapeColor = "red"
  }

  if (damage<10){
    wall.shapeColor = "green"
  }
  }
}
function hascollided(Lbullet,Lwall){
bulletRightEdge=Lbullet.x+Lbullet.width;
wallLeftEdge=Lwall.x
if(bulletRightEdge>=wallLeftEdge){
return true
}
return false
}