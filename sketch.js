let sz=[];
let N,i;

var value=0;
var col = {  
  bc:0,
  r:0,
  g:0,
  b:0 
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  frameRate(5);
}

function draw() {
  
  if (value==0){
    col.bc=0;
    col.r=0;
    col.g=0;
    col.b=0;
  }
  
  if (value==1){
    col.bc=255;
    col.r=255;
    col.g=random(100,255);
    col.b=random(50,255);
  }
  else if (value==2){
    col.bc=(random(0,20),random(0,100),random(0,100));
    col.r=random(0,50);
    col.g=random(0,250);
    col.b=random(0,100);
  }
  else if (value==3){
    col.bc=0;
    col.r=255;
    col.g=random(0,200);
    col.b=random(0,100);
  }
  else if (value==4){
    col.bc=255;
    col.r=random(150,255);
    col.g=random(200,255);
    col.b=255;
    
  }
  
  
  
      
  strokeWeight(1);
  stroke(255); 
  fill(col.r,col.g,col.b,20);
  
  let dfx=random(0,width);
  let dfy=random(0,height);
  let dfsz=random(50,100);
  let dfgap=random(5,200);
  
  ellipse(dfx,dfy,dfsz,dfsz);
  ellipse(dfx,dfy,dfsz+dfgap,dfsz+dfgap);
  
  noStroke();
  fill(col.bc,20);
  rect(0,0,width,height);
  
  if (mouseIsPressed){ 
    N=random(1,3);
    sz=new float(N+3) ;
    
    sz[0]=random(10,200);
    
    for (i=0; i<N+2;i=i+1){
      noStroke();
      fill(col.bc,15);
      rect(0,0,width,height);
      
      fill(col.r,col.g,col.b,50);
      stroke(255);
      strokeWeight(random(2,3));
      
      ellipse(mouseX,mouseY,sz[i],sz[i]);
      sz[i+1]=random(sz[0],width/2);
    }   
  } 
}

function keyTyped(){
  if (key=='s'){  
    value=1;
  }
  
  else if (key=='m'){    
    value=2;
  }
  else if (key=='f'){    
    value=3;
  }
  else if (key=='w'){    
    value=4;
  }
  else if (key=='d'){    
    value=0;
  }
}

function keyPressed(){
  if (keyCode==TAB){  
    noLoop();
  }
  
  if (keyCode==SHIFT){ 
    loop();
  }
    
}
