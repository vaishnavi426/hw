
function setup() {
  createCanvas(1265,650);
  background("white");
  box = createSprite(632.5,325,30,30);

}

function draw() 
{

  // write the code to change background color 
  // to red when RIGHT_ARROW is pressed
  
  if (keyIsDown(RIGHT_ARROW)) 
  {
    background("red");
    
  }
  if (keyIsDown(LEFT_ARROW)) 
  {
    background("blue");
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("yellow");
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("green");
  }


  
  drawSprites();
}

