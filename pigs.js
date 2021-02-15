class pig{
    constructor(x,y){
       var options = {
           friction: 0.33,
           restitution:0.8,
           density:1
       }
       this.pig = Bodies.rectangle(x,y, 50, 50, options)
      this.width = 50
      this.height = 50      
      
       World.add(earth, this.pig)

    }
    display(){
        fill("green")
       push()
        translate(this.pig.position.x, this.pig.position.y)
        rotate(this.pig.angle)
        
        rect(0,0,this.width, this.height)
       pop()
    }
}