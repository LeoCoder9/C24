class log{
    constructor(x,y,height,angle){
       var options = {
           friction: 1.35,
           restitution:0.8,
           density:1
       }
       this.log = Bodies.rectangle(x,y, 20, height, options)
      this.width = 20
      this.height = height     
      Matter.Body.setAngle(this.log,angle)
       World.add(earth, this.log)

    }
    display(){
        fill("brown")
       push()
        translate(this.log.position.x, this.log.position.y)
        rotate(this.log.angle)
        
        
        rect(0,0,this.width, this.height)
       pop()
    }
}