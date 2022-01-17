function preload(){}

function setup(){
canvas= createCanvas( 800,600);
canvas.position( 110,280);
video= createCapture(VIDEO)
video.hide();
tint_color=" ";
}

function draw(){
    image( video,0,0,800,600);
    tint(tint_color);
}

function applyFilter(){
    tint_color= document.getElementById("color").value;
}

function take_snapshot(){
    save('myImage.jpg');
}
