class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("bird.png");
    this.image1 = loadImage("smoke.png")
    this.dotted = []
  }

  display() {
    super.display();
    if(this.body.velocity.x>10&&this.body.position.x>120){
      var point = [this.body.position.x,this.body.position.y]
      this.dotted.push(point)  
    }  
    for(var i=10;i<this.dotted.length;i++){
        image(this.image1,this.dotted[i][0],this.dotted[i][1])
    }
  }
}
