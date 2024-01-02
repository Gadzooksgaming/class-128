leftWristX=0;
leftWristy=0;
rightWristX=0;
rightWristY=0;

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function gotPoses(){
    if(results.lenght>0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("LeftWristX"+leftWristX+"leftWristY"+leftWristY);
        
        rightWristX=results[0].pose.rightWrist.x;
        rightWristy=results[0].pose.rightWrist.y;
        console.log("rightWristX"+rightWristX+"rightWristY"+rightWristY);
    }
}

function draw(){
    image(video,0,0,600,500);

}

song="";

function preload(){
    song=loadSound("music.mp3");


}


function play()
{  
    song.play();
    song.setVolume(1);
    song.rate(1);
  }
