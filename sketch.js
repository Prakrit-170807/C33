const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;
var box1, pig1;
var backgroundImg,platform;

var log6,chain,chain2
var image_loder_is_a_Loder=('bg.png','bg2.jpg')
var GameMode= "shoot"

// var GameMode=[1,2,3,4]z
// console.log(GameMode[3])

// var a = [['Prakrit', 'Salini'],['red','purple']]
// a.push("black")
// console.log(a)
// console.log(a[0][0])
// var dotted = [[x1],[y2]]




//at (x1,y1) =>  dotted[x1] dotted[y1]
//dotted[0][0], dotted[0][1]

//at (x2,y2) =>  dotted[x2] dotted[y2]
//dotted[1][0], dotted[1][1]

// console.log(b)


function preload() {
   back_is_a_good_ground()
}

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(width/2,height,width,20);
    platform = new Ground(150, 630, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    log6 = new Log(150,150,70,PI/2)

    bird = new Bird(200,400);
    
    chain = new Chain(bird.body,{x:210,y:445})
    chain2 = new Chain(bird.body,{x:175,y:450})
    

    
 

}

function draw(){
    if(backgroundImg){
        background(backgroundImg);
    }   
    Engine.update(engine);

    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();
    
    chain.display()
    bird.display();
    chain2.display()

    platform.display();

    if(GameMode=="shoot"&&bird.body.position.x<400){
        Matter.Body.setAngle(bird.body,0)
    }
    

}

function mouseDragged(){
    if (GameMode!="loose"&&mouseX<400){
        Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
    }
}

function mouseReleased(){
    chain.fly()
    chain2.fly()
    GameMode="loose"
}

function keyPressed(){
    if (keyCode==82&&GameMode=="loose"){
        Matter.Body.setPosition(bird.body,{x:100,y:100})
        chain.sit(bird.body)
        chain2.sit(bird.body)
        GameMode="shoot"
    } 
}

async function back_is_a_good_ground(){
    var APIanswer= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var APIanswerjson = await APIanswer.json()
    var Datetime = APIanswerjson.datetime
    console.log(Datetime)
    var hour = Datetime.slice(11,13)
    console.log(hour)
    if(hour>=06&&hour<=17){
       image_loder_is_a_Loder='bg.png' 
    }
    else{
        image_loder_is_a_Loder='bg2.jpg' 
    }
    backgroundImg=loadImage(image_loder_is_a_Loder)
}