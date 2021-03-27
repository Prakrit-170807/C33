class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("bird.png");
    this.image1 = loadImage("smoke.png")
    this.dotted = []
    this.veiw1=255
  }

  display() {
    super.display();
    if(this.body.position.x>=50&&this.body.velocity.x>=2){
      var point = [this.body.position.x,this.body.position.y]
      this.dotted.push(point)  
    } 
    if(GameMode=='shoot'){
      this.dotted=[]
      this.veiw1=255
      Matter.Body.setAngle(bird.body,0)
    }
    for(var i=10;i<this.dotted.length;i++){
      push()
      World.remove(world,this.dotted)
      this.veiw1=this.veiw1-1
      tint(255,this.veiw1)
      image(this.image1,this.dotted[i][0],this.dotted[i][1])
      pop()
    }
  }
}
