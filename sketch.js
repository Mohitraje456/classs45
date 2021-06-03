var runingman

function preload(){
runingman = loadAnimation ('run1.png','run2.png')

}


function setup() {
  createCanvas(800,400);
  man = createSprite(400, 200, 50, 50);

  man .addAnimation ( "man",runingman)

}

function draw() {
  background("white");  
  drawSprites();
}