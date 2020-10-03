let values = []; //going to hold list/array values
let i=0, j=0; //outer and inner loop variable

function setup() {
  frameRate(100); //number of times the function is called in a sec
  createCanvas(800, 500);
  values = new Array(width);
  for(let i=0; i<values.length; i++){
    values[i] = random(height);
  }
}

function draw() {
  for(let k=0; k<500; k++){
  if(i<values.length && j<values.length-i){
    if(values[j]>values[j+1]){
      swap(j, j+1);
    }
    j+=1;
    if(j==values.length-i){
      i+=1;
      j=0;
    }
    }
  }
  background(0);
  stroke(255);
  
  for(let i=0; i<values.length; i++){
    line(i, height, i, height-values[i]);
  }
}

function swap(j,j2){
  let temp = values[j];
  values[j] = values[j2];
  values[j2] = temp;
}