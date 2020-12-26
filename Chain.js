class Chain {
    constructor(bodyA,pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.1,
            length : 16
    
        }
        this.pointB = pointB
        this.chain = Constraint.create(options)
        this.image1 = loadImage("sling1.png")
        this.image2 = loadImage("sling2.png")
        this.image3 = loadImage("sling3.png")
        this.image4 = loadImage("sling3.png")
        World.add(world,this.chain)
    }

    display(){
        image(this.image1, 190, 435, 30, 110);
        image(this.image2, 170, 440, 30, 60);
        image(this.image3, 210, 445, 10, 10);
        image(this.image4, 175, 450, 10, 10)
        if(this.chain.bodyA!=null){
        var pointA = this.chain.bodyA.position
        var pointB = this.pointB
        push()
        strokeWeight(8)
        stroke("#301608")
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        pop()
        } 
    }

    fly() { 
       this.chain.bodyA=null 
    }

    sit(body){
        this.chain.bodyA=body
    }
}