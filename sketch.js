var bullet, wall, thickness;
var speed, weight;
var damage, dent;

function setup() {
  createCanvas(800,400);
  speed = Math.round(random(223, 321));
  weight = Math.round(random(30, 52));
  thickness = Math.round(random(22, 83));

  bullet = createSprite(170, 200, 50, 5);
  wall = createSprite(575, 200, thickness, height/2);

  bullet.shapeColor = 'white';

}

function draw() {
  background(0);

  bullet.velocityX = speed;

  if (wall.x - bullet.x < (bullet.width + wall.width)/2) {
    
    //deformation
    damage = 0.5*speed*speed*weight/(thickness*thickness*thickness);
    
    //Velocity back to 0.
    bullet.velocityX = 0;
    bullet.x = wall.x - wall.width/2;
    
    if (damage > 10) {
      wall.shapeColor = 'red';
      dent = 'RED; Lethal!';  
    } else if (damage === 10) {
      wall.shapeColor = 'yellow';
      dent = 'YELLOW; Average!';
    } else if (damage < 10){
      wall.shapeColor = 'green';
      dent = 'GREEN; Good!';
    }
    textSize(18);
    fill("white");
    text('Brutality of damage taken: ' + dent, 50, 50);
    text('Bullet Weight: ' + weight + 'units', 50, 75);
    text('Bullet Speed: ' + speed + 'mph', 50, 100);
    text('Wall Thickness: ' + thickness + 'mm', 50, 125)
  }
  
  drawSprites();
}