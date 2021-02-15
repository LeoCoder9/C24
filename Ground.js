class Ground{
    constructor(x,y,width,height){
        var options = {

            isStatic : true
          }
       this.Ground= Bodies.rectangle(x,y,width,height, options); //x,y,w,h     r =20
     this.width = width
     this.height = height  
     World.add(earth,this.Ground);


    }
    display(){
        rectMode(CENTER);
        fill("darkgreen")

        rect(this.Ground.position.x,this.Ground.position.y, this.width,this.height); //x,y,w,h
    }
}