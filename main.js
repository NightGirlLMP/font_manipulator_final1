diffference = 0;
rightWristX = 0;
leftWristX = 0;
noseX = 0;
noseY = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(500,500);
    video.position(150,85);

    canvas = createCanvas(425,425);
    canvas.position(750,127);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet is initialized!');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);

        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = "+noseX+"  noseY = "+noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX = "+leftWristX+"  rightWristX = "+rightWristX+"  difference = "+difference);
    }
}


function draw(){
    background('rgb(153, 152, 152)');
    fill("#F90093");
    textSize(floor(leftWristX - rightWristX));
    text("Looluwa", noseX, noseY);
}