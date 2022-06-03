nose_x=0;
nose_y=0;
leftwrist=0;
rightwrist=0;
difference=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotposes);
}

function modelLoaded(){
    console.log('poseNet is initialized and starting');
}

function gotposes(results){
    if(results.length>0){
        console.log(results);
        nose_x=results[0].pose.nose.x;
        nose_y=results[0].pose.nose.y;
        leftwrist=results[0].pose.leftwrist.x;
        rightwrist=results[0].pose.rightwrist.x;
        difference=floor(leftwrist-rightwrist);
    }
}

function draw(){
    background('white');
    document.getElementById("font_size").innerHTML="font size of my name is " + difference + "px";
    textSize(difference);
    fill('black');
    text('Akshiti',50,400);
}