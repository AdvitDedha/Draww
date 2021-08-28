canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var color = "red";
var width = 2;
var last_x, last_y;
var screen_width = screen.width;
if(screen_width  < 992){
    document.getElementById("myCanvas").width = screen_width - 70;
    document.getElementById("myCanvas").height = screen.height - 30;
    document.body.style.overflow = "hidden"
}
canvas.addEventListener("touchstart", start);
function start(e){
color = document.getElementById("color").value;
width = document.getElementById("width").value;
last_x = e.touches[0].clientX - canvas.offsetLeft;
last_y = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", mooove);
function mooove(e){
    var current_x = e.touches[0].clientX - canvas.offsetLeft;
    var current_y = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.moveTo(last_x, last_y);
    ctx.lineTo(current_x, current_y);
    ctx.stroke();
    last_x = current_x;
    last_y = current_y;
}
function cleararea(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}