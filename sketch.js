var hball,database;
var position;


function setup(){
    database = firebase.database();
    createCanvas(500,500);
   hball = createSprite(250,250,10,10);
   hball.shapeColor = "red";

   var hballPosition = database.ref("ball/position");
   hballPosition .on("value",readPosition,showerror);

}


function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function readPosition(data){
position = data.val ();
hball.x = position.x;
hball.y = position.y;
}
function showerror(){
    console.log("error");
}

function writePosition(x,y){
    database.ref("ball/position").set({
        'x':position.x+x,
        'y':position.y+y     
     })
    
    }
