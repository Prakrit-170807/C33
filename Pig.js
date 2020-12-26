class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("enemy.png");
    this.view = 255
  }
  display() {
    if(this.body.velocity.x<1){
      super.display();
      
    }
    else{
      push()
      World.remove(world,this.body)
      this.view=this.view-10
      tint(255,this.view)
      image(this.image, this.body.position.x, this.body.position.y, 50, 50)
      pop()
    }
  }
};