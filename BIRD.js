class bird{
    constructor(x,y){
       var options = {
           friction: 0.33,
           restitution:0.8,
           density:1
       }
       this.bird = Bodies.rectangle(x,y, 50, 50, options)
      this.width = 50
      this.height = 50      
      
       World.add(earth, this.bird)

    }
    display(){
        fill("red")
        this.bird.position.x = mouseX
        this.bird.position.y = mouseY
       push()
        translate(this.bird.position.x, this.bird.position.y)
        rotate(this.bird.angle)
        
        
        rect(0,0,this.width, this.height)
       pop()
    }
}