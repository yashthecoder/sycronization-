var ball;
var database, position ;


function setup(){
    database = firebase.database ();

    createCanvas(500,500);
    ball = createSprite(250,250,25,25);
    ball.shapeColor = "red";
    var ballposition = database.ref ('ball/position');
    ballposition.on("value",readposition);

}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writeposition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writeposition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writeposition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writeposition(0,+1);
    }
    drawSprites();
}

function readposition(data){
    position = data.val ();

    ball.x = position.x;
    ball.y = position.y;

}

function writeposition (x,y){
    database.ref ('ball/position').set ({
        'x': position.x + x, 
        'y': position.y + y,

    })
     }

