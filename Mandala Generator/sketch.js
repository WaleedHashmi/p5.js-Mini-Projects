var mandalaSize = 800;
var m = new mandala;

function mandala(){
    this.nSegments = 4;
    this.size = 3;
    this.line = []
    this.isDrawing = false;
    
    this.display = function(){
        //Background
        fill(240,240,240); 
        noStroke();
        ellipse (height/2,width/2,height,width); 
        
        
        //drawing the curve
        stroke(0);
        beginShape();
        for (var i=0; i<this.line.length; i++){
            console.log('a');
            curveVertex(this.line[i][0],this.line[i][1]);
        }
        endShape();        
    }
     
    
    this.draw = function(){
        if (this.isDrawing && (dist(mouseX,mouseY,height/2,width/2)<mandalaSize/2)){
            this.line.push([mouseX,mouseY]); 
        }
    }
}
  


function setup(){
    createCanvas (mandalaSize,mandalaSize);
} 

function draw() {
    background (255,255,255);
    m.draw();
    m.display();
    
    
}


function mousePressed() {
    if (dist(mouseX,mouseY,height/2,width/2)<mandalaSize/2){
        if (m.isDrawing){
            m.isDrawing = false;
        } else{
           m.isDrawing = true;
        }
    }  

}


