noseX = 0;
noseY = 0;
leftWristX = 0;
rightWristX = 0;
difference = 0 ;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 500);
    canvas.position(560, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("poseNet is initialized!");
}

function draw() {
    background("#9acd32");
    document.getElementById("square_side").innerHTML ="width and height of the square will be- "+difference+"px";
    fill('#90EE90');
    stroke('#FFA500');
    square(noseX, noseY, difference);
}

function gotPoses(results) {
    if(results.length > 0){
        console.log(results);   
     noseX = results[0].pose.nose.x;
     noseY = results[0].pose.nose.y;
     console.log("NoseX = " + noseX+ "NoseY = " + noseY);
     leftWristX = results[0].pose.leftWrist.x;
     rightWristX = results[0].pose.rightWrist.x;
     difference = floor(leftWristX - rightWristX);
     console.log("leftwristX = "+leftWristX+"rightwristx"+rightWristX+ "difference = " + difference);     
    }
}