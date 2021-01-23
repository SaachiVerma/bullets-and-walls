var wall, thickness;
var bullet, speed, weigth;

function setup() {
  createCanvas(1600,400);

  bullet=createSprite(200, 300, 50, 50);
  bullet.velocityX=speed;

  wall=createSprite(1200, 200, thickness, hieght/2);
  wall.shapeColour=colour(80,80,80)

  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)
}

function draw() {
  background(255,255,255);  
  
  if(wall.x-bullet.x < (bullet.width+wall.width)/2)
  {
    bullet.velocityX=0
    var deformation=0.5 * weight * hieght * speed* speed/22509;
    if(deformation>180)
    {
       bullet.shapeColour=colour(255,0,0)
    }
    if(deformation<180 && deformation>100)
  {
       bullet.shapeColour=colour(230,230,0)
   }

   if(deformation<100)
   {
       bullet.shapeColour=colour(0,255,0)
   }
  }

  if(hasCollided(bullet,wall)){
    bullet.velocityX=0

    var damage=0.5 * weight * speed* speed/(thickness* thickness* thickness)

    if(damage>10){
      wall.shapeColour=color(255,0,0);
    }

    if(damage<10){
      wall.shapeColour=color(0,255,0)
    }
  }

  hasCollided()
  
  drawSprites();
}

function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=iwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }

  return false;
}