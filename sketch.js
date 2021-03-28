let sz=[];
let N,i;

var value=0;
var col = {  
  bc:0,
  r:0,
  g:0,
  b:0 
}

//clear the background
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  frameRate(5);
}
//for each frame
function draw() {
  // if value is 0 
  if (value==0){
    //Color the circle and background according to the default concept.
    col.bc=0;
    col.r=0;
    col.g=0;
    col.b=0;
  }
  // if value is 1 
  if (value==1){
    //Color the circle and background according to the spring concept.
    col.bc=255;
    col.r=255;
    col.g=random(100,255);
    col.b=random(50,255);
  }
  // if value is 2 
  else if (value==2){
    //Color the circle and background according to the summer concept.
    col.bc=(random(0,20),random(0,100),random(0,100));
    col.r=random(0,50);
    col.g=random(0,250);
    col.b=random(0,100);
  }
  // if value is 3
  else if (value==3){
    //Color the circle and background according to the fall concept.
    col.bc=0;
    col.r=255;
    col.g=random(0,200);
    col.b=random(0,100);
  }
  // if value is 4
  else if (value==4){
    //Color the circle and background according to the winter concept.
    col.bc=255;
    col.r=random(150,255);
    col.g=random(200,255);
    col.b=255;
    
  }
  
  
  
  //set the option of background circles    
  strokeWeight(1);
  stroke(255); 
  fill(col.r,col.g,col.b,20);
  //determine the position and size of background circles randomly
  let dfx=random(0,width);
  let dfy=random(0,height);
  let dfsz=random(50,100);
  let dfgap=random(5,200);
  //draw two b.c. circles of random size at the random position
  ellipse(dfx,dfy,dfsz,dfsz);
  ellipse(dfx,dfy,dfsz+dfgap,dfsz+dfgap);
  
  //set all circles fade out slowly 
  noStroke();
  fill(col.bc,20);
  rect(0,0,width,height);
  
  //if mouse pressed
  if (mouseIsPressed){ 
    //determine the number of main circles randomly
    N=random(1,3);
    sz=new float(N+3) ;
    //Determines the radius of the smallest circle randomly 
    sz[0]=random(10,200);
    // for each i
    for (i=0; i<N+2;i=i+1){
      //set previous circles fade out slowly
      noStroke();
      fill(col.bc,15);
      rect(0,0,width,height);
      //set the options of main circles
      fill(col.r,col.g,col.b,50);
      stroke(255);
      strokeWeight(random(2,3));
      //draw main circles of size sz[i] at mouse position
      ellipse(mouseX,mouseY,sz[i],sz[i]);
      //set the radius of next first circle
      sz[i+1]=random(sz[0],width/2);
    }   
  } 
}

function keyTyped(){
  //if s key is pressed
  if (key=='s'){ 
    //1 value
    value=1;
  }
  //if m key is pressed
  else if (key=='m'){   
    //2 value
    value=2;
  }
  //if f key is pressed
  else if (key=='f'){ 
    //3 value
    value=3;
  }
  //if w key is pressed
  else if (key=='w'){  
    //4 value
    value=4;
  }
  //if d key is pressed
  else if (key=='d'){
    //0 value
    value=0;
  }
}

function keyPressed(){
  // if TAB key pressed
  if (keyCode==TAB){  
    //stop drawing
    noLoop();
  }
  // if SHIFT key pressed
  if (keyCode==SHIFT){ 
    ////continue drawing
    loop();
  }    
}
